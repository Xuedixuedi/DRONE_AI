<template>
    <div>
        <home-header></home-header>
        <detail-hidemenu></detail-hidemenu>
    </div>
</template>

<script>
import HomeHeader from "../Home/components/Header"
import DetailHidemenu from "./components/Hidemenu"

export default {
    name: "Detail",
    components: {
        HomeHeader,
        DetailHidemenu
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
