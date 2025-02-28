//How to create an Arrar ?

//1 New Array () or Array()

const fruits = Array('apple','banana','orange');
console.log(fruits)

const numbers = Array(1,2,3,4,5)
console.log(numbers) //

// 2. Array Literal syntax

const oneNumber = [4]
console.log(oneNumber)


//funciona cuando queremos inicializar un programa y queremos ejectuar un programa

const emptyArray = []
console.log(emptyArray)

const sports =['soccer', 'tennis', 'rugby']
console.log(sports)

//arrays mixtos
const recipeIngredients = [
    'flour',
    true,
    2,
    {
        ingredient: 'millk', quatity: '1 cup'
    },
    false
]

console.log(recipeIngredients)

// Accessing array elements
const firstFruit = fruits[0]
console.log(firstFruit)

/*
Array() y new Array(): Tienen un comportamiento especial cuando se les pasa un único número como argumento, creando un array vacío con la longitud especificada en lugar de un array con un solo elemento. Ambos métodos son prácticamente intercambiables.
[] (Literal de Array): Es la forma más simple y directa de crear un array, sin el comportamiento especial de los otros dos métodos. Siempre crea un array con los elementos especificados, lo que lo hace más confiable en situaciones comunes.
*/


//Mutabilidad e inmutabilidad de Arrays
//Arrays son mutables, es decir, se pueden modificar después de su creación.
const fruits = Array('apple','banana','orange');
fruits.push('watermelon')
console.log(fruits)

//Inmutabilidad

//juntar un array con otro array
const newFruits = fruits.concat('grape','kiwi')
console.log(newFruits)
console.log(fruits)

//checking arrays with array.isArrary()

const isArray = Array.isArray(fruits)
console.log(isArray) // imprime un booleano

//Practica: suma de todos los elementos de un array
const numbersArray = [1,2,3,4,5,6]
let sum = 0
let sum1 = 0
for (let i =0; i < numbersArray.length; i++){
    sum1 = sum + numbersArray[i]
    sum += numbersArray[i]
}
console.log(sum)
console.log(sum1)

/*
Métodos mutables: copyWithin, fill, pop, push, reverse, shift, sort, splice, unshift.
Mutabilidad

Definición: Un objeto mutable es aquel que puede ser modificado después de su creación. Esto significa que se pueden alterar sus elementos, agregar nuevos elementos o eliminar elementos existentes sin tener que crear un nuevo objeto.

Métodos no mutables: slice, concat, toReversed, slice, toSorted, toSoliced.
Inmutabilidad

Definición: Un objeto inmutable es aquel que no se puede modificar después de haber sido creado. Cuando deseas cambiar el contenido, debes crear un nuevo objeto con las modificaciones deseadas.
 */


//MODIFICACION BASICA DEL FINAL CON PUSH(), POP()

const countries = ['USA','UK','Canda']
const newCountries = countries.push('Germany','Australia')

console.log(countries)
console.log(newCountries) // despliega el .length del array

//pop elimina el ultimo elemento del array y devuelve el val
const removedCountry = countries.pop()
console.log(countries)
console.log(newCountries) 

//shift
const countries = ['USA','UK','Canada']
const addCountryToBegin = countries.reverse('Spain')
console.log(countries)
console.log(addCountryToBegin) //despliega el valor que removera


/*
push()Añade uno o más elementos al final del array.
pop() - Elimina y devuelve el último elemento del array.
shift() - Elimina y devuelve el primer elemento del array.
unshift() - Añade uno o más elementos al principio del array.
splice() - Cambia el contenido de un array eliminando o añadiendo elementos.
slice() - Devuelve una copia de una parte del array.
concat() - Combina dos o más arrays y devuelve un nuevo array.
indexOf() - Devuelve el primer índice en el que se encuentra un elemento.
lastIndexOf()- Devuelve el último índice en el que se encuentra un elemento.
forEach()Ejecuta una función para cada elemento del array.
map()- Crea un nuevo array con los resultados de aplicar una función a cada elemento.
filter()- Crea un nuevo array con todos los elementos que cumplan una condición.
reduce()- Reduce todos los elementos del array a un solo valor (ej. suma de todos los números).
some()- Comprueba si al menos un elemento del array cumple con una condición.
every()—Comprueba si todos los elementos del array cumplen con una condición.
find()—Devuelve el primer elemento que cumple con una condición.
findIndex()Devuelve el índice del primer elemento que cumple con una condición.
sort()- Ordena los elementos del array.
reverse()- Invierte el orden de los elementos del array.
join()—Une todos los elementos del array en una cadena de texto.
includes()- Comprueba si un array contiene un elemento determinado.
flat()- Aplana un array de arrays en un solo array.
flatMap()- Mapea cada elemento y aplana el resultado en un nuevo array.
fill()- Llena todos los elementos del array con un valor estático.


*/