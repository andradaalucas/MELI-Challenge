require('dotenv').config();
const axios = require('axios');
const { response } = require('express');
//Guardo informacion importante en un archivo .env
const {GET_ALL_ITEMS, GET_ITEM_BY_ID, GET_CATEGORIES} = process.env;

const author = {
    name: "Lucas",
    lastname: "Andrada"
};

const getItemCategories = async(ids) => {
    //Recibo un arreglo con todos los ids (para no perder ninguna categoria)
        arrCategories = [];
        for(let i = 0; i < ids.length ; i++){
            const responseCategory = await axios.get(`${GET_CATEGORIES}${ids[i]}`);
            const categoryNames = responseCategory.data.path_from_root.map(el => el.name);
            arrCategories.push(categoryNames);
        }
        return arrCategories;
}



//Hago funcion get para traerme la info por id
const getItemById = async (id) =>{
    //Hago todos los pedidos por id
    const getItemDetails = await axios.get(`${GET_ITEM_BY_ID}${id}`);
    const getItemDescription = await axios.get(`${GET_ITEM_BY_ID}${id}/description`);
    //Guardo las respuestas de los pedidos
    const responseItem = getItemDetails.data;
    const responseDescription = getItemDescription.data;
    //Retorno la informacion
    return{
        author,
        item :{
            id : responseItem.id,
            title: responseItem.title,
            price: {
                currency : responseItem.currency_id,
                amount : responseItem.price,
                decimals : ""
            },
            picture : responseItem.pictures.map(el => el.url),
            condition : responseItem.condition,
            free_shipping : responseItem.shipping.free_shipping,
            sold_quantity : responseItem.sold_quantity,
            description : responseDescription.plain_text
        }
    };
};


//Hago funcion get para traerme la info que voy a mostrar en el home
const getAllItems = async ()  =>{
    const getItems = await axios.get(GET_ALL_ITEMS);
    const responseItems = getItems.data.results.map(el =>{
        return {
            id : el.id,
            title: el.title,
            price: {
                currency: el.prices.prices[0].currency_id,
                amount: el.prices.prices[0].amount,
                decimals:"", 
            },
            picture: el.thumbnail,
            condition: el.condition,
            free_shipping: el.shipping.free_shipping
        };
    });
    const arrId = getItems.data.results.map(el => el.category_id);
    const responseCategory = await getItemCategories(arrId);
    
    
    return allItems = {
        author,
        categories: responseCategory.flat(),
        items: responseItems
    };
};


module.exports = {
    getAllItems,
    getItemById,
};