
<template>
    <div class="scroll-container">
        <div class="scroll-content">
            <slot>

            </slot>
        </div>
    </div>

</template>
<style scoped>
    .scroll-container{
        height: 100%;
        overflow: hidden;
    }
</style>
<script>
    import  {Scroller} from 'scroller'
    import Vue from 'vue'
    export default {
        props: {
            scrollX: Boolean,
            scrollY: Boolean,
            bouncing: Boolean,
        },
        mounted(){
            let transform = 'transform';
            if(typeof document.body.style.transform==='undefined'){
                transform = 'webkitTransform'
            }
            let container = this.$el;
            let content = this.$el.querySelector('.scroll-content');
            let scrollerObj = new Scroller(function(left, top, zoom) {
                content.style[transform]='translate3d(' + (-left) + 'px,' + (-top) + 'px,0) scale(' + zoom + ')';
            }, {
                scrollingX: this.scrollX,
                scrollingY: this.scrollY,
                bouncing: this.bouncing
            });
            scrollerObj.setDimensions(container.offsetWidth, container.offsetHeight, content.offsetWidth, content.offsetHeight);

            container.addEventListener("touchstart", function(e) {
                // Don't react if initial down happens on a form element
                if (e.touches[0] && e.touches[0].target && e.touches[0].target.tagName.match(/input|textarea|select/i)) {
                    return;
                }

                scrollerObj.doTouchStart(e.touches, e.timeStamp);
                e.preventDefault();
            }, false);

            container.addEventListener("touchmove", function(e) {
                scrollerObj.doTouchMove(e.touches, e.timeStamp, e.scale);
            }, false);

            container.addEventListener("touchend", function(e) {
                scrollerObj.doTouchEnd(e.timeStamp);
            }, false);

            container.addEventListener("touchcancel", function(e) {
                scrollerObj.doTouchEnd(e.timeStamp);
            }, false);
        }


    }





</script>