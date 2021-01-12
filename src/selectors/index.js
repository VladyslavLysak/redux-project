import * as R from 'ramda';

export const getProducts = state => R.values(state.Products)