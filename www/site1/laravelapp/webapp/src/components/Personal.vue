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
                to="//github.com"
                is-link
                value="陌上">
        </mt-cell>
        <mt-cell
                title="性别"
                to="//github.com"
                is-link
                value="男">
        </mt-cell>
        <mt-cell
                @click.native="selectBirth"
                title="生日"
                is-link
                :value="pickerVisible | moment">
        </mt-cell>
        <div>
            <mt-datetime-picker
                    ref="picker"
                    v-model="pickerVisible"
                    type="date"
                    :startDate="startDate"
                    :endDate="endDate"
                    year-format="{value} 年"
                    month-format="{value} 月"
                    date-format="{value} 日">
            </mt-datetime-picker>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Personal',
        data () {
            return {
                pickerVisible:'1989-1-1',
                startDate: new Date('1989-1-1'),
                endDate: new Date()
            }
        },
        methods:{
            selectBirth:function () {
                this.$refs.picker.open();
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
