import axios from "axios";
export const GET_PRODUCTS_DEFAULT = "GET_PRODUCTS_DEFAULT";
export const GET_PRODUCT_DETAILS = "GET_PRODUCT_DETAILS";
export const GET_PRODUCT_BY_SEARCH = "GET_PRODUCT_BY_SEARCH";
export const CLEAR = "CLEAR"
export const CLEAR_HOME = "CLEAR_HOME"

//Hago los pedidos necesarios a las rutas del back


export function getProductsDefult () {
    return async function(dispatch){
        try{
           const productsDefault = await axios.get(process.env.REACT_APP_GET_ITEMS_DEFAULT)
           return dispatch({
            type:GET_PRODUCTS_DEFAULT,
            payload : productsDefault.data
           })
        }
        catch(error){
            return error
        };
    };
};

export function getProductsBySearch(search){
    return async function(dispatch){
        try{
            const productsBySearch = await axios.get(`${process.env.REACT_APP_GET_ITEMS_BY_SEARCH}${search}`)
            return dispatch({
                type : GET_PRODUCT_BY_SEARCH,
                payload : productsBySearch.data
            })
        }
        catch(error){
            return error
        };
    };
};

export function getProductDetails(id){

    return async function (dispatch){
        try{
            const productDetails = await axios.get(`${process.env.REACT_APP_GET_PRODUCT_DETAILS}${id}`)
            return dispatch({
                type : GET_PRODUCT_DETAILS,
                payload : productDetails.data
            })
        }
        catch(error){
            return error
        };
    };
};