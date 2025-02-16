//1. tipo Entero y decimal
const entero = 42
const decimal = 42.42
console.log(typeof entero, typeof decimal)

//2. Notacion Cientifica
const cientifica = 42e-2
console.log(cientifica)

//3. Infinitios y NaN
const infinito = Infinity
const NotaNumber = NaN

//4. operaciones aritmeticas
const suma = 42 + 42
const resta = 42 - 42
const multiplicacion = 42 * 42
const division = 42 / 42
console.log(suma, resta, multiplicacion, division)

//4. Modulo y Exponenciacion
//modulo se conoce con %: sirve para saber si un numero es multiplo de otro
const modulo = 42 % 42
console.log(modulo)
//exponenciacion se conoce con **: sirve para elevar un numero a una potencia
const exponenciacion = 42 ** 2
console.log(exponenciacion)

//precision
const resultad = 0.1 + 0.2
console.log(resultad)
console.log(resultad.toFixed(1))
//=== es una comprobacion a nivel de numero y tipo


//---------------> MATH
//raiz cuadrada
const raizCuadrada = Math.sqrt(17)
//valor absoluto
const valorAbsoluto = Math.abs(-17)
//numero aleatorio
const aleatorio = Math.random()
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)