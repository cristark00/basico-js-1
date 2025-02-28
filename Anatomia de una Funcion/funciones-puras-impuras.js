//Funciones Puras e Impuras
    //Funciones Puras
        //Dada una misma entrada, vamos a obtener la misma salida
        //No producen efectos secundarios
        //Side Efects : Efectos secundarios deja de ser pura
        /*
        1. Modificar Variables globales
        2. Modificar parametros
        3. Solicitues HTTP
        4. Imprimir mensajes en pantalla o consola
        5. Manipulacion del DOM
        6. Obteener la hora actual
         */

        function sum (a,b){
            return a + b
        }


    //Funciones Impuras
    //Dada una misma entrada, podemos obtener diferentes salidas
    //Pueden producir efectos secundarios

        function sum (a,b){
            console.log('A: ', a)
        }

    let total = 0;
        function sumWithSideEffect (){
            total += a ;
            return total;
        }

        //Funcion pura: por que tenemos solamente un parametro y la salida va ser siempre la mismta
        function square(x){
            return x * x
        }

        
        function addTen (y){
            return y + 10
        }

        const number = 5;
        const finalResult = addTen(square(number));