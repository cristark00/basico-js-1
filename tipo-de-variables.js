//PRIMITIVOS

    //STRING
    let nombre = "alejndro"
    //number
    let edad = 25
    //boolean
    let esMayorDeEdad = true
    //null: vacio que no existe nada, ayuda a saber si hay algo o no
    let noHayValor = null
    //undefined: no tiene valor, no existe, el valor en escencia lo da JS, el valor de undefined
    let noHayValor2 = undefined
    //symbol: valor unico que es como un id de un suario, Los Symbol son útiles cuando quieres asegurarte de que una propiedad de un objeto sea única y no se mezcle con otras propiedades que puedan tener el mismo nombre.
    let simbolo = Symbol("mi simbolo")
    //bigint
    let numeroGrande = 1234n


//COMPLEJOS
    //OBJECT
    let cb190 = {
        marca: 'HONDA',
        modelo: 'CB190',
        color: 'azul'
    }

    //array
    let frutas = ['manzana', 'banano','uva']

    //function
    function saludar(nombre){
        console.log(`Hola ${nombre}`)
    }