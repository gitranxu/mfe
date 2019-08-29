export default {
    state: {
        userInfo: {
            token: '', //登录过后的token
            refreshToken: '',
            user: {
                id:'-6009'
            }
        },
        setInfoBox:''
    },
    mutations: {
        boxWidthUpdate(state, payload) {
            state.userWidthUpdate = payload;
        },
        setPersonalInfDialogVisible(state, payload) {
            state.personalInfDialogVisible = payload;
        }
    }
}