import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import Products from './Products';



export default history => combineReducers({
    Products,
    router: connectRouter(history)
});