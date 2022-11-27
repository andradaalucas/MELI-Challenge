require("dotenv").config();
const axios = require("axios");
//Guardo informacion sensible en un archivo .env
const { GET_ALL_ITEMS, GET_ITEM_BY_ID, GET_CATEGORIES, GET_ITEM_BY_SEARCH } =
  process.env;
//Esta funcion es para separar el precio cada 3 cifras
const { separador } = require("./auxiliar.js");

const author = {
  name: "Lucas",
  lastname: "Andrada",
};

const getItemCategories = async (id) => {
  const responseCategory = await axios.get(`${GET_CATEGORIES}${id}`);
  const categoryNames = responseCategory.data.path_from_root.map(
    (el) => el.name
  );
  return categoryNames;
};

//Hago funcion get para traerme la info por id
const getItemById = async (id) => {
  //Hago todos los pedidos por id
  const getItemDetails = await axios.get(`${GET_ITEM_BY_ID}${id}`);
  const getItemDescription = await axios.get(
    `${GET_ITEM_BY_ID}${id}/description`
  );
  //Guardo las respuestas de los pedidos
  const responseItem = getItemDetails.data;
  const responseDescription = getItemDescription.data;
  //Conseguimos la categoria por id
  const categoryById = getItemDetails.data.category_id;
  const responseCategory = await getItemCategories(categoryById);
  //Retorno la informacion
  return {
    author,
    category: responseCategory,
    item: {
      id: responseItem.id,
      title: responseItem.title,
      price: {
        currency: responseItem.currency_id,
        amount: separador(responseItem.price),
        decimals: null,
      },
      picture: responseItem.pictures.map((el) => el.url),
      condition: responseItem.condition,
      free_shipping: responseItem.shipping.free_shipping,
      sold_quantity: responseItem.sold_quantity,
      description: responseDescription.plain_text,
    },
  };
};

//Hago funcion get para traerme la info que voy a mostrar en el home
const getAllItems = async (name) => {
  if (name) {
    let nameQuery = name.split(" ").join("%20");
    const getItemBySearch = await axios.get(
      `${GET_ITEM_BY_SEARCH}${nameQuery}&limit=4`
    );
    const responseItemBySearch = getItemBySearch.data.results.map((el) => {
      return {
        id: el.id,
        title: el.title,
        price: {
          currency: el.prices.prices[0].currency_id,
          amount: separador(el.prices.prices[0].amount),
          decimals: null,
        },
        picture: el.thumbnail,
        condition: el.condition,
        free_shipping: el.shipping.free_shipping,
      };
    });
    //El producto que este en la primera posicion va a contener las categorias de la busqueda
    const idName = getItemBySearch.data.results[0].category_id;
    const responseCategory = await getItemCategories(idName);
    return {
      author,
      categories: responseCategory,
      items: responseItemBySearch,
    };
  }
  const getItems = await axios.get(GET_ALL_ITEMS);
  const responseItems = getItems.data.results.map((el) => {
    return {
      id: el.id,
      title: el.title,
      price: {
        currency: el.prices.prices[0].currency_id,
        amount: separador(el.prices.prices[0].amount),
        decimals: null,
      },
      picture: el.thumbnail,
      condition: el.condition,
      free_shipping: el.shipping.free_shipping,
    };
  });
  const idItemDefault = getItems.data.results[0].category_id;
  const responseCategoryDefault = await getItemCategories(idItemDefault);
  return (allItems = {
    author,
    categories: responseCategoryDefault,
    items: responseItems,
  });
};

module.exports = {
  getAllItems,
  getItemById,
};
