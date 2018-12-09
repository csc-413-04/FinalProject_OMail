import {combineReducers} from 'redux';
import MailReducer from './mailReducer'

//combines the various reducers that will be used in the project into one large JS Object
const rootReducers = combineReducers({
    EmailList: MailReducer
});

export default rootReducers;