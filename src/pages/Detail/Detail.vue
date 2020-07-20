<template>
    <div>
        <home-header></home-header>
        <div class="hide-menu">
            <detail-hidemenu></detail-hidemenu>
        </div>
        <div class="main">
            <detail-leftpart></detail-leftpart>
            <detail-rightpart></detail-rightpart>
        </div>
    </div>
</template>

<script>
import HomeHeader from "../Home/components/Header"
import DetailHidemenu from "./components/Hidemenu"
import DetailLeftpart from "./components/Leftpart"
import DetailRightpart from "./components/Rightpart"

export default {
    name: "Detail",
    components: {
        HomeHeader,
        DetailHidemenu,
        DetailLeftpart,
        DetailRightpart
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    /* left: 100px; */
    width: 100%;
    height: 95%;
    top: 20px;
    bottom: 20px;
}
</style>
