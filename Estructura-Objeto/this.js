/*
this -- class
this hace referencia al objeto o a la clase que se construye

*/

class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
}
}
const persona1 = new Persona('Alejandro', 30);
console.log(persona1)

persona1.nuevoMetodo = function(){
    console.log(`Mi nombre es ${this.nombre}`);
}