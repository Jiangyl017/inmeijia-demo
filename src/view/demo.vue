<template>
    <div>
        <swiper id="banner-swiper" :show-desc-mask="false" dots-class="swiper-dots" :list="swiperList" :aspect-ratio="630/1125"></swiper>
        <div class="caption">
            <div class="bg-text">
                01
            </div>
            <div class="solgan-block">
                <p class="solgan1">VR全屋装所见即所得</p>
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
    .swiper-dots {
        left: 0.76rem;
    }

    #banner-swiper {
        .vux-icon-dot {
            width: 0.08rem;
            height: 0.08rem;
            border-radius: 50%;
            border: 0.02rem solid #666;
            background-color: #fff;
            color: #fff;
            &.active {
                background-color: #666;
            }
        }
    }

    .bg-text {
        text-align: center;
        font-family: HelveticaNeue-CondensedBold;
        font-size: 2.4rem;
        color: #edf2f2;
        position: relative;
    }
</style>