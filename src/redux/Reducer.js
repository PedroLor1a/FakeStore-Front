import { ALL_PRODUCTS } from "./actions-types";

const initialState = {
  allProducts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
