import {
    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILED
} from './actionTypes';

import {
    fetchProducts as fetchProductsApi
} from '../api';

export const fetchProducts = () => async dispatch => {
    dispatch({
        type: FETCH_PRODUCTS_START
    });

    try {
        const products = await fetchProductsApi();
        dispatch({
            type: FETCH_PRODUCTS_SUCCESS,
            payload: products
        });
    } catch (err) {
        dispatch({
            type: FETCH_PRODUCTS_FAILED,
            payload: err,
            error: true
        })
    }
}