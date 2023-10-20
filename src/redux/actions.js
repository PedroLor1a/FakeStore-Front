import {
  ALL_PRODUCTS,
  FILTER,
  CLEAN_FILTERS,
  CATEGORY,
  PRODUCT_ID,
} from "./actions-types";
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

export const filterProducts = (category) => {
  try {
    return async function (dispatch) {
      const { data } = await axios(`http://localhost:3001/filter/${category}`);
      return dispatch({
        type: FILTER,
        payload: data,
      });
    };
  } catch (error) {
    return { error: error.message };
  }
};

export const cleanFilters = () => {
  return { type: CLEAN_FILTERS };
};

export const category = () => {
  try {
    return async function (dispatch) {
      const { data } = await axios("http://localhost:3001/category");
      return dispatch({
        type: CATEGORY,
        payload: data,
      });
    };
  } catch (error) {
    return { error: error.message };
  }
};

export const findById = (id) => {
  try {
    return async function (dispatch) {
      const { data } = await axios(`http://localhost:3001/products/${id}`);
      return dispatch({
        type: PRODUCT_ID,
        payload: data,
      });
    };
  } catch (error) {
    return { error: error.message };
  }
};
