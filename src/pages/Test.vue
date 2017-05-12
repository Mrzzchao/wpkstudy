<template>
    <div class="l-full l-flex-column syxw">
        <!--彩种导航 end-->
        <div class="l-flex-1 l-relative">
            <div class="l-full container">
                <div class="content">
                    <img src="../assets/logo.png"/>
                    <h1>hello world1</h1>
                    <h1>hello world2</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                    <h1>hello world</h1>
                </div>

            </div>



        </div>

    </div>
</template>

<script>
    import {Scroller} from 'scroller'
    export default {
        mounted () {
            let container = document.querySelector('.container')
            let content = document.querySelector('.content')
            var scrollerObj = new Scroller(function (left, top, zoom) {
//                content.style.transform = 'translate(' + (-left) + 'px,' + (-top) + 'px) scale(' + zoom + ')';
                content.style.transform = 'translate3d(' + (-left) + 'px,' + (-top) + 'px,0) scale(' + zoom + ')'
            }, {
                scrollingX: false,
                scrollingY: true
            })

            scrollerObj.setDimensions(container.offsetWidth, container.offsetHeight, content.offsetWidth, content.offsetHeight)

            container.addEventListener('touchstart', function (e) {
                // Don't react if initial down happens on a form element
                if (e.touches[0] && e.touches[0].target && e.touches[0].target.tagName.match(/input|textarea|select/i)) {
                    return
                }

                scrollerObj.doTouchStart(e.touches, e.timeStamp)
                e.preventDefault()
            }, false)

            container.addEventListener('touchmove', function (e) {
                scrollerObj.doTouchMove(e.touches, e.timeStamp, e.scale)
            }, false)

            container.addEventListener('touchend', function (e) {
                scrollerObj.doTouchEnd(e.timeStamp)
            }, false)

            container.addEventListener('touchcancel', function (e) {
                scrollerObj.doTouchEnd(e.timeStamp)
            }, false)
        }

    }

</script>
