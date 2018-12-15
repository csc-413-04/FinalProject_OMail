import {combineReducers} from 'redux';
import MailReducer from './mailReducer';
import mailEditReducer from './mailEditReducer';
import userReducer from './userReducer'

//combines the various reducers that will be used in the project into one large JS Object
const rootReducers = combineReducers({
    EmailList: MailReducer,
    login: userReducer
});

export default rootReducers;