<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import rem from './rem/rem.js'
    export default {
        name: 'app',
        components:{

        }
    }
</script>

<style>
    /* @import  "//at.alicdn.com/t/font_337147_rz7i21pv98fzjjor.css"; */
    body{
        padding-bottom:1.56rem;
        background: #f2f2f2;
        margin: 0;
    }
</style>