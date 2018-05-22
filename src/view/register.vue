<template>
    <div id="register">

        <div class="logo">
            <img :src="logoUrl" alt="">
        </div>
        <h3 class="title">现在预约</h3>
        <div class="formList">
            <p class="explain">免费获得客厅VR全景方案</p>
            <group class="group">
                <popup-picker arrow-direction="up" value-text-align="left" v-model="houseType" placeholder="" :data="houseList"></popup-picker>
            </group>
            <group class="group">
                <popup-picker value-text-align="left" v-model="area" placeholder="" :data="areaList"></popup-picker>
            </group>
            <group class="group">
                <x-input title="" placeholder="所在小区" v-model="address"></x-input>
            </group>
            <x-button class="group submitBtn" type="primary">立即预约</x-button>
        </div>
    </div>
</template>
<script>
    import { Group, PopupPicker, XInput, XButton } from "vux";
    export default {
        components: {
            PopupPicker,
            Group,
            XInput,
            XButton
        },
        data() {
            return {
                logoUrl: require('../assets/images/logo.png'),
                houseType: ['毛胚房'],
                houseList: [['毛胚房', '简装房', '精装房']],
                area: ['杭州市'],
                areaList: [['杭州市', '深圳市', '北京市', '上海市', '广州市']],
                address: ''
            }
        }
    }    
</script>
<style>
    #register .weui-cell_access .weui-cell__ft:after {
        transform: rotate(135deg)
    }

    #register .weui-cells:before,
    #register .weui-cells:after {
        border: 0;
    }
</style>