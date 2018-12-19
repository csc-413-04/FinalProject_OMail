const initialState = {
    currentEmail: null,
    username: null,
    reply: false
};


const composeEmailReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COMPOSE_EMAIL':
            return Object.assign({},state,{
                reply:true
            });

        default:
            return state;
    }
};

export default composeEmailReducer;