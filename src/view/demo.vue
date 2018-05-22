<template>
    <div id="home">
        <swiper id="banner-swiper" :show-desc-mask="false" dots-class="swiper-dots" :list="swiperList" :aspect-ratio="630/1125"></swiper>
        <div class="caption">
            <div class="bg-text">
                01
            </div>
            <div class="slogan-block">
                <span class="decorate">
                    <span class="txt">VR</span>
                    <span class="vux-1px-l line"></span>
                </span>
                <p class="slogan">VR全屋装所见即所得</p>
            </div>
            
        </div>
        <div class="feature" :style="`background-image:url(${bg})`">
            <div class="explain">
                区别于装修公司,我们提供整套的VR全景装修方案100%还原新家
            </div>
            <div class="more vux-1px">
                <router-link :to="{name:'register'}">了解更多</router-link>
                <img class="arrowL" :src="arrowL" alt="">
            </div>
            <div class="download">
                <div class="downloadBtn">
                    <img class="arrowB" :src="arrowB" alt="">
                    <div class="explain">
                        360度旋转VR全套方案所见即所得
                    </div>
                </div>
                <canvas class="mycanvas" ref="ripple"></canvas>
            </div>
        </div>
        
    </div>
</template>
<script>
import { Flexbox, Swiper } from "vux";
import { setInterval } from "timers";
export default {
    components: {
        Swiper,
        Flexbox
    },
    data() {
        return {
            arrowB: require("../assets/images/箭头1.svg"),
            arrowL: require("../assets/images/箭头2.svg"),
            bg: require("../assets/images/vr@3.png"),
            swiperList: [
                {
                    url: "javascript",
                    img: require("@/assets/images/banner1@3.png"),
                    title: ""
                },
                {
                    url: "javascript",
                    img: require("@/assets/images/banner2@3.png"),
                    title: ""
                }
            ],
            circle: []
        };
    },
    mounted() {
        this.update();
    },
    methods: {
        update() {
            if (this.circle.length == 0) {
                for (let i = 0; i < 4; i++) {
                    this.circle.push({
                        r: 25 + i * 35,
                        alpha: 1 - i * 0.25
                    });
                }
            } else {
                this.circle.map((v, index, arr) => {
                    if (arr[0].r > 60) {
                        v.r = 25 + index * 35;
                    }
                    v.r += 0.2;
                });
            }
            this.draw();
        },
        draw() {
            let canvas = this.$refs.ripple,
                context = canvas.getContext("2d");
            canvas.width = 260;
            canvas.height = 260;
            for (let v of this.circle) {
                context.beginPath();
                context.arc(130, 130, v.r, 0, 2 * Math.PI);
                context.strokeStyle = `rgba(57,213,194,${v.alpha})`;
                context.stroke();
                context.closePath();
            }
            requestAnimationFrame(this.update);
        }
    }
};
</script>
<style lang="less">
</style>