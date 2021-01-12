import * as R from 'ramda';

import {
    FETCH_PRODUCTS_SUCCESS
} from '../actions/actionTypes';

const initialState = {
};

export default (state = initialState, {type, payload}) => {
    switch(type) {
        case FETCH_PRODUCTS_SUCCESS:
            return R.merge(state, payload);
        default:
            return state;
    }
}