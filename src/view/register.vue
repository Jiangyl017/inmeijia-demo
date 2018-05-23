<template>
    <div id="register">

        <div class="logo">
            <img :src="logoUrl" alt="">
        </div>
        <h3 class="title">现在预约</h3>
        <div class="formList">
            <p class="explain">免费获得客厅VR全景方案</p>
            <group class="group">
                <popup-picker arrow-direction="up" value-text-align="left" v-model="houseType" :data="houseList"></popup-picker>
            </group>
            <group class="group">
                <popup-picker value-text-align="left" v-model="area"  :data="areaList"></popup-picker>
            </group>
            <group class="group">
                <x-input title="" placeholder="" v-model="address"></x-input>
            </group>
            <x-button class="submitBtn" type="primary" @click.native="submit">立即预约</x-button>
        </div>
    </div>
</template>
<script>
import { Group, PopupPicker, XInput, XButton } from "vux";
import { fail } from "assert";

export default {
    components: {
        PopupPicker,
        Group,
        XInput,
        XButton
    },
    data() {
        return {
            logoUrl: require("../assets/images/logo.png"),
            houseType: ["请选择房型"],
            houseList: [["请选择房型", "毛胚房", "简装房", "精装房"]],
            area: ["请选择城市"],
            areaList: [
                ["请选择城市", "杭州市", "深圳市", "北京市", "上海市", "广州市"]
            ],
            address: "所在小区"
        };
    },
    methods: {
        submit() {
            if (this.houseType == "请选择房型") {
                this.$vux.alert.show({
                    title: "提示",
                    content: "请选择您的房型"
                });
                return false;
            }
            if (this.area == "请选择城市") {
                this.$vux.alert.show({
                    title: "提示",
                    content: "请选择您的城市"
                });
                return false;
            }
            if (this.address == "所在小区") {
                this.$vux.alert.show({
                    title: "提示",
                    content: "请输入您的小区"
                });
                return false;
            }
            this.$http
                .post("/reister", {
                    houseType: this.houseType,
                    area: this.area,
                    address: this.address
                })
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                    this.$vux.alert.show({
                        title: "错误",
                        content: "请求发送失败"
                    });
                });
        }
    }
};
</script>
<style>
#register .weui-cell_access .weui-cell__ft:after {
    transform: rotate(135deg);
}

#register .weui-cells:before,
#register .weui-cells:after {
    border: 0;
}
</style>