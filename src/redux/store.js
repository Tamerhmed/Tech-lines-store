import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { productsReducer } from './slices/products';
import { cartReducer } from './slices/cart';

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
})

export const store = configureStore({
    reducer: rootReducer
    
});


export default store;

