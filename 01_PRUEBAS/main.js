datos = [{
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
  

function charge(){
    var parTable = document.getElementById('participanTable')  
    var newParTableRow = parTable.insertRow(-1)
    for(let i = 0; i<datos.lenght; i++){
        for(let x=0; x<datos[i].lenght; x++){
            var newParTableCell = parTable.insertCell(x)
            newParTable.texcontent = datos[i][x];
        }
    }
}