import { RETRIEVE_PRODUCTS, ADD_TO_CART } from "../constants"
import { retrieveProducts} from "../repositories/ProductsRepository";

export const listProducts = () => {
    const products = retrieveProducts();

    return {
        type: RETRIEVE_PRODUCTS,
        payload: products
    }
}

export const addToCart = (product)=> {
    return {
      type: ADD_TO_CART,
      payload: product,
    };
  };