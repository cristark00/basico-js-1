
//Funciones Vs Metodos
/*
console.log(typeOf blackFriday)

Capacidades que tienen las funciones al igual que otros elementos

*/

//1. Pasar funciones como argumentos  = callback

function a (){}
function b (a){}

function a(parametro){
    let val1 = parametro * 10;
    return val1;
    }

    function b(a){
        let val2 = a *100;
        return val2;
    }
    b(a(4));  4000
//Retornar funciones

function a(){
    function b(){
        return b
    }
}

//Asignar funciones a Variables
//nombre de la funcion desaparece (Expresion de funcion), por que la variable se encarga del nombre
const a = function(){

}

//Tener propiedades y Metodos
function a(){}
const obj = {}
//las funciones pueden tener metodos asociados
a.call(obj)

//Anidar Funciones (Nested Functions)


function a(){
    function b(){
        function c(){

        }
        c()
    }
    b()
}


//Es posible almacenar funciones en objetos?
//Metodo es una funcion asociada a un objeto en especifico
const rocket = {
 name: 'Falcon 9',
 launchMessage: function launchMessage(){
    console.log('🛰️')
 }   
}
rocket.launchMessage()