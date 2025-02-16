//Explicit Type Casting
const string = '1995'
const integer = parseInt(string)
console.log(integer)
console.log(typeof integer)


const stringDecimal = "3.24"
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)

const binary = "1010"
//convertir de binario a decimal
const decimal = parseInt(binary, 2)
console.log(decimal)
console.log(typeof decimal)


//Implicit Type Casting
const sum = '3' + 3
console.log(sum)
const sumWithBoolean = '3' + true
console.log(sumWithBoolean)

const sumWithNUmber = 2 + true
console.log(sumWithNUmber)

const stringValue = '20'
const numberValue = 10
const booleanValue = true
console.log('__________________')
console.log(stringValue + stringValue) // concateno
console.log(stringValue + numberValue)
console.log(stringValue + booleanValue)

console.log(numberValue + stringValue)
console.log(numberValue + numberValue)
console.log(numberValue + booleanValue)

console.log(booleanValue + stringValue)
console.log(booleanValue + numberValue)
console.log(booleanValue + booleanValue)