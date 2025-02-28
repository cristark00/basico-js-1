//Methods that iterate over an array
//Methdos that do not modifiy the original array (Inmutability)


//FIND()
const multipleOf5 =[5,10,15,20]
const firstNumberGreaterThan10 = multipleOf5.find(isGreater)

function isGreater(number){
    return number > 10
}
console.log(multipleOf5)
console.log(firstNumberGreaterThan10)


//FindIndex()

const randomNumbers = [6,33,55,13,76,41,61]
const indexNumebr = randomNumbers.findIndex(number => number>50)
console.log(randomNumbers)
console.log(indexNumebr)

//slice
//se puede usar numeros negativos para empezar de atras a adelante
//slice() exctracts a section of a string
//  and returns it as a new string
//  withoug modifying the original string

const  animals = ['ant', 'bison','camel','duck','elephant']
console.log(animals.slice(1,3))

let fullName= 'Cristian Alejandro'
let firstName
let lastName
console.log(fullName.slice(fullName.indexOf(" ") + 1));


//indexOf, consultar el indice dle string

const indexMethod = ['Alejandro','Maira','Guadalupe','Mai','Totoro','Luz']
console.log(indexMethod.indexOf('Totoro'))