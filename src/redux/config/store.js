import { createStore, combineReducers } from "redux";

import productsReducers from '../products/reducers/index';

const store = createStore(
    combineReducers({
        products: productsReducers
    })
)

export default store;