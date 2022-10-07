<template>
    <LandingPages/>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import LandingPages from './modules/landingPage/views/LandingPage.vue';

@Component({
    components: {
        LandingPages
    },
})
export default class App extends Vue {
    created() {
        // let { routes } = this.$router.options;
        // routes!.push({ path: '/bar', component: () => import('./views/Resume.vue'), name: 'Bar' }  )!
        // this.$router.addRoutes(routes!)
    }
}
</script>

<style lang="scss">

</style>
