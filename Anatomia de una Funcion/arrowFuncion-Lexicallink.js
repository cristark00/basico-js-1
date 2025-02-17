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

//Arrow Function - implicit return
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