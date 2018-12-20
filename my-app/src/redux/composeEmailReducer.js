const initialState = {
    currentEmail: false,
    username: null,
    reply: false,

};


const composeEmailReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COMPOSE_EMAIL':
            return Object.assign({},state,{
                reply : true
            });
        case 'CLOSE_COMPOSE':
            return Object.assign({},state,{
                reply : false
            });

        default:
            return state;
    }
};

export default composeEmailReducer;