<template>
    <div class="home_wrap">
        <div class="home_main">
            <router-view />
        </div>
        <div class="home_foot">
            <router-link to="/quanzi">圈子</router-link>
            <router-link to="/my">我的</router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        color: black;
        box-sizing: border-box;
    }
    html, body, #app {
        width: 100%;
        height: 100%;
    }
    .home_wrap {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    
    .home_main {
        flex: 1;
        overflow: auto;
    }
    .home_foot {
        width: 100%;
        height: 45px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .router-link-exact-active {
        color: #f76968;
    }
</style>
