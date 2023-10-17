import { ALL_PRODUCTS } from "./actions-types";
import axios from "axios";

export const allProducts = () => {
  try {
    return async function (dispatch) {
      const { data } = await axios("http://localhost:3001/products");
      return dispatch({
        type: ALL_PRODUCTS,
        payload: data,
      });
    };
  } catch (error) {
    return { error: error.message };
  }
};
