<script>
    export default {
        props: {
            added_classes: {
                type: Object
            }
        },
        data() {
            return {
                addedClasses: {}
            }
        },
        mounted() {
            this.addClassesToItemsByQueries(this.added_classes)
            this.addClassesToItemsByQueries(this.addedClasses)
        },
        updated() {
            this.$nextTick(function () {
                this.addClassesToItemsByQueries(this.added_classes)
                this.addClassesToItemsByQueries(this.addedClasses)
            })
        },
        watch: {
            added_classes: {
                immediate: true,
                deep: true,
                handler(newAddedClasses) {
                    this.$forceUpdate()
                }
            },
            addedClasses: {
                immediate: true,
                deep: true,
                handler(newAddedClasses) {
                    this.addedClasses = newAddedClasses
                    this.$forceUpdate()
                }
            }
        },
        methods: {
            addClass(query, classes) {
                if (!Array.isArray(classes)) {
                    classes = [ classes ]
                }
                if (!this.addedClasses) {
                    this.addedClasses = {}
                }
                if (this.addedClasses[query]) {
                    if (!Array.isArray(this.addedClasses[query])) {
                        this.addedClasses[query] = [ this.addedClasses[query] ]
                    }
                    this.addedClasses[query] = this.addedClasses[query].concat(classes)
                }
                else {
                    this.addedClasses[query] = classes
                }
                this.addedClasses = JSON.parse(JSON.stringify(this.addedClasses))
            },
            removeClass(query, classToRemove) {
                this.removeClassFromItemsByQuery(query, classToRemove)
                if (this.addedClasses && this.addedClasses[query]) {
                    if (Array.isArray(this.addedClasses[query])) {
                        this.addedClasses[query] = this.addedClasses[query].filter(function (currentClass) {
                            return currentClass != classToRemove
                        })
                    }
                    else if (this.addedClasses[query] == classToRemove) {
                        this.addedClasses.filter(function (currentClass) {
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
                    this.addClassesToItems(this.$el, appendClasses)
                }
                else {
                    let selectedItems = this.$el.querySelectorAll(query)
                    this.addClassesToItems(selectedItems, appendClasses)
                }
            },
            addClassesToItems(items, appendClasses) {
                if (Array.isArray(appendClasses)) {
                    let self = this
                    appendClasses.forEach(function (appendClass) {
                        self.addClassesToItems(items, appendClass)
                    })
                }
                else {
                    if (NodeList.prototype.isPrototypeOf(items)) {
                        items.forEach(function(item) {
                            if (!item.classList.contains(appendClasses)) {
                                item.classList.add(appendClasses)
                            }
                        })
                    }
                    else {
                        if (!items.classList.contains(appendClasses)) {
                            items.classList.add(appendClasses)
                        }
                    }
                }
            }
        }
    }
</script>
