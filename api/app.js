'use strict'
const express = require('express');
const {getAllItems, getItemById} = require('./src/controllers');
const app = express();


app.listen(3001,()=>
console.log("Server running from app"));



app.get("/api/items/", async(req,res) =>{
    const allItems = await getAllItems()
    try{
        res.status(200).send(allItems)
    }
    catch(error){
        res.status(400).send(`Este es el error en la ruta de todos los items: ${error.message}`)
    }
});


app.get("/api/item/:id", async (req, res) =>{
    const id = req.params.id;
    const itemsById = await getItemById(id);
    try{
        res.status(200).send(itemsById);
    }
    catch(e){
        res.status(400).send(`Este es el error en la ruta por id: ${error.message}`);
    }
})
