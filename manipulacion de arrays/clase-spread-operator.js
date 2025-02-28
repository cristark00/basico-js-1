// Spread = represent by ...
/*
El Spread Operator es una herramienta poderosa en JavaScript que te permite manipular arreglos y objetos de manera flexible y eficiente. Su representación se hace mediante tres puntos (...), y es utilizado en diversas acciones, como copiar arreglos, combinarlos, añadir elementos, o incluso, pasar parámetros a funciones. Su versatilidad lo ha convertido en un componente esencial en la programación moderna.

*/
//Copying an Array

const orignalArray =[1,2,3,4,5]
const copyOfArray = [...orignalArray]

//2. Combining Arrays

const array1 = [1,2,3,4]
const array2 = [5,6,7,8]
const combinedArray = [...array1, ...array2]

//3. Creating Arrays with Additional Elements
const baseArray = [1,2,3,4]
const arrayWithAdditionalElements = [...baseArray, 4,5,6]


//4. pass elements to functions
function sum (a,b,c){
    return a+b+c
}

const numbers = [1,2,3]
const result = sum(...numbers)

//5 Method of use
// allows an iterable such as an 
// array or a string to be expanded in
//into separte elements
const nameAl = 'Alejandro'
let letters = [...nameAl].join('-')
console.log(letters)