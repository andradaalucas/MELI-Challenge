import {GET_PRODUCTS_DEFAULT, GET_PRODUCT_BY_SEARCH, GET_PRODUCT_DETAILS, CLEAR, CLEAR_HOME} from '../action';

const initialState = {
    productsDefault : [],
    productsSearch :[],
    productDetail : {},
};


function rootReducer (state = initialState, action) {
    switch (action.type) {

        case GET_PRODUCTS_DEFAULT :
            return {
                ...state,
                productsDefault: action.payload
            };
        case GET_PRODUCT_BY_SEARCH :
            return {
                ...state,
                productsDefault: action.payload
            };
        case GET_PRODUCT_DETAILS: 
            return{
                ...state,
                productDetail: action.payload
            }    
        case CLEAR :
            return{
                ...state,
                productDetail: {}
            }
        case CLEAR_HOME :
            return {
                ...state,
                productsDefault: []
            }
        default:
            return state;
    }};


export default rootReducer;