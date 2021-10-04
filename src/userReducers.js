export default function userReducer (state, action) {
    switch (action.type) {
        case 'LOGIN':
            return action.loginData.username
        case 'REGISTER':
            return action.registerData.username
        case 'LOGOUT':
            return ''
        default:
            return state;
    }
}

