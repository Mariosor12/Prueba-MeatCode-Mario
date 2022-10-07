<template>
    <div align="center">
        <div
            class="pt-5 px-5 view__header d-flex flex-column justify-items-start"
        >
            <h1>Contáctanos</h1>
            <div align="center">
                <img
                    class="bodyForm"
                    src="../../../assets/BRUSH-3 2.png"
                    width="400"
                    height="80"
                />
            </div>
            <div class="row" align="center">
                <div class="col-md-5" align="center">
                    <h6>Nombre</h6>
                    <input v-model="body.firstname" type="text" />
                </div>
                <div class="col-md-5">
                    <h6>Apellido</h6>
                    <input v-model="body.lastname" type="text" />
                </div>
                <div class="col-md-5">
                    <h6 class="mail">Mail</h6>
                    <input v-model="body.email" type="text" />
                </div>
                <div class="col-md-5">
                    <h6>Teléfono</h6>
                    <input v-model="body.phone" type="text" />
                </div>
                <div class="pt-5 col-md-14">
                    <div class="col-md-5">
                        <b-button pill variant="primary" @click="EnviarDatos()">ENVIAR</b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
// Store
import { landingpage } from '../../../store/namespaces';
import LandingMethods from '../../../store/LandingPage/methods/landingpage.methods';

//Interface
import { landingPage } from '../interfaces/landingpage.interface';

@Component({
    components: {
    },
})
export default class Forms extends Vue {
    body = {
        firstname : '',
        lastname: '',
        email: '',
        phone: ''
    }

    async EnviarDatos(){
        await this.fetchAddLanding(this.body)
    }

    @landingpage.Action(LandingMethods.actions.ADD_CONTACT)
    fetchAddLanding!: (body: any) => Promise<boolean>;
}
</script>

<style lang="scss">
img.bodyForm {
    margin-bottom: 35px;
    margin-top: -30px;
    opacity: 0.3 !important;
}
h6 {
    margin-right: 120px;
    margin-top: 20px;
    font-family: 'Open Sans';
}
h6.mail {
    margin-right: 140px;
    margin-top: 10px;
}
div.pt-5.col-md-14 {
    margin-left: 170px;
}
button.btn.btn-primary.rounded-pill {
    width: 120px;
}
input {
    width: 240px;
    margin-left: 60px;
}
button.btn.btn-primary.rounded-pill{
    background-color: #d8ad3d;
    border-color: #d8ad3d;
}
h1{
    font-family: 'Caveat', cursive;
}
div.col-md-5{
    margin-top: 15px;
}
</style>
