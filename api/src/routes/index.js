'use strict'
const { Router } = require('express');
const router = Router();
const {getAllItems, getItemById} = require('../controllers/index');


router.get("/api/items", async(req,res) =>{
    const search = req.query.search;
    const allItems = await getAllItems();
    const itemSearchItem = await getAllItems(search);
    if(search){
        try{
            res.status(200).send(itemSearchItem);
        }
        catch(error){
            res.send(`Este es el error de la busqueda por query: ${error.message}`);
        }
    } else{
        try{
            res.status(200).send(allItems);
        }
        catch(error){
            res.status(400).send(`Este es el error en la ruta de todos los items: ${error.message}`);
        }
    }
});


router.get("/api/item/:id", async (req, res) =>{
    const id = req.params.id;
    const itemsById = await getItemById(id);
    try{
        res.status(200).send(itemsById);
    }
    catch(e){
        res.status(400).send(`Este es el error en la ruta por id: ${error.message}`);
    }
});


module.exports = router;