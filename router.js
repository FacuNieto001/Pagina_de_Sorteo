const express = require('express')
const router = express.Router()

const connection = require('./database/db')

router.get('/', (req, res)=>{
    connection.query('SELECT * FROM alumnos', (error, results) =>{
        if(error){
            throw error;
        }
        else{
            res.render('SNHome', {results:results})
        }
    })
})

module.exports = router;