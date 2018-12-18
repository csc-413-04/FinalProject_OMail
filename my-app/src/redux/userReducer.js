const initialState = {
    email: null,
    password: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return action.payload;
        default:
            return state;
    }
};

export default userReducer;