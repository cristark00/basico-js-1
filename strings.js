//tipo de dato: strings
//lo ideal es usuar solo comillas o sencilas 
let string1 = 'Hola, mundo'
let string2 = "JavaScript es genial"
//concatenar: sumar strings con comillas invertidas
let string3 = `${string1} feliz :)`
let string4 = string1 + " " + string2

console.log(string1)
console.log(string2)
console.log(string3)
console.log(string4)

//.lenght: Para saber la longitud de esta frase
let frase = 'JavaScript es Extremadamente Genial'
//.lowercase: Para pasar todo a minusculas
console.log(frase.toLowerCase())
//.subString (index, index_final + 1 ) para cortar las frases
console.log(frase.substring(0, 3))