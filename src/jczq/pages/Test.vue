<template>
    <div class="l-full l-flex-column">
        <div class="header"></div>
        <!--彩种导航 end-->
        <div class="l-flex-1 l-relative">
            <div class="l-full ">
                <scroller scroll-y bouncing>
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
        <div class="footer" @click="toggle">


        </div>


            <component v-if="show" :is="view"></component>



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
//    import hello from '../components/hello.vue'
    export default {
        data(){
          return {
              show: false,
              view: undefined
          }
        },
        components: {
            Scroller
        },
        methods: {
          toggle(){
              let me = this;
              if(!this.show){
                  require.ensure([], function () {
                      me.view = require('../components/hello.vue');
                      me.show = !me.show;
                  }, 'jczq/chunk/hello')





              }else {
                  this.show = !this.show;
              }

          }
        },
        mounted(){



        }

    }

</script>


