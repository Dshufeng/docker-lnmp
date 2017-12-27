<template>
    <div id="home">
        <div class="swiper">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="v,k in swiper" :key='k'>
                    <img :src="v.url" alt="" width="100%">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="home-nav ui-box">
            <router-link :to="{path:'detail'}">
                <img src="static/img/home/homenav1.png" alt="">
            </router-link>
            <router-link :to="{path:'detail'}">
                <img src="static/img/home/homenav2.png" alt="">
            </router-link>
            <router-link :to="{path:'detail'}">
                <img src="static/img/home/homenav3.png" alt="">
            </router-link>
            <router-link :to="{path:'detail'}">
                <img src="static/img/home/homenav4.png" alt="">
            </router-link>
        </div>
        <div class="home-qnav ui-box">
            <router-link to="/">
                <img src="static/img/home/qnav1.png" alt="">
                <span class="name">我的店铺</span>
            </router-link>
            <router-link to="/">
                <img src="static/img/home/qnav2.png" alt="">
                <span class="name">招商加盟</span>
            </router-link>
            <router-link to="/">
                <img src="static/img/home/qnav3.png" alt="">
                <span class="name">我的喜欢</span>
            </router-link>
            <router-link to="/">
                <img src="static/img/home/qnav4.png" alt="">
                <span class="name">猜你喜欢</span>
            </router-link>
        </div>
        <div class="home-newgoods ui-box">
            <img class="home-imgtit" src="static/img/home/hometit1.jpg" alt="">
            <div class="list-type1 plist-puzzle">
                <a href="" class="left-box">
                    <img src="static/img/home/t1.jpg" alt="">
                </a>
                <div class="s ui-flex-vt">
                    <a href="" class="box" v-for="n in 3">
                        <img src="static/img/home//t2.jpg" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                swiper: [
                    {url: 'static/img/home/banner1.jpg'},
                    {url: 'static/img/home/banner1.jpg'},
                    {url: 'static/img/home/banner1.jpg'},
                ]
            }
        },
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

    .swiper {
        height: 4.5rem;
        margin-top: 2px;
    }

    .mint-header {
        background-color: red;
        height: 1.2rem;
    }
    .ui-box{
        background-color: #ffffff;
    }
    .home-nav {
        /*background: blueviolet;*/
        display: flex;
        justify-content: center;
    }

    .home-nav a {
        width: 2.4rem;
    }

    .home-nav img {
        display: block;
        height: 2.2rem;
        margin: 0.2rem auto 0.2rem;
    }

    .home-qnav {
        margin-top: 0.3rem;
        /*background: red;*/
        margin-bottom: 0.3rem;
        height: 2.5rem;
        display: flex;
        justify-content: center;
    }

    .home-qnav a {
        width: 2.4rem;
    }

    .home-qnav img {
        display: block;
        height: 50%;
        margin: 0.35rem auto 0.3rem;
    }

    .home-qnav .name {
        display: block;
        text-align: center;
        font-size: .38rem;
        color: #363636;
    }

    .home-imgtit {
        display: block;
        width: 10.5rem;
        padding: 1px 0;
        margin: auto;
    }
    .plist-puzzle {
        overflow: hidden;
        width: 100%;
        height: 10rem;
    }
    .left-box{
        display: block;
        float: left;
        width: 68%;
        height: 100%;
        margin-left: 0.2rem;
    }
    .home-newgoods img{
        display: block;
        width: 100%;
        height: 100%;
    }
    .ui-flex-vt{
        float: right;
        width: 28%;
        height: 100%;
        margin-right: 0.2rem;
    }
    .box{
        display: block;
        height: 3.3rem;
    }
</style>
