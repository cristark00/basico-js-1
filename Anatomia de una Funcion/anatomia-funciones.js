/*
Funciones: fragmentos d ecodigo que nos permitiran utilizar funcionalidades genericas
para poder usarlas una y otra vez
 */

function blackFriday(precio, descuento){
    let precioFinal = precio - (precio * descuento / 100);
    return precioFinal;
}

const originalPrice = 100;
const discountPercentage = 20;
const finalPrice = blackFriday(originalPrice, discountPercentage);
console.log(finalPrice);

function workload (llamadas, time){
    let exception = 10
    let llamadasTotal = llamadas*10;
    let sumaTotal = (llamadasTotal + time)/60;
    return sumaTotal
}
