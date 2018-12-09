import {createStore} from 'redux';
import rootReducer from './rootReducer';

//creates the redux store from all of the reducers that are referenced in the rootReducer
const store = createStore(rootReducer);

export default store;