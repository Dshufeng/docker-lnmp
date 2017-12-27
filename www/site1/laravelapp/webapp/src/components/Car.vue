<template>
    <div class="car">
        <div v-if="goods.length">
            <div class="car-row">
                <div class="row" v-for="(good,index) in goods">
                    <div class="car-check">
                        <input class="magic-checkbox" type="checkbox" name="layout" :id="index" checked :value="good.id"
                               v-model="del_check">
                        <label :for="index"></label>
                    </div>
                    <div class="car-goods">
                        <div>
                            <img :src="good.img" alt="">
                        </div>
                        <dl>
                            <dt>{{good.title}}</dt>
                            <dd class="price">
                                价格:<span>{{good.price | money}}</span>
                            </dd>
                            <dd class="add">
                                <span @click="num(index,'reduce')" class="bt">-</span>
                                <span class="price">
                                    <input type="text" v-model="good.num" readonly>
                                </span>
                                <span @click="num(index,'add')" class="bt">+</span>
                            </dd>
                            <dd class="del" @click="del(index)">
                                <img src="static/img/car/shopcar-icon01.png" alt="">
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>

            <div class="pay-bar">
                <div class="total-price">
                    合计:{{total_price | money}}
                </div>
                <div class="del-select" @click="delChecked">
                    删除
                </div>
                <div class="go-pay">
                    去结算 (<span>{{total_num}}</span>)
                </div>
            </div>
            <div class="place"></div>
        </div>
        <div v-else>
            <div class="nothing">
                购物车是空的,快去购物吧.
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {MessageBox} from 'mint-ui';
    export default {
        name: 'Car',
        data () {
            return {
                goods: [
                    {
                        id: 1,
                        'title': '只要998,马上带回家',
                        price: 550,
                        num: 11,
                        img: 'static/img/car/shopcar-ph01.png'
                    },
                    {
                        id: 2,
                        'title': '只要666,马上带回家',
                        price: 990,
                        num: 1,
                        img: 'static/img/car/shopcar-ph01.png'
                    },
                    {
                        id: 3,
                        'title': '只要888,马上带回家',
                        price: 110,
                        num: 4,
                        img: 'static/img/car/shopcar-ph01.png'
                    }
                ],
                del_check: []
            }
        },
        computed: {
            total_num: function () {
                let total_num = 0;
                this.goods.forEach(function (good, index) {
                    total_num += good.num;
                });
                return total_num;
            },
            total_price: function () {
                let total_price = 0;
                this.goods.forEach(function (good, index) {
                    var price = good.num * good.price;
                    total_price += price;
                });
                return total_price;
            }

        },
        methods: {
            num: function (index, action) {
                if (action == 'reduce') {
                    var num = this.goods[index].num - 1;
                    if (num <= 0) {
                        return;
                    }
                } else {
                    var num = this.goods[index].num + 1;
                }
                this.goods[index].num = num;
            },
            del: function (index) {
                MessageBox.confirm('确定删除?').then(action => {
                    this.goods.splice(index, 1);
                });
            },
            delChecked: function () {
                let del_check = this.del_check;
                let length = this.del_check.length;
                if (length != 0) {
                    MessageBox.confirm('确定删除?').then(action => {
                        this.goods = this.goods.filter(function (g, i) {
                            if (del_check.indexOf(g.id) >= 0) {
                                return false;
                            } else {
                                return true;
                            }
                        }, del_check);
                        this.del_check = [];
                    });
                } else {
                    MessageBox('提示', '尚未选择商品');
                }
            }
        },
        filters:{
            money:function (value) {
                return '￥' + value.toFixed(2)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "../../static/css/form.css";

    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
    }

    .car-row {
        /*background: #ccc;*/
        width: 100%;
    }

    .car-row .row {
        background: #ffffff;
        width: 100%;
        height: 3.5rem;
        margin-top: 0.2rem;
        display: flex;
    }

    .car-check {
        flex: 1;
        height: 100%;
    }

    .car-check label {
        padding-left: 0;
        top: 1.5rem;
        left: 0.4rem;
    }

    .car-goods {
        flex: 7;
        display: flex;
        /*justify-content:center;*/
        align-items: center;
    }

    .car-goods img {
        width: 3rem;
    }

    .car-goods dl {
        font-size: 15px;
        margin-left: 1rem;
    }

    .car-goods dd {
        line-height: 0.8rem;
    }

    .car-goods .add .bt {
        padding: 2% 10%;
        position: relative;
        height: 0.7rem;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border: 1px solid #cccccc;
        outline: none;
        color: #808080;
    }

    .car-goods .price input {
        width: 1rem;
        height: 0.69rem;
        font-size: 15px;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border: 1px solid #cccccc;
        outline: none;
        color: #808080;
        text-align: center;
    }

    .del img {
        display: block;
        width: 0.5rem;
    }

    .price span {
        color: red;
        font-size: 18px;
        padding-left: 0.2rem;
    }

    .pay-bar {
        width: 100%;
        height: 1.3rem;
        position: fixed;
        bottom: 1.5rem;
        display: flex;
        align-items: center; /*垂直居中*/
        justify-content: center; /*水平居中*/
    }

    .pay-bar .total-price {
        flex: 5;
        height: 100%;
        color: #ffffff;
        font-size: 1.5em;
        text-align: center;
        line-height: 1.3rem;
        background: rgb(48, 48, 48);
        font-weight: normal;
    }

    .pay-bar .del-select {
        flex: 2;
        height: 100%;
        background: red;
        text-align: center;
        font-size: 1.5em;
        color: #ffffff;
        line-height: 1.3rem;
    }

    .pay-bar .go-pay {
        flex: 3;
        height: 100%;
        background: rgb(69, 192, 24);
        font-size: 1.5em;
        text-align: center;
        color: #ffffff;
        line-height: 1.3rem;
    }
    .place{
        height: 1.4rem;
    }

    .nothing{
        margin-top: 0.2rem;
        width: 100%;
        text-align: center;
        font-size: 0.6rem;
    }
    .add{
        height: 100%;
    }
    .del{
        margin-top: 0.2rem;
    }
</style>
