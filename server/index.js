const controller = require("./controller")
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

console.log('Hi! ^_^')

const app = express();
app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING).then(database => {
    console.log('db', database)
    app.set('DB:', database)
}).catch (error => console.log("error app SET",error));


app.post('/api/inventory', controller.createItem);
app.get('/api/inventory', controller. readInventory );
app.put('/api/inventory:id', controller.updateInventory);
app.delete('/api/inventory:id', controller.deleteItem);

const PORT = 4000;
app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)});