import {createStore} from 'redux';
import laptopReducer from './Reducers/laptopReducer';

const store = createStore(laptopReducer)

export default store