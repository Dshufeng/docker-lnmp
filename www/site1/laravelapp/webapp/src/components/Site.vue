<template>
    <div id="site">
        <div class="header">
            <mt-header title="优品商城" fixed>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
        </div>
        <div class="content">
            <mt-tab-container v-model="active">
                <mt-tab-container-item id="home">
                    <v-home></v-home>
                </mt-tab-container-item>
                <mt-tab-container-item id="cate">
                    <v-cate></v-cate>
                </mt-tab-container-item>
                <mt-tab-container-item id="car">
                    <v-car></v-car>
                </mt-tab-container-item>
                <mt-tab-container-item id="person">
                    <v-person></v-person>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>

    </div>
</template>

<script>
    import cate from './Cate';
    import home from './Home';
    import car from './Car';
    import person from './Person';

    export default {
        name: 'Home',
        components:{
            "v-home":home,
            "v-cate":cate,
            "v-car":car,
            "v-person":person
        },
        data() {
            return {
                swiper: [
                    {url: 'http://demos.sucaihuo.com/modals/30/3043/demo/uploads/banner1.jpg'},
                    {url: 'http://demos.sucaihuo.com/modals/30/3043/demo/uploads/banner1.jpg'},
                    {url: 'http://demos.sucaihuo.com/modals/30/3043/demo/uploads/banner1.jpg'},
                ],
                swipeable:true,
                active:'home'
            }
        },
        computed:{
            get:function () {
                return this.$store.state.active;
            }
        },
        watch: {
            get: function(val, oldVal) {
                console.log("修改前为：" + oldVal);
                console.log("修改后为：" + val);
                this.active = val;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .content{
        padding-top: 1.2rem;
    }
    .swiper {
        height: 4.5rem;
        margin-top: 2px;

    }

    .mint-header {
        background-color: red;
        height: 1.2rem;
    }
    .content{
        /*background: #fff;*/
        height: 100%;
    }
</style>
