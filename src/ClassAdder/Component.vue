<script>
    export default {
        props: {
            added_classes: {
                type: Object
            }
        },
        mounted() {
            this.addClassesToItemsByQueries(this.added_classes)
        },
        updated() {
            this.$nextTick(() => {
                this.addClassesToItemsByQueries(this.added_classes)
            })
        },
        methods: {
            addClass(query, classes) {
                this.addClassesToItemsByQuery(query, classes)
                if (!Array.isArray(classes)) {
                    classes = [ classes ]
                }
                if (!this.added_classes) {
                    this.added_classes = {}
                    //this.$emit('update:added_classes', {})
                }
                if (this.added_classes[query]) {
                    if (!Array.isArray(this.added_classes[query])) {
                        this.added_classes[query] = [ this.added_classes[query] ]
                        //this.$emit('update:added_classes', [ this.added_classes[query] ])
                    }
                    this.added_classes[query] = this.added_classes[query].concat(classes)
                    //this.$emit('update:added_classes', this.added_classes[query].concat(classes) )
                }
                else {
                    this.added_classes[query] = classes
                    //this.$emit('update:added_classes', classes)
                }
            },
            removeClass(query, classToRemove) {
                this.removeClassFromItemsByQuery(query, classToRemove)
                if (this.added_classes && this.added_classes[query]) {
                    if (Array.isArray(this.added_classes[query])) {
                        this.added_classes[query] = this.added_classes[query].filter(function (currentClass)
                        {
                            return currentClass != classToRemove
                        })
                    }
                    else if (this.added_classes[query] == classToRemove) {
                        this.added_classes.filter(function (currentClass) {
                            return currentClass != classToRemove
                        })
                    }
                }
            },
            removeClassFromItemsByQuery(query, classToRemove) {
                if (this.$el) {
                    let itemToChange
                    if (query == 'root') {
                        itemToChange = this.$el
                    }
                    else {
                        itemToChange = this.$el.querySelectorAll(query)
                    }
                    itemToChange.classList.remove(classToRemove)
                }
            },
            addClassesToItemsByQueries(classObject) {
                if (this.$el && classObject) {
                    for (const [query, className] of Object.entries(classObject)) {
                        this.addClassesToItemsByQuery(query, className)
                    }
                }
            },
            addClassesToItemsByQuery(query, appendClasses) {
                if (query == 'root') {
                    if (this.$el) {
                        this.addClassesToItems(this.$el, appendClasses)
                    }
                }
                else if (this.$el.nodeName == '#comment') {
                    console.log('Added classes query returned comment node. Skipped query: ' + query)
                }
                else {
                    let selectedItems = this.$el.querySelectorAll(query)
                    this.addClassesToItems(selectedItems, appendClasses)
                }
            },
            addClassesToItems(items, appendClasses) {
                if (Array.isArray(appendClasses)) {
                    let self = this
                    appendClasses.forEach((appendClass) => {
                        self.addClassesToItems(items, appendClass)
                    })
                }
                else {
                    if (NodeList.prototype.isPrototypeOf(items)) {
                        items.forEach((item) => {
                            if (!item.classList.contains(appendClasses)) {
                                item.classList.add(appendClasses)
                            }
                        })
                    }
                    else {
                        if (items.classList && !items.classList.contains(appendClasses)) {
                            items.classList.add(appendClasses)
                        }
                    }
                }
            }
        }
    }
</script>
