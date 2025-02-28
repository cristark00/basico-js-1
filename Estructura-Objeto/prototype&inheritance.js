
class Animal{
    constructor (nombre,tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirSonido(){
        console.log('El animal emite un sonido')
    }
}

//extends : la clase de perro va a extender la clase animal
class Perro extends Animal{
    constructor(nombre,tipo, raza){
//palabra reservada: SUPER, para poder utilizar el this de una clase constructora
//SUPER, va a llamar el constructor de la clase animal
    super(nombre, tipo);
    this.raza = raza;
    }

    emitirSonido(){
        console.log('El perro ladra')
    }
    correr (){
        console.log(`${this.nombre} corre alegramente`)
    }
}


const perro1 =new Perro ('Jack Jack', 'Perro', 'beagle');
console.log(perro1)
perro1.correr();
perro1.emitirSonido();


//Agregando un nuevo metodo a la instancia pero no se esta agregando a la clase padre, se tiene que 
//inyectar al prototipo que se genera cuando se genera la clase de perro
perro1.nuevoMetodo = function(){
    console.log('Este es un nuevo metodo')
}
//al usar prototype estaria inyectando el metodo a la clase perro
Perro.prototype.segundoMetodo = function(){
    console.log('Este es un nuevo metodo 2')
}

//la forma correcta es : Agregar un metodo al prototipo de una clase o de una funcion constructora
//cadena de prototipo, cuando se manda a llamar perro1

//oBJECT ES EL OBJETO GLOBAL NO HAY NADA MAS ARRIBA DE ESE OBJETO