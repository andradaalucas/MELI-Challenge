import {
  GET_PRODUCTS_DEFAULT,
  GET_PRODUCT_BY_SEARCH,
  GET_PRODUCT_DETAILS,
} from "../action";

//Inicio los estados que voy a usar
const initialState = {
  productsDefault: [],
  productsSearch: [],
  productDetail: {},
};

//Seteo los estados con la informacion que voy usar en cada caso
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_DEFAULT:
      return {
        ...state,
        productsDefault: action.payload,
      };
    case GET_PRODUCT_BY_SEARCH:
      return {
        ...state,
        productsSearch: action.payload,
        productsDefault: action.payload,
      };
    case GET_PRODUCT_DETAILS:
      return {
        ...state,
        productDetail: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
