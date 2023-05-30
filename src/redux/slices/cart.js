import { createSlice } from '@reduxjs/toolkit';


const calculateSubtotal = (cartState)=> {
    let result = 0;
    cartState.map((item)=> {
        return result += item.qty * item.price; 
    })
    return Number(result).toFixed(2)
}

const updateLocalStorage = (cart)=> {
    localStorage.setItem('cartItems', JSON.stringify(cart));
    localStorage.setItem('subtotal', JSON.stringify(calculateSubtotal(cart)));

}

const initialState = {
  loading:false,
  error: null,
  cart: JSON.parse(localStorage.getItem('cartItems')) ?? [],
  expressShipping: false,
  subtotal:localStorage.getItem('cartItems') ? calculateSubtotal(JSON.parse(localStorage.getItem('cartItems'))) : 0,
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

           state.loading = false;
           state.error= null;
           updateLocalStorage(state.cart);
           state.subtotal = calculateSubtotal(state.cart);
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
