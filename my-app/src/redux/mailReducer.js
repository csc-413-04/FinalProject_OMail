const initialState = [];

const mailReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Email_Import':
            return action.payload;
        default:
            return state;
    }
};

export default mailReducer;