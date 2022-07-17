<script>
    export default {
        props: {
            added_classes: {
                type: Object
            }
        },
        methods: {
            getRowClassForArray(rowArray, mdLimit, smLimit) {
                switch (rowArray.length) {
                    case 1:
                        return this.getRowClass(1, mdLimit, smLimit)
                    case 2:
                        return this.getRowClass(2, mdLimit, smLimit)
                    case 3:
                        return this.getRowClass(3, mdLimit, smLimit)
                    case 4:
                        return this.getRowClass(4, mdLimit, smLimit)
                    case 5:
                    case 6:
                        return this.getRowClass(6, mdLimit, smLimit)
                    default:
                        return this.getRowClass(12, mdLimit, smLimit)
                }
            },
            getRowClass(columnCount, mdLimit, smLimit) {
                if (smLimit >= columnCount) {
                    return 'col-sm-' + this.getColumnSize(columnCount)
                }
                else if (mdLimit >= columnCount) {
                    return 'col-md-' + this.getColumnSize(columnCount)
                }
                else {
                    return 'col-lg-' + this.getColumnSize(columnCount)
                }
            },
            getColumnSize(columnCount) {
                if (columnCount > 12) {
                    throw new Error('Invalid column count')
                }
                else {
                    switch (rowArray.length) {
                        case 1:
                            return 12
                        case 2:
                            return 6
                        case 3:
                            return 4
                        case 4:
                            return 3
                        case 5:
                        case 6:
                            return 2
                        default:
                            return 1
                    }
                }
            }
        }
    }
</script>
