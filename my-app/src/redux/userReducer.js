const initialState = {
    email: 'pyae',
    password: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
        return Object.assign({},state,{
            email: action.payload,
        });
        default:
            return state;
    }
};

export default userReducer;