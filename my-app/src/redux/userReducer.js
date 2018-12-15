const initialState = {
    user: '',
    password: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return action.payload;
        case 'CREATE_USER':
            return action.payload;
            
        default:
            return state;
    }
};

export default userReducer;