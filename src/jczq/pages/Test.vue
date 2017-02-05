<template>
    <div class="l-full l-flex-column">
        <div class="header"></div>
        <!--彩种导航 end-->
        <div class="l-flex-1 l-relative">
            <div class="l-full ">
                <scroller scroll-y>
                    <div class="item l-box-center cell">hello</div>
                    <div class="item l-box-center cell">hello</div>
                   <div class="item l-box-center cell">hello</div>
                    <div class="item l-box-center cell">hello</div>
                   <div class="item l-box-center cell">hello</div>
                    <div class="item l-box-center cell">hello</div>
                   <div class="item l-box-center cell">hello</div>
                    <div class="item l-box-center cell">hello</div>
                   <div class="item l-box-center cell">hello</div>
                    <div class="item l-box-center cell">hello</div>
                   <div class="item l-box-center cell">hello</div>
                    <div class="item l-box-center cell">hello</div>
                   <div class="item l-box-center cell">hello</div>
                    <div class="item l-box-center cell">hello</div>
                   <div class="item l-box-center cell">hello</div>
                    <div class="item l-box-center cell">hello</div>
                   <div class="item l-box-center cell">hello</div>
                    <div class="item l-box-center cell">hello</div>
                   <div class="item l-box-center cell">hello</div>
                    <div class="item l-box-center cell">hello</div>
                   <div class="item l-box-center cell">hello</div>
                    <div class="item l-box-center cell">hello</div>
                   <div class="item l-box-center cell">hello</div>
                    <div class="item l-box-center cell">hello</div>
                   <div class="item l-box-center cell">hello</div>
                    <div class="item l-box-center cell">hello</div>
                   <div class="item l-box-center cell">hello</div>
                    <div class="item l-box-center cell">hello</div>
                   <div class="item l-box-center cell">hello</div>
                    <div class="item l-box-center cell">hello</div>
                   <div class="item l-box-center cell">hello</div>
                    <div class="item l-box-center cell">hello</div>
                   <div class="item l-box-center cell">hello</div>
                    <div class="item l-box-center cell">hello</div>
                   <div class="item l-box-center cell">hello</div>
                    <div class="item l-box-center cell">hello</div>
                   <div class="item l-box-center cell">hello</div>
                    <div class="item l-box-center cell">hello</div>



                </scroller>

            </div>



        </div>
        <div class="footer"></div>

    </div>
</template>

<style>

    .header{
        height: 3rem;
        background: red;
    }
    .footer{
        height: 5rem;
        background: darkcyan;
    }
    .item:nth-child(2n+1){
        height: 3rem;
        background-color: darkorange;
    }
    .item:nth-child(2n){
        height: 3rem;
        background-color: deeppink;
    }
    .item{
        background-image: url(../assets/logo_top.png);
    }
</style>

<script>
    import Scroller from  '../components/Scroller.vue'
    export default {
        components: {
            Scroller
        },
        mounted(){



        }

    }

</script>


