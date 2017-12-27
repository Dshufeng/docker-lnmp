<template>
    <div class="goodsDetail">
        <div class="back" @click="back">
            <img src="http://demos.sucaihuo.com/modals/30/3043/demo/images/detail-left.png" alt="">
        </div>
        <div class="pics">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(v,k) in 3" :key="k">
                    <img :src="['static/img/detail/detail-ban0'+ (k+1) +'.png']"
                         alt="" width="100%">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="message">
            <div class="m1">
                <div>2015冬季新款韩版加厚中长款小鹿毛呢大衣</div>
                <div>
                    <img src="static/img/detail/detail-heart-hei.png" alt=""
                         width="30%">
                    <p>收藏</p>
                </div>
            </div>
            <div class="m2">
                <span class="price">￥998.00</span>
                <span>运费:包邮</span>
                <span>积分:+99</span>
            </div>
        </div>
        <div class="type">
            <div class="color">
                <ul>
                    <h3>颜色</h3>
                    <li :class="colorActive == k ? 'chose-active' : '' " v-for="(c,k) in color" @click="choseColor(k)">{{c.type}}</li>
                </ul>
            </div>
            <div class="size">
                <ul>
                    <h3>尺寸</h3>
                    <li  :class="sizeActive == k ? 'chose-active': '' " v-for="(s,k) in size" @click="choseSize(k)">{{s.type}}</li>
                </ul>
            </div>
        </div>
        <div class="chose margin-top">
            <mt-cell title="7天无理由退换货" :value="haveChose"></mt-cell>
        </div>
        <div class="details margin-top">
            <mt-navbar v-model="selected">
                <mt-tab-item id="1">图文详情</mt-tab-item>
                <mt-tab-item id="2">用户评价</mt-tab-item>
            </mt-navbar>
            <div class="content margin-top">
                <!-- tab-container -->
                <mt-tab-container v-model="selected">
                    <mt-tab-container-item id="1">
                        <img src="static/img/detail/detail-ban01.png" alt="" width="100%">
                    </mt-tab-container-item>
                    <mt-tab-container-item id="2">
                        <mt-cell v-for="n in 4" :title="'评价 ' + n" :key="n"/>
                    </mt-tab-container-item>
                </mt-tab-container>
            </div>
        </div>

        <div class="bottom-bar">
            <div class="go-car">
                <mt-button type="default"  plain size="large" @click="car">加入购物车</mt-button>
            </div>
            <div class="go-buy">
                <mt-button type="danger" size="large" @click="buy">立即购买</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    export default {
        name: 'GoodsDetail',
        data () {
            return {
                selected:'1',
                sizeActive:0,
                colorActive:0,
                size:[
                    {id:1,type:'S'},
                    {id:2,type:'M'},
                    {id:3,type:'L'},
                    {id:4,type:'XL'}
                ],
                color:[
                    {id:1,type:'褐色'},
                    {id:2,type:'粉色'},
                    {id:3,type:'红色'},
                    {id:4,type:'蓝色'}
                ]
            }
        },
        computed:{
            haveChose:function () {
                return this.color[this.colorActive].type +'  '+ this.size[this.sizeActive].type;
            }
        },
        methods: {
            choseSize:function (k) {
                this.sizeActive = k;
            },
            choseColor:function (k) {
                this.colorActive = k;
            },
            back:function () {
                this.$router.back();
            },
            car:function () {
                Toast({
                    message: '加入购物车',
                });
            },
            buy:function () {
                Toast({
                    message: '购买成功',
                });
            }
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
    .back{
        width: 1rem;
        height: 1rem;
        position: fixed;
        background: rgba(255,255,255,0.7);
        z-index: 1000;
        top:0.3rem;
        left:0.3rem;
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .back img{
        width: 40%;
        vertical-align: middle;
        margin: 16% 20%;
    }
    .margin-top{
        margin-top: 0.2rem;
    }
    .goodsDetail {
        width: 100%;
    }
    .pics {
        background-color: #ccc;
        height: 7.5rem;
    }
    .message {
        height: 2rem;
        background: #fff;
        margin-top: 0.2rem;
        padding: 0.4rem;
    }
    .message .m1 {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .message .m1 div:nth-child(1) {
        flex: 4;
        font-size: 18px;
    }
    .message .m1 div:nth-child(2) {
        flex: 1;
        text-align: center;
        font-size: 14px;
        border-left: solid 1px #c8c8c8;
    }
    .message .m2 {
        display: flex;
        font-size: 15px;
        margin: 0.2rem;
    }
    .message .m2 span {
        display: block;
        flex: 1;
    }
    .message .m2 .price{
        font-size: 1.4em;
        color: #FC605A;
        font-weight: normal;
    }
    .type{
        width: 100%;
        background: #ffffff;
        margin-top: 0.2rem;
    }
    .type h3{
        font-size: 1.35em;
        color: #666;
        font-weight: normal;
        margin-bottom: 2%;
    }
    .type ul {
        padding: 3% 2%;
        border-bottom: solid 1px #c8c8c8;
        overflow: hidden;
        list-style: none;
    }
    .type ul li {
        width: 20%;
        padding: 2% 0;
        text-align: center;
        border: solid 1px #c8c8c8;
        float: left;
        margin: 2% 2%;
        border-radius: 0.2em;
    }
    .type ul .chose-active{
        border: solid 1px rgba(0,0,0,0);
        background-image: url(/static/img/detail/detail-icon03.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .chose .mint-cell{
        padding: 0 0.5rem;
    }
    .bottom-bar{
        height:3.5em;
        background: #fff;
        display: flex;
        position: fixed;
        bottom: 0;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 0.2rem 0;
        border-top: 1px solid #ccc;
    }
    .bottom-bar .go-car{
        flex: 3;
        height: 100%;
        padding: 0.2rem 0.2rem;
    }
    .bottom-bar .go-buy{
        flex: 2;
        height: 100%;
        padding: 0.2rem;
    }
    .bottom-bar .go-buy button{
        background-color: #FC605A;
    }
</style>
