// //FOR
// for (variable; condicion; incremento)
// { codigo a ejecutar}
//es una estructura de control que se utiliza para ejecutar un bloque de código repetidamente, generalmente con un contador que se incrementa o decrementa en cada iteración. Es uno de los bucles más comunes y versátiles en la programación.

 let list = ['eat', 'sleep','code', 'repeat'];

 for (let i=0; i< list.length; i++){
console.log(list[i]);
 }

 // FOR OF: POR CADA ELEMENTO DE CIERTO OBJETO
// se utiliza en objetos iterabless como: Arrarys y strings que terminan siendo una lista

// for(variable of objeto){
//     //codigo a ejecutar
// }

let canasta = ['manzana', 'pera', 'fresa', 'limon', 'uva'];

for (let fruta of canasta){
console.log(fruta);
}

// FOR IN: ITERAR EN OBJETOS ENUMERABLES
/*
Objetos: estructura de datos distinta a los arrays, tienen propiedades con un valor
For In sirve para iterar cada propiedad enumerable
arrays: solo tiene elementos que generan una lista

for (variable in objeto)
{codigo a ejecutar}
 */

const listaDeCompras ={
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1
}

for (fruta in listaDeCompras){
    console.log(fruta);
}

// para iterar cada propiedad del objeto 
//fruta se vuelve en una variable numerica y lo hace como que fuera un array, fruta: regresa un indice
for (fruta in listaDeCompras){
    console.log(`${fruta} : ${listaDeCompras[fruta]}`);

}

//OBJETOS ITERABLES: ARRAYS Y STRINGS: FOROF
//OBJETOS ENUMERABLES: Objetos : FORIN