<template>
    <div class="left-part">
        <div class="crumbs">
            <div class="time-stamp">9:00 AM</div>
            <div class="describe-scene">Describe scene</div>
        </div>
        <div class="select-bar">
            <svg
                width="155"
                height="4"
                viewBox="0 0 155 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect width="172" height="4" fill="#A279F9" />
            </svg>
        </div>
        <div class="ds">
            <div class="image-container">
                <img
                    class="image"
                    src="../../../assets/Detail/57-19.png"
                    width="1040px"
                    height="600px"
                />
            </div>
            <div class="control-group">
                <div class="controller-container">
                    <div class="controller-text">View Controller</div>
                    <div class="sub-controller">
                        <div class="left-controller">
                            <svg
                                width="140"
                                height="140"
                                viewBox="0 0 140 140"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="70"
                                    cy="70"
                                    r="70"
                                    fill="#C4C4C4"
                                    fill-opacity="0.6"
                                />
                                <circle
                                    cx="70"
                                    cy="70"
                                    r="20"
                                    fill="#C4C4C4"
                                    fill-opacity="0.6"
                                />
                                <circle
                                    cx="70"
                                    cy="70"
                                    r="18"
                                    stroke="#202C36"
                                    stroke-opacity="0.6"
                                    stroke-width="4"
                                />
                                <path
                                    d="M70 21L80 38.3205H60L70 21Z"
                                    fill="#C4C4C4"
                                />
                                <path
                                    d="M18 66L35.3205 56V76L18 66Z"
                                    fill="#C4C4C4"
                                />
                                <path
                                    d="M122.32 66L105 76V56L122.32 66Z"
                                    fill="#C4C4C4"
                                />
                                <path
                                    d="M70 118.32L60 101H80L70 118.32Z"
                                    fill="#C4C4C4"
                                />
                            </svg>
                        </div>
                        <div class="right-controller">
                            <svg
                                width="140"
                                height="140"
                                viewBox="0 0 140 140"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="70"
                                    cy="70"
                                    r="70"
                                    fill="#C4C4C4"
                                    fill-opacity="0.6"
                                />
                                <circle
                                    cx="70"
                                    cy="70"
                                    r="20"
                                    fill="#C4C4C4"
                                    fill-opacity="0.6"
                                />
                                <circle
                                    cx="70"
                                    cy="70"
                                    r="18"
                                    stroke="#202C36"
                                    stroke-opacity="0.6"
                                    stroke-width="4"
                                />
                                <path
                                    d="M70 21L80 38.3205H60L70 21Z"
                                    fill="#C4C4C4"
                                />
                                <path
                                    d="M18 66L35.3205 56V76L18 66Z"
                                    fill="#C4C4C4"
                                />
                                <path
                                    d="M122.32 66L105 76V56L122.32 66Z"
                                    fill="#C4C4C4"
                                />
                                <path
                                    d="M70 118.32L60 101H80L70 118.32Z"
                                    fill="#C4C4C4"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="map-container">
                    <div class="map-text">Navagation Map</div>
                    <div class="map-shadow">
                        <svg
                            width="318"
                            height="138"
                            viewBox="0 0 318 138"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g filter="url(#filter0_i)">
                                <rect
                                    width="318"
                                    height="138"
                                    rx="20"
                                    fill="#C4C4C4"
                                    fill-opacity="0.65"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_i"
                                    x="0"
                                    y="0"
                                    width="322"
                                    height="142"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB"
                                >
                                    <feFlood
                                        flood-opacity="0"
                                        result="BackgroundImageFix"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    />
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                    />
                                    <feOffset dx="4" dy="4" />
                                    <feGaussianBlur stdDeviation="15" />
                                    <feComposite
                                        in2="hardAlpha"
                                        operator="arithmetic"
                                        k2="-1"
                                        k3="1"
                                    />
                                    <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in2="shape"
                                        result="effect1_innerShadow"
                                    />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Leftpart"
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left-part {
    width: 1140px;
    position: relative;
}
.crumbs {
    display: flex;
    align-items: center;
    width: 400px;
    height: 45px;
    justify-content: space-around;
}
.time-stamp {
    position: relative;
    left: 5px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    /* identical to box height */
    color: #a279f9;
}

.describe-scene {
    position: relative;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    /* identical to box height */
    color: #ffffff;
}
.select-bar {
    position: relative;
    top: -20px;
    height: 4px;
    left: 205px;
}
.ds {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.image-container {
    position: relative;
    top: 5px;
}

.image {
    z-index: 0;
    border-radius: 10px;
}

.control-group {
    /* Rectangle 4 */
    display: flex;
    position: relative;
    top: 15px;
    width: 940px;
    justify-content: space-around;
}

.controller-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 430px;
    height: 200px;
    border-radius: 20px;
    background: rgba(162, 121, 249, 0.8);
}

.controller-text {
    position: relative;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    /* identical to box height */

    color: #ffffff;
}

.sub-controller {
    display: flex;
    position: relative;
    width: 430px;
    justify-content: space-around;
    flex-direction: row;
}

.map-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 430px;
    height: 200px;
    border-radius: 20px;
    background: #000000;
}

.map-text {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */

    color: #ffffff;
}
</style>
