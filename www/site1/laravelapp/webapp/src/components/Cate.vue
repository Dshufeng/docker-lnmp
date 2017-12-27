<template>
    <div class="cate">
        <div class="left-cate">
            <div class="" v-for="(v,k) in cate" :key="k" @click="selMenu(v.name)">
                <mt-cell :title="v.name" :class="{'isactive' : v.name == itemNmae}">
                    <img slot="icon"
                         :src="['static/img/cate/classify0'+ (k+1) +'.png']"
                         width="24" height="24">
                </mt-cell>
            </div>
        </div>
        <div class="right-cate">
            <div class="cate-row" v-for="(k,v) in 5">
                <span class="clear">{{itemNmae}}-{{k}}</span>
                <div class="row" v-for="r in 9">
                    <img src="static/img/cate/classify-ph03.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Cate',
        data () {
            return {
                cate: [
                    {name: '母婴正品', link: '', icon: 'icon-v1'},
                    {name: '女装正品', link: '', icon: 'icon-category'},
                    {name: '男装正品', link: '', icon: 'icon-cart'},
                    {name: '内衣正品', link: '', icon: 'icon-account'},
                    {name: '化妆品', link: '', icon: 'icon-account'},
                    {name: '居家百货', link: '', icon: 'icon-account'},
                    {name: '时尚智能', link: '', icon: 'icon-account'},
                    {name: '营养保健', link: '', icon: 'icon-account'},
                    {name: '女鞋箱包', link: '', icon: 'icon-account'}
                ],
                selected: 'home',
                itemNmae:'母婴正品'
            }
        },
        methods: {
            selMenu: function (name) {
                this.itemNmae = name;
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

    ::-webkit-scrollbar {
        display: none
    }

    .cate {
        padding-top: 0.3rem;
        width: 100%;
    }

    .left-cate {
        width: 32%;
        height: 15rem;
        margin: 0 0.2rem;
        position: fixed;
        overflow: scroll;
    }
    .left-cate .isactive{
        color: red;
        background: #f5f5f5;
    }
    .left-cate div{
        height: 1.5rem;
    }
    .mint-cell {
        margin: 0.2rem 0;
    }

    .right-cate {
        width: 62%;
        height: 100%;
        overflow: scroll;
        margin: 0 0.2rem;
        float: right;
    }
    .clear{
        clear: both;
    }
    .cate-row{
        width: 100%;
        padding: 0.2rem;
    }
    .cate-row span{
        display: block;
        height: 0.5rem;
        line-height: 0.5rem;
        padding: 0.2rem;
    }
    .cate-row .row{
        width:1.5rem;
        height: 1.5rem;
        float: left;
        margin: 0.2rem;
    }
    .cate-row .row img{
        width:1.5rem;
        height: 1.5rem;
    }
</style>
