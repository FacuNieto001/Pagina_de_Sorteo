const express = require('express');
const app = express();

// 1-  
app.use(express.urlencoded({extended:false}));
app.use(express.json())

// 2 -
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));

// 3 -
app.set('view engine', 'ejs');

// 4 -
const bcryptjs = require('bcryptjs');

// 5 -
const session = require('express-session');
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
    
}));

// 6 -
const connection = require('./database/db');


// 7 - Rutas
app.get('/', (req, res)=>{
    return res.render('home');
})






app.listen(3309, (req, res)=>{
    console.log("");
    console.log("-------------------------------------------");
    console.log("SERVER RUNNING IN http://localhost:3309");
});


// https://www.solumedia.com.ar/radios/8682/index.html pagina radio 