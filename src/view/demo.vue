<template>
    <div>
        <swiper id="banner-swiper" :show-desc-mask="false" dots-class="swiper-dots" :list="swiperList" :aspect-ratio="630/1125"></swiper>
        <div class="caption">
            <div class="bg-text">
                01
            </div>
            <div class="slogan-block">
                <p class="slogan">VR全屋装所见即所得</p>
                <span class="write-v">VR</span>
            </div>
            <div class="explain">
                区别于装修公司,我们提供整套的VR全景装修方案100%还原新家
            </div>
        </div>
        <div class="feature">
            <div class="more">
                <span>了解更多</span>
            </div>
            <div class="download">
                <div class="explain">
                    360度旋转VR全套方案所见即所得
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import { Flexbox, Swiper } from "vux";
export default {
    components: {
        Swiper,
        Flexbox
    },
    data() {
        return {
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
            ]
        };
    },
    methods: {}
};
</script>
<style lang="less">

</style>