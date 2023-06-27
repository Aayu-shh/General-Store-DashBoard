const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./util/database');
const adminController = require('./controller/admin.js')

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.get('/items',adminController.getItems);

app.post('/addItem',adminController.addItem);

app.post('/editItem/:id',adminController.editItem);

app.listen(8080);

