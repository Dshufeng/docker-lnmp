<template>
    <div class="search">
        <header>
            <div class="back">
                <div class="mint-button mint-button--normal">
                    <span class="mint-button-icon">
                        <i class="mintui mintui-back"></i>
                    </span>
                </div>
            </div>
            <div class="search-bar">
                <input type="text" name="search">
            </div>
            <div class="go-search">
                <mt-button type="default">搜索</mt-button>
            </div>
        </header>
        <div class="hot">
            <h3>热门搜索</h3>
            <div>
                <mt-badge type="primary"  size="large">外套</mt-badge>
                <mt-badge type="primary"  size="large">连衣裙</mt-badge>
                <mt-badge type="primary"  size="large">运动鞋</mt-badge>
                <mt-badge type="primary"  size="large">夹克</mt-badge>
                <mt-badge type="primary"  size="large">睡衣</mt-badge>
                <mt-badge type="primary"  size="large">内衣</mt-badge>
                <mt-badge type="primary"  size="large">内衣</mt-badge>
                <mt-badge type="primary"  size="large">内衣</mt-badge>
                <mt-badge type="primary"  size="large">内衣</mt-badge>
                <mt-badge type="primary"  size="large">内衣</mt-badge>
                <mt-badge type="primary"  size="large">内衣</mt-badge>
                <mt-badge type="primary"  size="large">内衣</mt-badge>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Badge } from 'mint-ui';
    export default {
        name: 'Search',
        data () {
            return {

            }
        },
        computed: {

        },
        methods: {

        },
        filters:{
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
        color: inherit;
        font-size: 15px;
    }
    .hot span{
        margin-top: 0.2rem;
    }
</style>
