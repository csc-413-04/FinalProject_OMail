const initialState = {
    test: 'test value',
    messages: ['a demo message'],
    currentEmail: 'test value'
};

const mailEditReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EMAIL_SELECTED':
            return Object.assign({},state,{
                currentEmail: action.payload,
            });
        default:
            return state;
    }
};

export default mailEditReducer;