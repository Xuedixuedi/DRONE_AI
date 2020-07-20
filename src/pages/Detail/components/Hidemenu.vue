<template>
    <div>
        <div class="hide-menu" @click="setSideBar">
            <svg
                width="20"
                height="92"
                viewBox="0 0 20 92"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_d)">
                    <path
                        d="M3.125 92C1.39911 92 0 89.1391 0 85.6111L0 6.38889C0 2.86095 1.39911 0 3.125 0H16.875C18.6009 0 20 2.86095 20 6.38889L20 92H3.125Z"
                        fill="#A279F9"
                    />
                </g>
                <path
                    d="M13.936 45.87C13.936 46.98 13.552 47.9201 12.784 48.6801C12.016 49.4501 11.077 49.84 9.96799 49.84C8.85899 49.84 7.92001 49.4501 7.15201 48.6801C6.38401 47.9201 6 46.98 6 45.87C6 44.8 6.38401 43.9101 7.15201 43.1801C7.92001 42.4101 8.85899 42.03 9.96799 42.03C11.077 42.03 12.016 42.4101 12.784 43.1801C13.552 43.9101 13.936 44.8 13.936 45.87ZM13.936 33.84C13.936 34.95 13.552 35.88 12.784 36.65C12.016 37.42 11.077 37.8 9.96799 37.8C8.85899 37.8 7.92001 37.42 7.15201 36.65C6.38401 35.88 6 34.95 6 33.84C6 32.77 6.38401 31.87 7.15201 31.15C7.92001 30.38 8.85899 30 9.96799 30C11.077 30 12.016 30.38 12.784 31.15C13.552 31.87 13.936 32.77 13.936 33.84ZM13.936 57.84C13.936 58.95 13.552 59.88 12.784 60.65C12.016 61.42 11.077 61.8 9.96799 61.8C8.85899 61.8 7.92001 61.42 7.15201 60.65C6.38401 59.88 6 58.95 6 57.84C6 56.77 6.38401 55.87 7.15201 55.15C7.92001 54.38 8.85899 54 9.96799 54C11.077 54 12.016 54.38 12.784 55.15C13.552 55.87 13.936 56.77 13.936 57.84Z"
                    fill="white"
                />
                <defs>
                    <filter
                        id="filter0_d"
                        x="-6"
                        y="-2"
                        width="32"
                        height="104"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="3" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                        />
                    </filter>
                </defs>
            </svg>
        </div>
        <div class="side-bar">
            <div class="side-icon">
                <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="logo-icon"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5 0C2.2386 0 0 2.2386 0 5V21.6667C0 24.4281 2.2386 26.6667 5 26.6667H6.6666V29C6.6666 31.7614 8.9052 34 11.6666 34H28.3333C31.0947 34 33.3333 31.7614 33.3333 29V12.3333C33.3333 9.5719 31.0947 7.3333 28.3333 7.3333H26.6667V5C26.6667 2.2386 24.4281 0 21.6667 0H5ZM26.6667 7.3333H11.6666C8.9052 7.3333 6.6666 9.5719 6.6666 12.3333V26.6667H21.6667C24.4281 26.6667 26.6667 24.4281 26.6667 21.6667V7.3333Z"
                        fill="#A279F9"
                    />
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Hidemenu",
    methods: {
        setSideBar() {
            var hideMenu = document.getElementsByClassName("hide-menu")
            var sideBar = document.getElementsByClassName("side-bar")

            if (sideBar[0].style.display == "none") {
                hideMenu[0].style.left = "-10px"
                sideBar[0].style.display = "block"
            } else {
                hideMenu[0].style.left = "0px"
                sideBar[0].style.display = "none"
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hide-menu {
    display: block;
    position: absolute;
    top: 500px;
    transform: rotate(180deg);
}
.side-bar {
    display: none;
    position: absolute;
    left: 10px;
    top: 10px;
    width: 80px;
    bottom: 10px;
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid rgba(229, 229, 229, 0.05);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
}
.side-icon {
    position: relative;
    text-align: center;
    top: 10px;
}
</style>
