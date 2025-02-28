/*
Objetos: Estructura de datos que ayuda a guardar valores de una
forma particular : Key / Value 

propiedad = valor de la propiedad } ayudara a generar la estructura

nameObject{ property: properityValue , ...}

Ayuda a guardar informacion

Objeto es la base que nos ayudara a generar un paradigma de programacion que es abstraer cosas de la realidad
a la programacion

Dentro de la estructura de Objetos puede llevar metodos, funciones que estan dentro de objetos
que ayudan a generar interaccion.


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
console.log(persona)
/*
metodos acciones que van hacer los objetos con cierta informacion que tengan

Agregar mas propiedades
*/

persona.telefono = '5555-5555';
console.log(persona.telefono);

persona.despedir = () => {
    console.log(`Adios ${persona.name}`)
}

/*
Borrar Metodos
*/

delete persona.telefono;
delete persona.despedir;