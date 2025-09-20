const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// Crear una api con la librería express
const api = express();

//Configuraciones
// La api ocupa un puerto así que especificamos uno, puede ser el que sean en este caso el 3000
api.set('port', process.env.PORT || 4000);
api.use(cors({ origin: "*" }));
api.use(bodyParser.json());

// ======== AQUI ABAJO VAN LAS RUTAS DE TU API ===============

/*
1. crear una ruta valida

2. crear una respuesta

3. devolver la respuesta al usuario
*/


//1 
//crear http://localhost:4000/
api.get('/', function(peticion, respuesta)
{
    //paso 2
    var datos = {'mensaje': 'esta es mi primera aplicacion en node'};

    //paso 3
    respuesta.json(datos);

});



//crear http://localhost:4000/circulo
api.get('/circulo', function(peticion, respuesta)
{
    var radio = 10;
    var pi = 3.1415;
    var area = pi * (radio * radio);

    var datos = {
        'status': 200,
        'mensaje': 'datos obtenidos con exito',
        'datos': `El áreaa del círculo es ${area}`
    }

    respuesta.json(datos);
})


//ruta de calcule el VOLUMEN de una piramide de base cuadrangular
//(largo de la base * ancho de la base) * altura / 2 
api.get('/piramide', function(peticion, respuesta)
{
    var ancho = 20;
    var largo = 30;
    var base = ancho * largo;
    var altura = 20;
    var area = (base * altura)/2;

    var datos ={
        'status': 200,
        'mensaje': 'datos obtenidos con exito',
        'datos': `el area de la piramide es ${area}`
    }


    respuesta.json(datos);
});




//ruta de calcule el volumen esfera truncada
//((4/3) * pi * radio * radio * radio)/2  
 
api.get('/circulo_truncao', function(peticion, respuesta)
{
    var pi = 3.1415;
    var radio = 30;
    var corte = 3; 

    var circulo = (pi * ((radio*2)*(radio*2))*(3*radio-(radio*2)))/3
    
    
    var datos ={
        'status': 200,
        'mensaje': 'datos obtenidos con exito',
        'datos': `el volumen del circulo es ${circulo}`
    }


    respuesta.json(datos);


});




//ruta que calcule aguinaldo de un empleado
//aguinaldo = salario diario * 15 * (dias trabajados/365)

api.get('/aguinaldo', function(peticion, respuesta)
{
    var salario_diario = 15000;
    var dias_trabajados = 30;
    var calculo = salario_diario * 15 * (dias_trabajados/365);
    
    var datos ={
        'status': 200,
        'mensaje': 'datos obtenidos con exito',
        'datos': `el aguinaldo del empleado es ${calculo}`
    }


    respuesta.json(datos);
});





// ===========================================================



//Iniciar la API
api.listen(api.get('port'),()=>{
    console.log("API funcionando correctamente");
});