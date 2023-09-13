<template lang="pug">
    include Template.pug
</template>
    
<script>
    import { mixin as clickaway } from "vue-clickaway";
    
    export default {
        name: "VSelect",
        mixins: [clickaway],
        props: {
            addClass:{
                type: String,
                default: ""
            },
            disabled: {
                type: Boolean,
                default: false
            },
            disabledProp: {
                type: String,
                default: "disabled"
            },
            defaultTitle: {
                type: String,
                default: "Nothing selected"
            },
            searchNotFound: {
                type: String,
                default: "No results matched"
            },
            searchPlaceholder: {
                type: String,
                default: "Search"
            },
            options: {
                type: Array,
                default: () => []
            },
            searchable: {
                type: Boolean,
                default: false
            },
            showDefaultOption: {
                type: Boolean,
                default: false
            },
            textProp: {
                type: String,
                default: "text"
            },
            value: {
                type: [Object, String, Number],
                default: null
            },
            valueProp: {
                type: String,
                default: "value"
            },
            valuePlaceHolder: {
                type: String,
                default: "Nothing is Selected"
            },
            data_url: {
                type: String
            },
            data_infos: {
                type: Object
            }
        },
        data() {
            return {
                show: false,
                selectedValue: null,
                searchValue: "",
                typeAheadPointer: -1,
                lastValueChangeTime: Date.now()
            };
        },
        computed: {
            title() {
                return this.selectedValue
                    ? this.getOptionLabel(this.selectedValue)
                    : this.defaultTitle;
            },
            filteredOptions() {
                if (this.data_url) {
                    return this.options
                }
                else {
                    let filteredOptions = this.getLongFilteredOptions()
                    filteredOptions.forEach(item => {
                        item.text = shortString(item.text)
                    })
                    return filteredOptions
                }
            },
            reversedOptions() {
                return [...this.filteredOptions].reverse();
            },
            lastOptionIndex() {
                return this.filteredOptions.length - 1;
            }
        },
        watch: {
            options: {
                immediate: true,
                handler(newOptions) {
                    if (newOptions) {
                        for (let i = 0; i < newOptions.length; ++i) {
                            if (typeof(newOptions[i]) != 'object') {
                                newOptions[i] = {
                                    value: newOptions[i],
                                    text: newOptions[i]
                                }
                            }
                        }
                        newOptions.forEach(option => {
                            option.text = shortString(option.text, 30)
                        })
                    }
                },
                flush: 'sync'
            },
            value: {
                immediate: true,
                handler(newVal) {
                    const index = this.options.findIndex(op =>
                        this.isEqualOption(op, newVal)
                    );
                    this.onSelect(newVal, index);
                },
                flush: 'sync'
            },
            searchValue: {
                handler(newValue) {
                    this.lastValueChangeTime = Date.now()
                    if (this.data_url && typeof newValue !== 'undefined' && newValue !== null) {
                        let currentChangeTime = this.lastValueChangeTime
                        setTimeout(() => {
                            if (currentChangeTime == this.lastValueChangeTime) {
                                this.refreshOptions(newValue)
                            }
                        }, 500)
                    }
                },
                flush: 'sync'
            },
        },
        methods: {
            onSelect(option, index) {
                if (option && !option[this.disabledProp]) {
                    this.selectedValue = option;
                    this.typeAheadPointer = index;
                    this.hideDropdown();
                    for(var i=0; i<this.options.length; i++){
                        if(option.value==this.options[i].value){
                            option=this.options[i];
                        }
                    }
                    if(option.value==null){
                        this.selectedValue = null;
                    }
                    else{
                        this.$emit("input", option, option.valueProp, index);
                    }
                } else if (option === null) {
                    this.selectedValue = null;
                }
            },
            onEscape() {
                this.hideDropdown();
            },
            typeAheadUp() {
                if (!this.show) {
                    this.show = true;
                }
                if (this.typeAheadPointer > 0) {
                    const nextPointer = this.typeAheadPointer - 1;
                    const option = this.filteredOptions[nextPointer];
                    const isDisabled = option ? option[this.disabledProp] || false : false;
                    if (!isDisabled) {
                        this.typeAheadPointer--;
                    } else {
                        this.typeAheadPointer--;
                        this.typeAheadUp();
                    }
                } else {
                    const nextEnabledOption = this.reversedOptions.findIndex(
                        o => o[this.disabledProp] !== true
                    );
                    this.typeAheadPointer = this.lastOptionIndex - nextEnabledOption;
                }
            },
            typeAheadDown() {
                if (!this.show) {
                    this.show = true;
                }
                if (this.typeAheadPointer < this.lastOptionIndex) {
                    const nextPointer = this.typeAheadPointer + 1;
                    const option = this.filteredOptions[nextPointer];
                    const isDisabled = option ? option[this.disabledProp] || false : false;
                    if (!isDisabled) {
                        this.typeAheadPointer++;
                    } else {
                        this.typeAheadPointer++;
                        this.typeAheadDown();
                    }
                } else {
                    const nextEnabledOption = this.filteredOptions.findIndex(
                        o => o[this.disabledProp] !== true
                    );
                    this.typeAheadPointer = nextEnabledOption;
                }
            },
            typeAheadSelect() {
                if (this.filteredOptions[this.typeAheadPointer]) {
                    this.onSelect(
                        this.filteredOptions[this.typeAheadPointer],
                        this.typeAheadPointer
                    );
                }
            },
            hideDropdown() {
                this.show = false;
                this.searchValue = "";
            },
            getLongFilteredOptions() {
                if (this.searchable && this.searchValue.length > 0) {
                    let items = this.options.filter(item => {
                        if (typeof item === "object") {
                            return (
                                item[this.textProp]
                                    .toLowerCase()
                                    .indexOf(this.searchValue.toLowerCase()) !== -1
                            );
                        } else {
                            return (
                                item.toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1
                            );
                        }
                    })
                    return items
                }
                else {
                    return this.options
                }
            },
            getOptionLabel(option) {
                if (typeof option === "object") {
                    return option[this.textProp];
                }
                return option;
            },
            refreshOptions(searchedText) {
                this.data_infos['searched-text'] = searchedText
                this.data_infos['_token'] = getCsrfToken()
                $.post({
                    url: this.data_url,
                    data: this.data_infos
                }).done((data) => {
                    if (Array.isArray(data)) {
                        this.options = data
                        this.$emit('update:options', data)
                    }
                })
            },
            isSelectedOption(option, index) {
                if (this.typeAheadPointer === -1 && this.selectedValue) {
                    return this.isEqualOption(option, this.selectedValue);
                }
                return this.typeAheadPointer === index;
            },
            isEqualOption(a, b) {
                if (a && b && typeof a === "object" && typeof b === "object") {
                    return (
                        a[this.textProp] === b[this.textProp] &&
                        a[this.valueProp] === b[this.valueProp]
                    );
                }
                return a === b;
            },
            toggle() {
                if (!this.disabled) {
                    this.show = !this.show;
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
    