//Arrow Fucntion
/*

Una arrow function es una forma concisa de definir funciones en JavaScript. Se caracteriza por no utilizar la palabra clave function, sino que emplea una flecha (=>) para indicar el cuerpo de la función.
Las arrow functions tienen un enlace léxico para el contexto (this), lo que significa que heredan el this del contexto donde son definidas, a diferencia de las funciones tradicionales que crean su propio contexto. Esto las hace ideales para métodos dentro de objetos y callbacks, evitando problemas comunes relacionados con el this.


 */

const greeting = function (name){
    return `Hi, ${name}`
}
//Arrow Function - explicit return
const newGreeting = (name) =>{
      return `Hi, ${name}`
}

//Arrow Function - implicit, no lleva un return y ni llaves
//no lleva parentesis a menos que se agreguen mas parametros
const newGreetingImplicit = name =>`Hi, ${name}`
const newGreetingImplicitWithTwoParameters = (name,lastname) => `hi ${name} ${lastname}`


//Lexical Binding
const functionalCharacter = {
    name: 'Peter Parket',
    messageWithTraditionalFunction: function (message){
        console.log(`${this.name} says: ${message}`)
    }
}



    /*
    En las arrow functions, el contexto de this se determina léxicamente, lo que significa que heredan el valor de this del contexto donde fueron definidas. A diferencia de las funciones tradicionales, que crean su propio contexto, las arrow functions no tienen su propio this. Esto provoca que al intentar usar this dentro de una arrow function, se refiera al this del ámbito externo en el que se definió, lo que puede resultar en un comportamiento inesperado si se espera que this haga referencia al objeto en el que se invoca la función.

    Las Arrow Function son útiles porque permiten:

Escribir métodos más concisos
Simplificar una línea de código para que sea más legible
Aprovechar las características de retorno implícito y el no uso de paréntesis
Olvidarse de manejar el contexto this
Definir de manera compacta una función convencional
Eliminar las llaves y la palabra return si la función tiene solamente una sentencia que devuelve un valor
Reducir el código aún más utilizando parámetros

Cuando se usa una función flecha como método de un objeto, el this dentro de la función flecha no apunta al objeto que invocó el método. En cambio, el valor de this se hereda del contexto de ejecución en el que se definió la función flecha. Esto significa que this se refiere al this del entorno circundante (en el que se creó la función), y no puede ser cambiado con métodos como call, apply o bind.

Exacto, la arrow function no posee su propio contexto "this". En su lugar, capturan el "this" del contexto de donde fueron definidas, en otras palabras, si "this" no está definido en ese contexto, será "undefined".

Para lograr que la arrow function use el "this" del objeto "finctionalCharacter" debe acceder directamente a finctionalCharacter:
     */
    const finctionalCharacter = {
    name: 'Peter Parket',
    messageWithTraditionalFunction: function (message){
        console.log(`${this.name} says: ${message}`)
    },
    
    // no hay una vinculacion para este lexico, 
    messageWithArrowFunction: (message) =>{
        console.log(`${this.name} says: ${message}`)
    }
}
finctionalCharacter.messageWithTraditionalFunction('With Great Power comes with a great responsability')
finctionalCharacter.messageWithArrowFunction('With Great Power comes with a great responsability')