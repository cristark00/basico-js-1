/*
 Las promesas tienen 3 estados
 - Pendiente (pending): Cuando se crea la promesa y se trabajan de inicio
 - Cumplida (fulfilled): Cuando se resuelve la promesa con éxito o no
 - Rechazada (rejected): Cuando se rechaza la promesa


 Manejan 2 tipos de call back:
 - resolve: Cuando se cumple la promesa
 - reject: Cuando se rechaza la promesa
 
 Existen 2 metodos en las promesas
 - then: Se ejecuta cuando la promesa se cumple es un metodo
 - catch: Se ejecuta cuando la promesa se rechaza es un metodo
 */

 const promise = new Promise((resolve,reject) =>{
    //set time out ayudara para darle un tiempo para que el llamando del api se pueda resolver
    setTimeout(()=>{
        let operationSuccessful = true;
        if(operationSuccessful){
            resolve("La operación se realizó con éxito");
        } else{
            reject("Fallo la operacion");
        }
    }, 2000);
    
 })