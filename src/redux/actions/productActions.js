import axios from 'axios';
import { setLoading, setProducts, setError } from '../slices/products';


export const getProducts = ()=> {
    return async(dispatch)=> {
        dispatch(setLoading(true));
        try {
            const {data} = await axios.get('/api/products');
            console.log(data);
            dispatch(setProducts(data));
        } catch (error) {
            console.log(error.response.data.message);
            dispatch(setError(error.response.data.message))
        }
    }
}