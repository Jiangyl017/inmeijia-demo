<template>
    <flexbox>
        <swiper class="banner-swiper" :list="swiperList" :aspect-ratio="630/1125"></swiper>
    </flexbox>
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
                    img: require("assets/images/banner1@3.png"),
                    title: ""
                },
                {
                    url: "javascript",
                    img: require("assets/images/banner2@3.png"),
                    title: ""
                }
            ]
        };
    },
    methods: {}
};
</script>
<style lang="less">
.banner-swiper {
    width: 100%;
}
</style>
