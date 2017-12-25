<template>
    <div class="person">
        person
    </div>
</template>

<script>
    export default {
        name: 'Person',
        data () {
            return {
                footer: [
                    {name: '首页', link: '', icon: 'icon-v1'},
                    {name: '分类', link: '', icon: 'icon-category'},
                    {name: '购物车', link: '', icon: 'icon-cart'},
                    {name: '个人中心', link: '', icon: 'icon-account'}
                ]
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

    .footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: space-around;
        border-top: 1px solid #ccc;
        background-color: #fff;
        z-index: 100;
        background: E6E6E6;
        height: 1.5rem;
    }

    .footer i {
        font-size: 0.65rem;
    }

    .footer li {
        margin-top: 0.2rem;
    }

    .nav-item:link, .nav-item:visited {
        color: black
    }

    .nav-item:hover, .router-link-active {
        color: red;
    }

</style>
