<template>
    <div class="footer">
        <mt-tabbar v-model="selected">
            <mt-tab-item :id="v.id" v-for='(v,k) in footer' :key='k' >
                <img slot="icon" :src="['http://demos.sucaihuo.com/modals/30/3043/demo/images/footer00' +(k+1)+ '.png']">
                {{v.name}}
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        data () {
            return {
                footer: [
                    {name: '首页',id:'home',icon:'icon-v1'},
                    {name: '分类',id:'cate',icon:'icon-category'},
                    {name: '购物车',id:'car',icon:'icon-cart'},
                    {name: '我的',id:'person',icon:'icon-account'}
                ],
                selected:this.$store.state.active
            }
        },
        watch:{
            selected:function(val,oldval){
                this.$store.state.active = this.selected;
            }
        },
        methods:{

        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    * {
        margin: 0;
        padding: 0;
        text-decoration:none;
        list-style: none;
    }
    .footer{
        position: fixed;
        bottom: 0;
        width: 100%;
        text-align: center;
        justify-content: space-around;
        border-top: 1px solid #ccc;
        z-index: 100;
        height: 1.6rem;
        background-color: #fafafa;
    }
    .footer div{
        /*bottom: 0.1rem;*/
        height: 100%;
    }
    .footer div a{
        padding-top: 0.3rem;
    }
</style>
