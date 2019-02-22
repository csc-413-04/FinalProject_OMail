const initialState = {
    email: 'pyae',
    logged: true
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
        return Object.assign({},state,{
            email: action.payload,
            logged: false,
        });
        default:
            return state;
    }
};

export default userReducer;