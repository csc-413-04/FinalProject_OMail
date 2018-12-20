import {combineReducers} from 'redux';
import mailReducer from './mailReducer';
import mailEditReducer from './mailEditReducer';
import userReducer from './userReducer'
import composeEmailReducer from './composeEmailReducer'

//combines the various reducers that will be used in the project into one large JS Object
const rootReducers = combineReducers({
    EmailList: mailReducer,
    mailEditReducer,
    userReducer,
    composeEmailReducer
});

export default rootReducers;