<template>
    <div>
        <div>
            <img src="../assets/hero.png" class="image" />
            <div
                class="pt-3 px-5 view__header d-flex flex-column justify-items-start logo"
            >
                <b-row>
                    <div align="right">
                        <img src="@/icons/facebook.svg" width="20" height="20" class="facebook" />
                        <img src="@/icons/instagram.svg" width="17" height="20" class="instagram" />
                        <img src="@/icons/youtube.svg" width="20" height="20" class="youtube" />
                    </div>
                </b-row>
                <b-col cols="2">
                    <b-row>
                        <h3>Logo</h3>
                    </b-row>
                </b-col>
            </div>
            <div
                class="px-5 view__header d-flex flex-column justify-items-start second"
            >
                <b-col cols="2">
                    <b-row>
                        <h2>El secreto de tu cocina</h2>
                    </b-row>
                    <img
                        class="brush"
                        src="../assets/BRUSH-3 2.png"
                        width="600"
                        height="100"
                    />
                </b-col>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

@Component({
    components: {},
})
export default class Layouts extends Vue {}
</script>

<style lang="scss">
h3 {
    margin-bottom: 60px !important;
    font-family: 'Caveat', cursive;
}
h2 {
    width: 205px !important;
    position: absolute;
    font-family: 'Caveat', cursive;
}
div.pt-3.px-5.view__header.d-flex.flex-column.justify-items-start.logo {
    position: relative;
}
div.px-5.view__header.d-flex.flex-column.justify-items-start.second {
    position: relative;
}
img.image {
    width: 100%;
    height: 60%;
    position: absolute;
}
img.facebook {
    margin-left: 5px;
    position: relative;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #009cd9 !important;
}
img.instagram {
    margin-left: 15px;
    position: relative;
    height: 23px;
    border-radius: 50%;
    border: 2px solid #b72c2c !important;
}
img.youtube {
    margin-left: 15px;
    position: relative;
    height: 22px;
    border-radius: 50%;
    border: 2px solid #d8ad3d !important;
}
img.brush {
    margin-right: 500px;
    margin-left: -340px;
    margin-top: 25px;
}
</style>
