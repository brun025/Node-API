'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Conecta ao banco
mongoose.connect('mongodb+srv://bruno:Felipe25@0@cluster0-zo3no.azure.mongodb.net/node', { 
        useNewUrlParser: true
    }, function(err, db) {

    }
);

// Carrega os Models
const Product = require('./models/product');

//Carrega as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;