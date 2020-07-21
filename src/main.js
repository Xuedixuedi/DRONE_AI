// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import router from "./router"

//视频播放git
import VideoPlayer from "vue-video-player"
import "vue-video-player/src/custom-theme.css"
import "video.js/dist/video-js.css"

require("./mock") //引入mock.js

Vue.config.productionTip = false
Vue.use(VideoPlayer)
/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>"
})
