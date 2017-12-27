<template>
    <div class="personal">
        <mt-header title="个人信息">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <mt-cell title="头像" class="avatar">
            <img slot="icon" src="https://avatars2.githubusercontent.com/u/22002318" width="26" height="26">
        </mt-cell>
        <mt-cell
                title="姓名"
                to=""
                is-link
                value="陌上">
        </mt-cell>
        <mt-cell
                title="性别"
                to=""
                is-link
                value="男">
        </mt-cell>
        <mt-cell
                @click.native="selectBirth"
                title="生日"
                is-link
                :value="pickerVisible | moment">
        </mt-cell>
        <mt-datetime-picker
                ref="picker"
                v-model="pickerVisible"
                type="date"
                :startDate="startDate"
                :endDate="endDate"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日"
                @confirm="handleChange">
        </mt-datetime-picker>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    export default {
        name: 'Personal',
        data () {
            return {
                startDate: new Date("January 12,1999 22:19:35"),
                endDate: new Date(),
                pickerVisible:new Date("January 12,2006 22:19:35")
            }
        },
        methods:{
            selectBirth:function () {
                this.$refs.picker.open();
            },
            handleChange:function (value) {
                Toast({
                    message: '已选择 ' + value.toString(),
                    position: 'bottom'
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
    .mint-header{
        background-color: #2a2a2a;
        height: 1.2rem;
        padding: 0 0.2rem;
    }
    .avatar img{
        float: right;
        border-radius: 100%;
    }
</style>
