import {combineReducers} from 'redux';
import MailReducer from './mailReducer';
import selectedMail from './selectedMailReducer';
import mailPreviewList from '../mailPreviewList';
import Mail, {res} from '../mail';

//combines the various reducers that will be used in the project into one large JS Object
const rootReducers = combineReducers({
    EmailList: MailReducer,
    DataEmail: res.data
    //selectedMail: selectedMail
});

export default rootReducers;