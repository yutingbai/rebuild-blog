export default {
    state: {
        userName: '',
        userHead: '',
        userId: ''
    },
    getters: {
        userName: state => state.userName,
        userHead: state => state.userHead,
        userId: state => state.userId,
    },
    mutations: {
        SET_USERMSG(state, data) {
            state.userName = data.userName
            state.userHead = data.userHead
            state.userId = data.userId
        },
        LOGOUT(state, data) {
            state.userName = null
            state.userHead = null
            state.userId = null
        },
    }
}