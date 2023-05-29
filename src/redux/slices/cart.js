import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading:false,
  error: null,
  cart: [],
  expressShipping: false,
  subTotal:0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setLoading: (state)=> {
            state.loading = true;
        },
        cartItemAdd: (state, {payload})=> {
           const existingItem = state.cart.find((item)=> item.id === payload.id);

           if(existingItem) {
            state.cart = state.cart.map((item)=>{
                if(item.id === existingItem.id) {
                    return payload;
                } else {
                    return item
                }
            })
           } else {
            state.cart = [...state.cart, payload];
           }

           setLoading(false);
           setError(null);
        },
        setError: (state, {payload})=> {
            state.error = payload;
            state.loading = false;
        }
    }
});


export const {setLoading, cartItemAdd, setError} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

export const cartSelector = (state)=> state.cart;
