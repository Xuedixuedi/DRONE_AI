<template>
    <div>
        <div class="bg">
            <home-header></home-header>
            <div class="main">
                <home-leftpart></home-leftpart>
                <home-rightpart></home-rightpart>
            </div>
        </div>
    </div>
</template>

<script>
import HomeHeader from "./components/Header.vue"
import HomeLeftpart from "./components/Leftpart.vue"
import HomeRightpart from "./components/Rightpart.vue"

import axios from "axios" // 引入axios

export default {
    name: "Home",
    components: {
        HomeHeader,
        HomeLeftpart,
        HomeRightpart
    },
    mounted() {
        axios.get("/mock/news").then(res => {
            // url即在mock.js中定义的
            console.log(res.data) // 打印一下响应数据
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
    display: flex;
    justify-content: space-around;
    align-content: center;
}
</style>
