<template>
    <div id="site">
        <div class="header">
            <mt-header title="GO商城" fixed>
                <router-link to="/search" slot="left">
                    <div class="search">搜一下,你试试</div>
                </router-link>
                <mt-button icon="more" slot="right" @click="share"></mt-button>
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
        <v-footer></v-footer>
        <mt-actionsheet
                :actions="actions"
                v-model="sheetVisible">
        </mt-actionsheet>
    </div>
</template>
<script>
    import cate from './Cate';
    import home from './Home';
    import car from './Car';
    import person from './Person';
    import footer from './Footer';
    import {Actionsheet} from 'mint-ui';
    export default {
        name: 'Home',
        components: {
            "v-home": home,
            "v-cate": cate,
            "v-car": car,
            "v-person": person,
            "v-footer": footer
        },
        data() {
            return {
                swipeable: true,
                active: this.$store.state.active,
                value: '',
                sheetVisible: false,
                actions:[]
            }
        },
        computed: {
            getActive: function () {
                return this.$store.state.active;
            }
        },
        watch: {
            getActive: function (val, oldVal) {
                console.log("修改前为：" + oldVal);
                console.log("修改后为：" + val);
                this.active = val;
            }
        },
        methods: {
            share: function () {
                this.sheetVisible = true;
            }
        },
        mounted(){
            this.actions = [
                {
                    name: '分享到朋友圈',
                    method: ''
                },
                {
                    name: '分享到QQ空间',
                    method: ''
                }]
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
    }

    .content {
        padding-top: 1.2rem;
    }

    .swiper {
        height: 4.5rem;
        margin-top: 2px;
    }

    .mint-header {
        background-color: #FC605A;
        height: 1.2rem;
        padding: 0 0.3rem;
    }

    .content {
        /*background: #fff;*/
        height: 100%;
    }

    .search {
        height: 0.6rem;
        border-radius: 0.4rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0;
        background: #ffffff;
        width: 6rem;
        vertical-align: middle;
        color: #c8c8c8;
        line-height: 0.6rem;
    }
</style>
