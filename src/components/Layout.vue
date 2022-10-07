<template>
    <div>
        <div>
            <img src = "../assets/hero.png" class="image"/>
            <div class="pt-3 px-5 view__header d-flex flex-column justify-items-start logo">
                <div align="right">
                    <img src = "@/icons/facebook.svg" class= "facebook">
                    <img src = "@/icons/instagram.svg" class= "instagram">
                    <img src = "@/icons/youtube.svg" class= "youtube">
                </div>
                <b-col cols="2">
                    <b-row >
                        <h3>Logo</h3>
                    </b-row>
                </b-col>
            </div>
            <div class="px-5 view__header d-flex flex-column justify-items-start second">
                <b-col cols="2">
                    <b-row>
                        <h2>El secreto de tu cocina</h2>
                    </b-row>
                    <img class="brush" src="../assets/BRUSH-3 2.png" width="600" height="100"/>
                </b-col>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Prop, Watch } from 'vue-property-decorator';
    
    @Component({
        components: {
        },
    })
    export default class Layouts extends Vue {

    }
</script>

<style lang="scss">
    h3{
        margin-bottom: 60px !important;
        font-family: 'Caveat', cursive;
    }
    h2{
        width: 205px !important;
        position: absolute;
        font-family: 'Caveat', cursive;
    }
    div.pt-3.px-5.view__header.d-flex.flex-column.justify-items-start.logo{
        position: relative;
    }
    div.px-5.view__header.d-flex.flex-column.justify-items-start.second{
        position: relative;
    }
    img.image{
        width: 100%;
        height: 60%;
        position: absolute;
    }
    img.facebook{
        width: 13px !important;
        margin-right: 5px;
    }
    img.instagram{
        width: 20px !important;
        margin-right: 5px;
    }
    img.youtube{
        width: 20px !important;
        margin-right: 5px;
    }
    img.brush{
        margin-right: 500px;
        margin-left: -340px;
        margin-top: 25px;
    }
</style>