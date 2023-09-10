<script>
    export default {
        props: {
            redirect_enabled: {
                type: Boolean,
                default: false
            }
        },
        data() {
            let link = new URL(window.location)
            link.pathname += '/get-data'
            return {
                redirectUrl: window.location.href,
                ajaxUrl: link.href,
                redirected: false,
                dataRefresher: new Waiter(500),
                refreshDataEnabled: false
            }
        },
        mounted() {
            this.refreshDataEnabled = true
        },
        methods: {
            refreshData() {
                if (this.refreshEnabled) {
                    if (this.redirect_enabled) {
                        if (!this.redirected) {
                            this.redirected = true
                            $.redirect(this.redirectUrl, this.refreshInputData)
                        }
                    }
                    else {
                        this.refreshDataWithAjax()
                    }
                }
            },
            refreshDataWithAjax() {
                if (this.refreshEnabled) {
                    this.dataRefresher.resetAndExecute(() => {
                        $.post({
                            url: this.ajaxUrl,
                            data: this.refreshInputData
                        }).done((data) => {
                            this.processResponse(data)
                        })
                    })
                }
            }
        }
    }
</script>
