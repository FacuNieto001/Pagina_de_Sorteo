datos = [['Ana', 'Bazán', '2298372384'], ['Franco', 'Toledo', '8748374'], ['Gonzalo', 'Luna', '333454678'], ['Alejandro', 'Vazán', '444987655']];

function charge(){
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



/*
datos2 = [{
    nombre: "a",
    apellido: "as",
    cargo: "ass"
    },
    {
    nombre: "q",
    apellido: "qw",
    cargo: "qww"
    },
    {
    nombre: "c",
    apellido: "cv",
    cargo: "cvv"
    },
    
    {
    nombre: "l",
    apellido: "lk",
    cargo: "lkk"
    }]
*/