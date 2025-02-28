/*
Closure
Funcion que tiene accesso a variables de un ambito eterno, inclsuo despues de que esa funcion haya termiando de ejecutarse

Ambito Lexico: cada vez que se declara una funcion, crea su propio ambito lexico, y puede acceder a las variables dentro de ese ambito y a las variables en ambitos superiores

Se pueden crear funciones flexibles pero ser evitativo para el uso de memoria
tener distintos tipos de contextos
 */

function outerFunction(){
    let outerVariable = "I am from outer function"
    
    function innerFunction(){
        console.log(outerVariable)
    }
    return innerFunction

}

const closureExample = outerFunction()
closureExample() // I am from outer function

// Segundo Ejemplo


function createCounter(){
    let count = 0;
    return function(){
     count++;
     console.log(count);   
    }
}

const counterA= createCounter()
counterA()
counterA()
//tendra probolemas de memoria
//los closures no debe de exceder el uso de memoria
const counterB = createCounter()
counterB()


//Tercer Ejemplo

/**

La función inner accede a las variables definidas en el ámbito de la función outer gracias al concepto de closure. Aunque outer no reciba parámetros, las variables definidas dentro de ella, como other_variable, son accesibles por inner debido a que inner se define dentro del scope de outer. Esto se relaciona con el ámbito léxico, donde una función puede acceder a las variables de su contexto de creación, incluso después de que la función outer haya terminado de ejecutarse.



 */
function outer(name){
    let message = 'Hello , '
    function inner(name){
    console.log(message + ' ' + name)
    }
    return inner
}
const closureA = outer()
const closureB = outer()

closureA('ALEJANDRO')
closureB('JUAN')