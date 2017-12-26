<template>
    <div class="ChangePass">
        <mt-header title="修改密码">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="pass">
            <mt-field label="旧密码" placeholder="请输入旧密码" type="password" v-model="oldPassword"></mt-field>
            <mt-field label="新密码" placeholder="请输入新密码" type="password" v-model="newPassword"></mt-field>
            <mt-field label="确认密码" placeholder="请再次输入密码" type="password" v-model="confirmPassword"></mt-field>
            <div class="confirm">
                <mt-button type="primary" size="large" @click="post">确认修改</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
    import {MessageBox} from 'mint-ui';
    export default {
        name: 'Personal',
        data () {
            return {
                oldPassword:'',
                newPassword: '',
                confirmPassword: ''
            }
        },
        methods:{
            post:function () {
                let oldPassword = this.oldPassword;
                let newPassword = this.newPassword;
                let confirmPassword = this.confirmPassword;
                const pass = 123456;
                if(oldPassword == '' || oldPassword != pass){
                    MessageBox('错误', '旧密码不正确');
                    return false;
                }
                if(newPassword == ''){
                    MessageBox('错误', '新密码不能为空');
                    return false;
                }
                if(newPassword !== confirmPassword){
                    MessageBox('错误', '两次输入密码不一致');
                    return false;
                }
                MessageBox('提示', '恭喜你修改成功');
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
    .mint-header{
        background-color: #2a2a2a;
        height: 1.2rem;
        padding: 0 0.2rem;
    }

    .pass{
        background-color: #ffffff;
        padding: 0.2rem 0.5rem;
    }
    .pass .confirm{
        padding: 0.5rem 0;
    }
</style>
