import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading:false,
  error: null,
  products: []
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setLoading: (state)=> {
            state.loading = true;
        },
        setProducts: (state, {payload})=> {
            state.loading = false;
            state.error = null;
            state.products = payload;
        },
        setError: (state, {payload})=> {
            state.error = payload;
            state.loading = false;
        }
    }
});


export const {setLoading, setProducts, setError} = productsSlice.actions;

export const productsReducer = productsSlice.reducer;

export const productsSelector = (state)=> state.products;
