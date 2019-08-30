export default {
    state: {
        currentSite: {}, //当前选中的站点
        mode: 'demo1Statemode', //noedit,personalEdit,portalEdit三种状态
    },
    mutations: {
        updateCurrentSiteState(state, payload) {
            state.gopCurrentSite = Object.assign({}, state.gopCurrentSite, payload);
        },
        updateModeState(state, payload) {
            state.gopMode = payload;
        },
    },
    actions: {
        savePageLayout(context,opt={}) {
            
        },
        getPageLayout(context) {

        },
    },
    getters: {
        leftMenu(state) {
            // let result = [];
            // if(state.menu.length && state.headerMenuIndex) {
            //     result = state.menu.find(menu => {
            //         return menu.menuId == state.headerMenuIndex;
            //     });
            // }else {
            //     result = [];
            // }
            // return result;
        }
    }
}