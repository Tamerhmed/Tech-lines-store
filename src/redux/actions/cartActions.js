import axios from 'axios';
import { setError, setLoading, cartItemAdd } from '../slices/cart';


export const addCartItem = (id, qty)=> {
    return async(dispatch)=> {
        dispatch(setLoading(true));
        try {
            const {data} = await axios.get(`/api/products/${id}`);
            const itemToAdd = {
                id: data._id,
                name:data.name,
                image:data.image,
                price: data.price,
                stock: data.stock,
                qty
            }
            dispatch(cartItemAdd(itemToAdd))
        } catch (error) {
            setError(error.response.data.message);
            console.log(error.response.data.message);
        }
    }
}