import {combineReducers} from 'redux';
import mailReducer from './mailReducer';
import selectedMail from './selectedMailReducer';
import mailEditReducer from './mailEditReducer';
import mailPreviewList from '../mailPreviewList';

//combines the various reducers that will be used in the project into one large JS Object
const rootReducers = combineReducers({
    EmailList: mailReducer,
    mailEditReducer
});

export default rootReducers;