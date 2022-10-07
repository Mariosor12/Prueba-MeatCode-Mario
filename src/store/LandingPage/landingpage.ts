import { Module } from 'vuex';
import LandingTypes from '@/store/LandingPage/methods/landingpage.methods';
import { landingpageHttpRepository }from '@/modules/landingPage/repositories/landingpage.repository';
import { LANDINGPAGE_EMPTY_STATE } from './landingpage.state';
import { LandingPageStateInterface } from './interfaces/landingpage.interface';
import { landingPage, landingOnePage } from '@/modules/landingPage/interfaces/landingpage.interface';

const landingpage: Module<LandingPageStateInterface, any> = {
    namespaced: true,
    state: LANDINGPAGE_EMPTY_STATE,
    getters: {
        [LandingTypes.getters.GET_LANDINGPAGE](state): any {
            return state.landingpage;
        },
        [LandingTypes.getters.GET_ONE_CATEGORY](state): any {
            return state.landingOnePage;
        },
    },
    mutations:{
        [LandingTypes.mutations.SET_LANDINGPAGE](state, landingpage: landingPage[]): void {
            state.landingpage = landingpage
        },
        [LandingTypes.mutations.SET_ONE_CATEGORY](state, landingOnePage: landingOnePage[]): void {
            state.landingOnePage = landingOnePage
        },
    },
    actions:{
        async [LandingTypes.actions.FETCH_ALL_LANDINGPAGE]({ commit }): Promise<boolean> {
            try {
                const landingpage: landingPage[] = await landingpageHttpRepository.getArticles();
                if (landingpage.length){
                    commit(LandingTypes.mutations.SET_LANDINGPAGE, landingpage);
                    return true;
                }
                return false
            } catch (e) {
                return false;
            }
        },
        async [LandingTypes.actions.ADD_CONTACT]({ commit }, body: any): Promise<boolean> {
            try {
                const addLanding: landingPage[] = await landingpageHttpRepository.addArticle(body);
                if (addLanding.length){
                    return true;
                }
                return false
            } catch (e) {
                return false;
            }
        },
        async [LandingTypes.actions.FETCH_ONE_CATEGORY]({ commit }, product: string): Promise<boolean> {
            try {
                const landingpage: landingPage[] = await landingpageHttpRepository.getOneCategory(product);
                if (landingpage.length){
                    commit(LandingTypes.mutations.SET_ONE_CATEGORY, landingpage);
                    return true;
                }
                return false
            } catch (e) {
                return false;
            }
        },
    }
}

export default landingpage;