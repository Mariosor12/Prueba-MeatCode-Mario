<template>
    <div align="center">
        <div
            class="pt-5 px-5 view__header d-flex flex-column justify-items-start" align="center"
        >
        <div align="center">
            <h2>Contáctanos</h2>
        </div>
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
                    <p class="input" required>Nombre</p>
                    <input v-model="body.firstname" type="text" />
                </div>
                <div class="col-md-5">
                    <p class="input" required>Apellido</p>
                    <input v-model="body.lastname" type="text" />
                </div>
                <div class="col-md-5">
                    <p class="input" required>Mail</p>
                    <input v-model="body.email" type="email" />
                </div>
                <div class="col-md-5">
                    <p class="input" required>Teléfono</p>
                    <input v-model="body.phone" type="text" />
                </div>
                <b-row align="center">
                    <p class="error" style="font-size: 12px; text-align: center">
                        {{ errorloginMessage }}
                    </p>
                </b-row>
                <div class="pt-5 col-md-14">
                    <div class="col-md-5">
                        <b-button v-if="body.firstname.length > 0 && body.lastname.length > 0 && body.email.length > 0 && body.phone.length > 0" pill variant="primary" @click="EnviarDatos()">ENVIAR</b-button>
                        <b-button disabled v-else pill variant="primary" @click="EnviarDatos()">ENVIAR</b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { required} from 'vuelidate/lib/validators';
// Store
import { landingpage } from '../../../store/namespaces';
import LandingMethods from '../../../store/LandingPage/methods/landingpage.methods';

//Interface
import { landingPage } from '../interfaces/landingpage.interface';

@Component({
    components: {
    },
    validations: {
        body:{
            firstname: {required},
            lastname: {required},
            email: {required},
            phone: {required}
        }
    }
})
export default class Forms extends Vue {
    body = {
        firstname : '',
        lastname: '',
        email: '',
        phone: ''
    }
    errorloginMessage: string = '';

    async mounted(){
        this.body
        console.log(this.body)
    }

    async EnviarDatos(){
        if (this.body.firstname.search(/[0-9]/i) > 0){
            this.errorloginMessage = 'El nombre no debe tener números';
        }
        else if (this.body.lastname.search(/[0-9]/i) > 0){
            this.errorloginMessage = 'El apellido no debe tener números';
        }
        else if (this.body.phone.search(/[a-z]/i) > 0){
            this.errorloginMessage = 'El teléfono no debe tener caracteres';
        }
        else if(this.body.firstname.length > 0 || this.body.lastname.length > 0 || this.body.email.length > 0 || this.body.phone.length > 0){
            console.log('entra')
            await this.fetchAddLanding(this.body)
        }
        else if(this.body.firstname.length < 0 || this.body.lastname.length < 0 || this.body.email.length < 0 || this.body.phone.length < 0){
            this.errorloginMessage = 'Todos los campos son requeridos';
        }
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
h6.input {
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
button.btn.btn-primary.rounded-pill:hover{
    background-color: #009cd9;
    border-color: #009cd9;
}
h2{
    font-family: 'Caveat', cursive;
}
div.col-md-5{
    margin-top: 15px;
}
p.input{
    margin-right: 160px;
    font-weight: bold;
}
input:focus{
    border-color: #d8ad3d;
    box-shadow: #d8ad3d;
    outline: 0 none;
}
</style>
