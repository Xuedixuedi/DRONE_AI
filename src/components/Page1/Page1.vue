<template>
    <div>
        <div class="bg">
            <header></header>
        </div>
    </div>
</template>

<script>
import Header from "./Header.vue"
export default {
    name: "Page1",
    components: {
        Header
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg {
    background-color: #202c36;
    top: 0px;
    width: 1920px;
    height: 1024px;
}
</style>
