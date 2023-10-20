import {
  ALL_PRODUCTS,
  CATEGORY,
  CLEAN_FILTERS,
  FILTER,
  PRODUCT_ID,
} from "./actions-types";

const initialState = {
  allProducts: [],
  copyallAlcancias: [],
  category: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        copyAllAlcancias: action.payload,
      };
    case FILTER:
      return {
        ...state,
        allProducts: action.payload,
      };
    case CLEAN_FILTERS:
      return {
        ...state,
        allProducts: state.copyallAlcancias,
      };
    case CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case PRODUCT_ID:
      return {
        ...state,
        allProducts: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
