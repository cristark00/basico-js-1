/*
Clase es un sugar sintax
Generar un molde del cual se van a construir distintos objetos
*/

class Persona {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    saludar(){
        console.log(`Hola, me llamo ${this.name} y tengo ${this.age} años`);
    }
}

const persona1 = new Persona('Alejandro',75);