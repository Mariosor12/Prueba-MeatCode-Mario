<template>
    <div>
        <Layout />
        <div
            class="pt-5 px-5 view__header d-flex flex-column justify-items-start"
        >
            <div
                class="pt-5 px-5 view__header d-flex flex-column justify-items-start"
            >
                <div
                    class="pt-5 px-5 view__header d-flex flex-column justify-items-start"
                >
                    <div
                        class="pt-5 view__header d-flex flex-column justify-items-start"
                    >
                        <div
                            class="pt-5 view__header d-flex flex-column justify-items-start"
                        >
                            <div
                                class="pt-5 view__header d-flex flex-column justify-items-start"
                            >
                                <div
                                    class="pt-5 view__header d-flex flex-column justify-items-start"
                                >
                                    <div align="center">
                                        <h1 class="body">Nuestros Artículos</h1>
                                        <div align="center">
                                            <img
                                                class="body"
                                                src="../../../assets/BRUSH-3 2.png"
                                                width="400"
                                                height="80"
                                            />
                                        </div>
                                    </div>
                                    <div class="wrapper">
                                        <b-row>
                                            <ul style="max-width: 5rem">
                                                <div
                                                    class="todos-ul"
                                                    display="flex"
                                                    justify-content="center"
                                                    align-items="center space-around"
                                                >
                                                    <b-link
                                                        v-if="
                                                            allButtom === true
                                                        "
                                                        @click="
                                                            ObtenerCategoria(
                                                                'Todos'
                                                            );
                                                            allButtom = true;
                                                            productButtom = false;
                                                            recepyButtom = false;
                                                            infoBuFttom = false;
                                                        "
                                                        id="todos"
                                                        ><h6 class="todos">
                                                            Todos
                                                        </h6>
                                                        <img
                                                            id="todos-img"
                                                            class="todos"
                                                            src="../../../icons/arrow.svg"
                                                            width="20"
                                                            height="15"
                                                        />
                                                    </b-link>
                                                    <b-link
                                                        v-else
                                                        @click="
                                                            ObtenerCategoria(
                                                                'Todos'
                                                            );
                                                            allButtom = true;
                                                            productButtom = false;
                                                            recepyButtom = false;
                                                            infoBuFttom = false;
                                                        "
                                                        id="todos"
                                                        ><h6 class="todos-else">
                                                            Todos
                                                        </h6>
                                                    </b-link>
                                                </div>
                                                <div
                                                    class="product-ul"
                                                    display="flex"
                                                    justify-content="center"
                                                    align-items="center space-around"
                                                >
                                                    <b-link
                                                        v-if="
                                                            productButtom ===
                                                            true
                                                        "
                                                        @click="
                                                            ObtenerCategoria(
                                                                'Productos'
                                                            );
                                                            allButtom = false;
                                                            productButtom = true;
                                                            recepyButtom = false;
                                                            infoBuFttom = false;
                                                        "
                                                        id="productos"
                                                        ><h6 class="product">
                                                            Productos
                                                        </h6>
                                                        <img
                                                            id="product-img"
                                                            class="product"
                                                            src="../../../icons/arrow.svg"
                                                            width="20"
                                                            height="15"
                                                        />
                                                    </b-link>
                                                    <b-link
                                                        v-else
                                                        @click="
                                                            ObtenerCategoria(
                                                                'Productos'
                                                            );
                                                            allButtom = false;
                                                            productButtom = true;
                                                            recepyButtom = false;
                                                            infoBuFttom = false;
                                                        "
                                                        id="productos"
                                                        ><h6
                                                            class="product-else"
                                                        >
                                                            Productos
                                                        </h6>
                                                    </b-link>
                                                </div>
                                                <div
                                                    class="recepy-ul"
                                                    display="flex"
                                                    justify-content="center"
                                                    align-items="center space-around"
                                                >
                                                    <b-link
                                                        v-if="
                                                            recepyButtom ===
                                                            true
                                                        "
                                                        @click="
                                                            ObtenerCategoria(
                                                                'Recetas'
                                                            );
                                                            allButtom = false;
                                                            productButtom = false;
                                                            recepyButtom = true;
                                                            infoBuFttom = false;
                                                        "
                                                        id="recetas"
                                                        ><h6 class="recepy">
                                                            Recetas
                                                        </h6>
                                                        <img
                                                            id="todos-img"
                                                            class="todos"
                                                            src="../../../icons/arrow.svg"
                                                            width="20"
                                                            height="15"
                                                    /></b-link>
                                                    <b-link
                                                        v-else
                                                        @click="
                                                            ObtenerCategoria(
                                                                'Recetas'
                                                            );
                                                            allButtom = false;
                                                            productButtom = false;
                                                            recepyButtom = true;
                                                            infoBuFttom = false;
                                                        "
                                                        id="recetas"
                                                        ><h6
                                                            class="recepy-else"
                                                        >
                                                            Recetas
                                                        </h6>
                                                    </b-link>
                                                </div>
                                                <div
                                                    class="recepy-ul"
                                                    display="flex"
                                                    justify-content="center"
                                                    align-items="center space-around"
                                                >
                                                    <b-link
                                                        v-if="
                                                            infoBuFttom === true
                                                        "
                                                        @click="
                                                            ObtenerCategoria(
                                                                'Consejos'
                                                            );
                                                            allButtom = false;
                                                            productButtom = false;
                                                            recepyButtom = false;
                                                            infoBuFttom = true;
                                                        "
                                                        id="consejos"
                                                        ><h6 class="info">
                                                            Consejos
                                                        </h6>
                                                        <img
                                                            id="product-img"
                                                            class="product"
                                                            src="../../../icons/arrow.svg"
                                                            width="20"
                                                            height="15"
                                                    /></b-link>
                                                    <b-link
                                                        v-else
                                                        @click="
                                                            ObtenerCategoria(
                                                                'Consejos'
                                                            );
                                                            allButtom = false;
                                                            productButtom = false;
                                                            recepyButtom = false;
                                                            infoBuFttom = true;
                                                        "
                                                        id="consejos"
                                                        ><h6 class="info-else">
                                                            Consejos
                                                        </h6>
                                                    </b-link>
                                                </div>
                                            </ul>
                                            <b-card
                                                v-for="landing in filteredd"
                                                :title="landing.title"
                                                :img-src="landing.image"
                                                :img-alt="landing.title"
                                                img-top
                                                tag="article"
                                                :value="landingpages"
                                                style="
                                                    max-width: 19rem;
                                                    margin-left: 20px;
                                                "
                                                class="mb-2"
                                            >
                                                <b-card-text>
                                                    {{ landing.content }}
                                                </b-card-text>
                                                <a
                                                    id="link"
                                                    v-bind:href="landing.url"
                                                    class="stretched-link"
                                                    >Ver Más</a
                                                >
                                            </b-card>
                                        </b-row>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Form />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import axios from 'axios';
// Store
import { landingpage } from '../../../store/namespaces';
import LandingMethods from '../../../store/LandingPage/methods/landingpage.methods';

//Interface
import {
    landingPage,
    landingOnePage,
} from '../interfaces/landingpage.interface';
import Layout from '../../../components/Layout.vue';
import Form from '../components/Form.vue';

@Component({
    components: {
        Layout,
        Form,
    },
})
export default class LandingPages extends Vue {
    filtered: any[] = [];
    filters: any = {};
    obj: any;
    allButtom: boolean = true;
    productButtom: boolean = false;
    recepyButtom: boolean = false;
    infoBuFttom: boolean = false;

    async mounted() {
        await this.landingPageAdded();
        console.log('all', this.allButtom);
        console.log('product', this.productButtom);
        console.log('recepy', this.recepyButtom);
        console.log('ifo', this.infoBuFttom);
    }

    async landingPageAdded() {
        await this.fetchOneCategory('');
    }

    async ObtenerCategoria(nombre: string) {
        if (nombre === 'Todos') {
            await this.fetchOneCategory('');
        } else if (nombre === 'Productos') {
            await this.fetchOneCategory('Productos');
        } else if (nombre === 'Recetas') {
            await this.fetchOneCategory('Recetas');
        } else if (nombre === 'Consejos') {
            await this.fetchOneCategory('Consejos');
        }
    }

    get filteredd() {
        this.filtered = this.landingOnepages.filter((item: any) => {
            return Object.keys(this.filters).every((key) =>
                String(item[key]?.toString().toLowerCase()).includes(
                    this.filters[key]?.toLowerCase()
                )
            );
        });
        return this.filtered;
    }

    @landingpage.Action(LandingMethods.actions.FETCH_ALL_LANDINGPAGE)
    fetchLanding!: () => Promise<boolean>;

    @landingpage.Getter(LandingMethods.getters.GET_LANDINGPAGE)
    landingpages!: landingPage[];

    @landingpage.Action(LandingMethods.actions.FETCH_ONE_CATEGORY)
    fetchOneCategory!: (product: string) => Promise<boolean>;

    @landingpage.Getter(LandingMethods.getters.GET_ONE_CATEGORY)
    landingOnepages!: landingOnePage[];
}
</script>

<style lang="scss">
h1.body {
    font-family: 'Caveat', cursive;
    position: absolute;
    align-items: center !important;
    justify-content: center;
    margin-left: 400px;
    width: 360px !important;
}
img.body {
    margin-top: 15px;
    opacity: 0.3 !important;
}
article.card.mb-2 {
    #link {
        visibility: hidden;
    }
}
article.card.mb-2:hover {
    h4.card-title {
        color: #d8ad3d;
    }
    a.stretched-link {
        color: #d8ad3d;
    }
    #link {
        visibility: visible;
    }
}
ul {
    margin-right: 50px;
    margin-left: -130px;
}
h6 {
    font-family: 'Open Sans';
    color: black;
}
h6:hover {
    font-family: 'Open Sans';
    color: #d8ad3d;
}
h6.todos {
    font-family: 'Open Sans';
    color: black;
    position: absolute;
}
h6.todos:hover {
    font-family: 'Open Sans';
    color: #d8ad3d;
}
a {
    text-decoration: none !important;
}
img.todos {
    margin-left: 80px;
    margin-bottom: 10px;
}
img.product {
    margin-left: 80px;
    margin-bottom: 10px;
}
h6.product {
    font-family: 'Open Sans';
    color: black;
    position: absolute;
}
h6.product-else {
    font-family: 'Open Sans';
    color: black;
}
h6.recepy {
    font-family: 'Open Sans';
    color: black;
    position: absolute;
}
h6.recepy-else {
    font-family: 'Open Sans';
    color: black;
}
h6.todos-else {
    font-family: 'Open Sans';
    color: black;
}
h6.todos-else:hover {
    font-family: 'Open Sans';
    color: #d8ad3d;
}
h6.info-else {
    font-family: 'Open Sans';
    color: black;
}
h6.info-else:hover {
    font-family: 'Open Sans';
    color: #d8ad3d;
}
h6.info {
    font-family: 'Open Sans';
    color: black;
    position: absolute;
}
h6.product:hover {
    font-family: 'Open Sans';
    color: #d8ad3d;
}
h6.product-else:hover {
    font-family: 'Open Sans';
    color: #d8ad3d;
}
h6.recepy:hover {
    font-family: 'Open Sans';
    color: #d8ad3d;
}
h6.product:hover {
    font-family: 'Open Sans';
    color: #d8ad3d;
}
h6.info:hover {
    font-family: 'Open Sans';
    color: #d8ad3d;
}
</style>
