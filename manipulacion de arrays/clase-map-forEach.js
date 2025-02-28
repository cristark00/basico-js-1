//Methods that iterate over an array
// Methods that DO NOT modify the original array Immutability

//map

const numbers = [1,2,3,4,5]
const squareNumbers = numbers.map(num => num *num)
console.log (numbers)
console.log(squareNumbers)

//for each: iterar sobre cada elemento de un arrary y ejectua una funcion proporcionada para cada elemento, sin crear un nuevo array

//forEach
const colors = ['pink','blue','green']
const iteratedColors = colors.forEach(color => console.log(color))
console.log(iteratedColors)
console.log(colors)


const fruits = ['apple', 'banana', 'orange'];

fruits.forEach(function(fruit, index) {
    console.log(index + ': ' + fruit);
});

//Fahrenheit to Celsius conversion
// C = 5/9 * (f-32)

const temperaturesFahrenheit = [32, 68, 95, 212]
const temperaturesCelsius = temperaturesFahrenheit.map(farenheit  => (5/9) * (farenheit -32))
console.log('Temperatures in Fahrenheit: ',  temperaturesFahrenheit)
console.log('Temperatures in Celsius: ', temperaturesCelsius)

//Ejercicio Sum of elements in an arra

const numbersSum = [1,2,3,4,5,6];
let sumar = 0;
numbersSum.forEach(x => { sumar+=x})
console.log(sumar)

