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
    return res.render('SNHome');
})

/*
function charge(datos){
    var parTable = document.getElementById('participanTable')  
    for(let i = 0; i<datos.length; i++){
        var newParTableRow = parTable.insertRow(-1);
        for(let x=0; x<3; x++){
            var newParTableCell = newParTableRow.insertCell(x)
            datoFila = datos[i][x];
            newParTableCell.textContent = datoFila;
        }
    }
}

app.get('/', (req, res)=>{
    connection.query('SELECT * FROM alumnos', (error, results) =>{
        console.log(results)
        if(error){console.log("El error que devolvió SQL es: " + error);
            return;}

        else{
            datos = []
            for(let i = 0; i<results.length; i++){
                var IDA = results[i].IDA;
                var APE = results[i].apellido;
                var NOM = results[i].nombre;
                var DNI = results[i].DNI;

                console.log(IDA, APE, NOM, DNI);
                newArray = []
                newArray.push(IDA, APE, NOM, DNI);
                datos[i] = newArray;
            }
            console.log('-----------------------------------------\n', datos)
        }
    })
})

*/



app.listen(3309, (req, res)=>{
    console.log("");
    console.log("-------------------------------------------");
    console.log("SERVER RUNNING IN http://localhost:3309");
});


// https://www.solumedia.com.ar/radios/8682/index.html pagina radio 

/*
app.post('/auth', (req, res)=>{
    const user = req.body.usr;
    const pass = req.body.password;
    //let passwordHaash = await bcryptjs.hash(pass, 8);
        connection.query('SELECT * FROM USERS WHERE name_user = ?', [user], (error, results) =>{
            if(error){
                console.log("El error que devolvió SQL es: " + error);
                return;
            }

            if (results[0] === undefined){
                return res.render('login', {
                    alert: true,
                    alertTitle: "Error",
                    alertMessage: "Usuario y/o contraseña incorrectos",
                    alertIcon: "error",
                    showConfirmButton: true,
                    timer: 1200,
                    ruta: ''
                })
                return;
            }
            else{
                if (pass != results[0].passwor) {
                    return res.render('login', {
                        alert: true,
                        alertTitle: "Error",
                        alertMessage: "Usuario y/o contraseña incorrectos",
                        alertIcon: "error",
                        showConfirmButton: true,
                        timer: 1200,
                        ruta: ''
                    });
                }
                else {
                    req.session.name = results[0].name_user;
                    if (results[0].privilege == 'student') {
                        req.session.loggedin1 = true;
                        return res.render('login', {
                            alert: true,
                            alertTitle: "Conexión exitosa",
                            alertMessage: "¡Login correcto!",
                            alertIcon: "succes",
                            showConfirmButton: false,
                            timer: 900,
                            ruta: ''
                        });
                    }
                    if (results[0].privilege == 'teacher') {
                        req.session.loggedin2 = true;
                        return res.render('login', {
                            alert: true,
                            alertTitle: "Conexión exitosa",
                            alertMessage: "¡Login correcto!",
                            alertIcon: "succes",
                            showConfirmButton: false,
                            timer: 900,
                            ruta: 'Teachers'
                        });
                    }
                    if (results[0].privilege == 'admin') {
                        req.session.loggedin3 = true;
                        return res.render('login', {
                            alert: true,
                            alertTitle: "Conexión exitosa",
                            alertMessage: "¡Login correcto!",
                            alertIcon: "succes",
                            showConfirmButton: false,
                            timer: 900,
                            ruta: 'land'
                        });
                    }

                }
            }
        })
});
*/