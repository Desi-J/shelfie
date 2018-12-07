const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotnev').config();

const app = express();
app.use(bodyParser.json);
massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database)
}).catch (error => console.log("error app SET",error));

const PORT = 4000;
app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)});