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
import HomeHeader from "./Header.vue"
import HomeLeftpart from "./Leftpart.vue"
import HomeRightpart from "./Rightpart.vue"

export default {
    name: "Home",
    components: {
        HomeHeader,
        HomeLeftpart,
        HomeRightpart
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
    display: flex;
    justify-content: space-around;
}
</style>
