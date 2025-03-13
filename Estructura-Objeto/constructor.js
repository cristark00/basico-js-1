/*
¿Cómo podemos crear múltiples objetos en JavaScript de manera eficiente?

Cuando trabajamos con objetos en JavaScript, es común encontrarnos con la necesidad de crear múltiples instancias del mismo tipo de objeto, como podría ser una persona. En vez de copiar y pegar el mismo código repetidamente y modificarlo, podemos optar por un enfoque más eficiente y escalable utilizando funciones constructoras. Estas nos permiten definir una plantilla para un objeto, facilitando la creación de múltiples instancias.

*/

const persona ={
    name: 'Alejandro',
    age: 30,
    lastName: 'Lopez',
    address:{ 
        street: '1-27 zona 2',
        Avenue: 5,
        country: 'Guatemala'
    },
    saludar(){
        console.log(`Hi, my name is ${persona.name}`)
    }
}

// Funcion Constructora

/*
Qué son las funciones constructoras y cómo se utilizan?

Una función constructora es una forma de crear múltiples objetos con estructura similar sin necesidad de duplicar código. La función constructora tiene ciertas peculiaridades:

Nombre en mayúscula: Iniciamos el nombre de la función constructora con una letra mayúscula para indicar que esta función se utilizará para crear objetos.
Estructura como una función regular: Aunque tiene nombre específico, la estructura es similar a una función regular, pasando los datos necesarios como parámetros.
 */

function Persona(name,lastName,age){
    this.name = name; 
    this.lastName = lastName;
    this.age = age;
}
//Para crear instancias de un objeto utilizando una función constructora, utilizamos la palabra clave new:

const persona1 = new Persona('Alejandro', 'Lopez', 30);
const persona2 = new Persona('Juan', 'Perez', 25);
console.log(persona1, persona2);


/*
Prototype: es la copia de la funcion constructora que se encarga de compartir las propiedas o metodos
que existen en la funcion

Podemos hacerlo directamente en una instancia particular o utilizar el prototipo para afectar a todas las instancias.

Agregar propiedades individuales

Para añadir una propiedad a una instancia particular sin afectar a las demás, simplemente accedemos al objeto y añadimos la nueva propiedad:

persona1.nacionalidad = 'Mexicano';
Utilizar Prototype

Si deseamos agregar una propiedad o método a todas las instancias, lo hacemos a través del prototype:
*/

Persona.prototype.telefono = '5555-5555';

persona1.nacionalidad = 'Guatemalteca';

//Agregar metodo a la funcion constructora

Persona.prototype.saludar = function (){
    console.log(`Hola, me llamo ${this.name} ${this.lastName}`);
}

/*
¿Por qué usar funciones constructoras y el prototipo?

Eficiencia: Las funciones constructoras evitan la repetición de código y permiten una construcción más rápida y limpia cuando se necesitan múltiples instancias.
Específicas: Al modificar el prototype, podemos añadir funcionalidades o propiedades que se apliquen globalmente a todas las instancias, manteniendo el código DRY (Don't Repeat Yourself).
Flexibilidad: Podemos tanto modificar instancias específicas como influir sobre todas a través del prototipo, ofreciendo un gran margen de personalización y manejo eficiente de las propiedades.
*/

