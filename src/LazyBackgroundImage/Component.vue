<script>
    import ImageSize from 'helper-vue-components/ImageSize/Component.vue'

    export default {
        mixins: [
            ImageSize,
        ],
        mounted() {
            if (this.lazyBackgroundImages) {
                console.log('sdf')
                if ('IntersectionObserver' in window) {
                    const observer = new IntersectionObserver(
                        (entries) => {
                            entries.map((entry) => {
                                if (entry.isIntersecting) {
                                    console.log('sdf2')
                                    let lazyBackgroundImage = this.getCorrespondingLazyImage(entry.target)
                                    console.log(lazyBackgroundImage)

                                    if (lazyBackgroundImage) {
                                        // Item has crossed our observation
                                        // threshold - load src from data-src
                                        const imageUrl = this.getCalculatedWidthUrl(lazyBackgroundImage.widths, lazyBackgroundImage.url)
                                        entry.target.style.backgroundImage = "url(" + imageUrl + ")"
                                        // Job done for this item - no need to watch it!
                                        observer.unobserve(entry.target)
                                    }
                                }
                            })
                        },
                        { 
                            rootMargin: "300px" 
                        }
                    )
                    this.lazyBackgroundImages.forEach(lazyBackgroundImage => observer.observe(lazyBackgroundImage.ref))
                } 
                else {
                    this.lazyBackgroundImages.forEach(lazyBackgroundImage => {
                        const imageUrl = this.getCalculatedWidthUrl(lazyBackgroundImage.widths, lazyBackgroundImage.url)
                        lazyBackgroundImage.ref.style.backgroundImage = "url('" + imageUrl + "')"
                    })
                }
            }
        },
        methods: {
            getCorrespondingLazyImage(entry) {
                if (this.lazyBackgroundImages) {
                    for (let lazyBackgroundImage of this.lazyBackgroundImages) {
                        if (lazyBackgroundImage.ref == entry) {
                            return lazyBackgroundImage
                        }
                    }
                    return null
                }
                else {
                    return null
                }
            }
        }
    }
</script>