<template>
    <div class="search">
        <header>
            <div class="back" @click="back">
                <div class="mint-button mint-button--normal">
                    <span class="mint-button-icon">
                        <i class="mintui mintui-back"></i>
                    </span>
                </div>
            </div>
            <div class="search-bar">
                <input type="text" name="search" v-model="searchContent">
            </div>
            <div class="go-search" @click="search">
                <mt-button type="default">搜索</mt-button>
            </div>
        </header>
        <div class="hot">
            <h3>热门搜索</h3>
            <div>
                <mt-badge :type="hotTags.type | random"  size="large" v-for="(tag,k) in hotTags.tags" :key="k">{{tag.name}}</mt-badge>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Badge } from 'mint-ui';
    import { Toast } from 'mint-ui';
    export default {
        name: 'Search',
        data () {
            return {
                hotTags:{
                    tags:[
                        {name:'外套'},
                        {name:'连衣裙'},
                        {name:'运动鞋'},
                        {name:'夹克'},
                        {name:'睡衣'},
                        {name:'内衣'},
                        {name:'外套'},
                        {name:'毛衣'},
                        {name:'牛仔裤'},
                        {name:'羽绒服'},
                        {name:'拖鞋'},
                        {name:'外套'},
                        {name:'衬衫'}
                    ],
                    type:['primary','error','success','warning']
                },
                searchContent:''
            }
        },
        computed: {

        },
        methods: {
            back:function () {
                this.$router.back();
            },
            search:function () {
                if(!this.searchContent){
                    Toast('请输入搜索内容:)');
                }
            }
        },
        filters:{
            random:function (value) {
                return value[Math.floor(Math.random()*(value.length))];
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
    header{
        height: 1.2rem;
        background-color: #FC605A;
        padding: 0 0.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    header .back{
        flex:0.5;
    }
    header .mint-button{
        color: #656b79;
        height: 100%;
    }
    header .search-bar{
        flex: 4;
    }
    header .search-bar input{
        height: 0.8rem;
        border: 0;
        border-radius: 0.4rem;
        width: 95%;
        text-align: center;
    }
    header .go-search{
        flex: 1;
        text-align: center;
    }
    header .go-search button{
        height: 0.8rem;
        width: 1.6rem;
        font-size: 15px;
        border-radius: 0.5rem;
    }

    .hot{
        margin-top: 0.2rem;
        height: 4rem;
        background: #ffffff;
        padding: 0.2rem;
    }
    .hot h3{
        font-size: 1.35em;
        color: #666;
        font-weight: normal;
        margin-bottom: 2%;
        margin-left: 0.1rem;
    }
    .hot span{
        margin: 0.1rem;
    }
</style>
