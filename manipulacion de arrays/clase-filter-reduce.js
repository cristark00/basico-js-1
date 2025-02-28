//.filter () = creates a new array by filtering out elements
/*
NO MODIFICAN EL ARRAY
 */




//segundo ejemplo

let numbersA = [1,2,3,4,5,6,7,8,9];
let evenNumbs = numbersA.filter(isEven);
console.log(evenNumbs)
function isEven(param1){
    return  param1 % 2 ===0;
}

//Reduce, reducir un array a un solo valor case 1

const numberReduce = [1,2,3,4,5]
const suma = numberReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(numberReduce)
console.log(suma)

//Reduce () = reduce the elements of an arry to. single value
//thies element always containg an accumulator
const prices = [5,7,,99,7,8,55,6]
const total = prices.reduce(sum);
console.log(total);

// accumulator is the previous element, element: is the next element
function sum(accumulator, element){
    return accumulator + element
}



const words = ['apple', 'banana', 'apple', 'banana', 'apple']
const wordFrecuency = words.reduce((accumulator,currentValue) =>{ 
    if(accumulator[currentValue])
    {
        accumulator[currentValue]++
    } else{
        accumulator[currentValue] = 1
    }
    return accumulator
},[])

console.log(wordFrecuency)