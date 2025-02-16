// if 

let nombre = "Alejandro"
if (nombre === "Alejandro"){
    console.log("Hola Alejandro")
}


const varObject = "ipad"
if (varObject.length > 4){
    console.log("hay mas de 4 letras")}
else{
    console.log("Tiene 4 letras")
}

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/floor


function practicas(parametro){
    const numeroSecreto = Math.floor(Math.random() * 10 +1);
const numeroJugador = parseInt(prompt("Adivina el numero secreto entre el 1 a 10"));
console.log(`Este es el numero con el que juegas ${numeroJugador}`);

if (numeroJugador == numeroSecreto){
    console.log("Has ganado adivinaste el numero secreto");
} else{
    console.log (`Lo siento no ganaste el numero rando es: ${numeroSecreto} y tu numero es ${numeroJugador}`)
}
}

//SWITCH
/*
Similar en la logica de if, else if  si la validacion se cumple va a entrar en un codigo en especifico.
 */

// switch (expresion){
//     case valor1: 
//     //codigo a ejecutar
//     break; // rompe el ciclo
//     case valor2:
//     //codigo a ejecutar
//     break;//rompre el ciclo
//     default
// }

let expersion = 'papayas';
switch (expersion) {
    case 'naranjas':
    console.log('Las naranjas cuestan Q10.00');
    break;
    case 'manzanas':
    console.log('Las manzanas cuestan Q5.00');
    break;
    case 'papayas':
    console.log('Las papayas cuestan Q7.00');
    break;
}

function definicionCurso(){
    let fruta = prompt('Ingresa la fruta que quieras').toLowerCase();
switch (fruta) {
    case 'uvas':
    case 'naranjas':
    console.log('Las naranjas cuestan Q10.00');
    break;
    case 'manzanas':
    console.log('Las manzanas cuestan Q5.00');
    break;
    case 'papayas':
    console.log('Las papayas cuestan Q7.00');
    break;
    default:
    console.log('No tenemos esa fruta en stock');
}
}

