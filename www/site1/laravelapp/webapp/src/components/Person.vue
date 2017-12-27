<template>
    <div class="person">
        <div class="avatar">
            <div class="pic">
                <img src="https://avatars2.githubusercontent.com/u/22002318" alt="">
            </div>
            <span class="name">陌上</span>
        </div>
        <div class="myorder">
            <div class="all-order">
                <span>我的订单</span>
                <span>
                    <img src="static/img/car/right.png" alt="">
                </span>
            </div>
            <div class="myorder-li">
                <div>
                    <img src="static/img/car/order-icon01.png" alt="">
                    <p>待付款</p>
                </div>
                <div>
                    <img src="static/img/car/order-icon02.png" alt="">
                    <p>待发货</p>
                </div>
                <div>
                    <img src="static/img/car/order-icon03.png" alt="">
                    <p>待评价</p>
                </div>
                <div>
                    <img src="static/img/car/order-icon04.png" alt="">
                    <p>退换货</p>
                </div>
            </div>
        </div>
        <div class="my-cell">
            <mt-cell
                    title="个人信息"
                    to="/personal"
                    is-link
                    value="">
                <img slot="icon" src="http://demos.sucaihuo.com/modals/30/3043/demo/images/self-icon01.png" width="24" height="24">
            </mt-cell>
            <mt-cell
                    title="我的钱包"
                    to=""
                    is-link
                    value="">
                <img slot="icon" src="http://demos.sucaihuo.com/modals/30/3043/demo/images/self-icon02.png" width="24" height="24">
            </mt-cell>
            <mt-cell
                    title="我的收藏"
                    to=""
                    is-link
                    value="">
                <img slot="icon" src="http://demos.sucaihuo.com/modals/30/3043/demo/images/self-icon03.png" width="24" height="24">
            </mt-cell>
            <mt-cell
                    title="地址管理"
                    to=""
                    is-link
                    value="">
                <img slot="icon" src="http://demos.sucaihuo.com/modals/30/3043/demo/images/self-icon04.png" width="24" height="24">
            </mt-cell>
        </div>
        <div class="my-cell">
            <mt-cell
                    title="密码修改"
                    to="/pass"
                    is-link
                    value="">
                <img slot="icon" src="http://demos.sucaihuo.com/modals/30/3043/demo/images/self-icon011.png" width="24" height="24">
            </mt-cell>
            <mt-cell
                    title="账号绑定"
                    to=""
                    is-link
                    value="">
                <img slot="icon" src="http://demos.sucaihuo.com/modals/30/3043/demo/images/self-icon013.png" width="24" height="24">
            </mt-cell>
            <mt-cell
                    title="积分管理"
                    to=""
                    is-link
                    value="">
                <img slot="icon" src="http://demos.sucaihuo.com/modals/30/3043/demo/images/self-icon05.png" width="24" height="24">
            </mt-cell>
        </div>
        <div class="logout">
            <mt-button type="danger" size="large">退出登录</mt-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Person',
        data () {
            return {

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

    .avatar{
        height: 3rem;
        width: 100%;
        padding: 5% 0 0;
        background: url(http://demos.sucaihuo.com/modals/30/3043/demo/uploads/7.jpg) center no-repeat;
        background-size: cover;
        text-align: center;
        position: relative;
    }
    .avatar img{
        height: 2rem;
        border-radius: 2.5rem;
        margin-left: 0.5rem;
        display: inline-block;
        vertical-align: middle;
    }
    .avatar .pic{
        line-height: 3rem;
        float: left;
    }
    .avatar .name{
        display: block;
        float: left;
        width: 2rem;
        height: 1rem;
        text-align: center;
        line-height: 3rem;
        font-size: 17px;
        font-weight: 500;
        color: #fff;
    }
    .myorder{
        width: 100%;
        height: 3rem;
        background: #ffffff;
        margin-top: 0.3rem;
    }
    .myorder .all-order{
        height: 1.3rem;
        width: 100%;
        font-size: 15px;
    }
    .all-order span{
        display: block;
    }
    .all-order span:nth-child(1){
        float: left;
        line-height: 1.3rem;
        padding-left: 0.5rem;
    }
    .all-order span:nth-child(2){
        float: right;
        padding-right: 0.5rem;
        padding-top: 0.35rem;
    }
    .all-order span img{
        height: 0.6rem;
    }
    .myorder .myorder-li{
        display: flex;
        height: 1.7rem;
        padding: 0.2rem 0;
    }
    .myorder .myorder-li div{
        flex: 1;
        text-align: center;
        font-size: 14px;
    }
    .myorder .myorder-li img{
       height: 0.8rem;
    }

    .my-cell{
        margin-top: 0.3rem;
        background: #fff;
        padding: 0.2rem;
    }
    .my-cell a{
        border-top: 1px solid #ccc;
    }

    .logout{
        height: 2rem;
        padding:0 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
