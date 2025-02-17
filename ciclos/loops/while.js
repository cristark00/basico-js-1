//While
/*
Ciclo para poder iterar, ingresa a un loop siempre y cuando la instruccion sea veridica
while(condiciones)
{

}
 */

let contador = 0;
while(contador < 10){
    console.log(contador);
    //++ ayuda a evitar a un loop infinito
    contador++;
}

//DO WHILE
/*
- Similar a While

do: codiog a ejecutar{
codigo
} while (condicion)


Diferencias:
Do While, primero se ejecuta el codigo y luego la condicion
while: primero se ejecuta la condicion y luego el codigo
*/

let contadores = 0;
do{
    console.log(contadores);
    contadores++;
}while (contadores <10)