import {combineReducers} from 'redux';
import MailReducer from './mailReducer';
import selectedMail from './selectedMailReducer';
import {res} from '../mail'
import mailPreviewList from '../mailPreviewList';

//combines the various reducers that will be used in the project into one large JS Object
const rootReducers = combineReducers({
    EmailList: MailReducer,
    DataEmail: res.data
    //selectedMail: selectedMail
});

export default rootReducers;