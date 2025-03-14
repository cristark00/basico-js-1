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
        if(!operationSuccessful){
            resolve("La operación se realizó con éxito");
        } else{
            reject("Fallo la operacion");
        }
    }, 2000);
    
 })

 promise
 .then((successMessage) => {
    console.log(successMessage);
 })
 .catch((errorMessage) => {
    console.log(errorMessage);
    })


//Async and Await
/*
El resultado es el mismo devuelve una promesa
las promesas existieron despues de los callbacks
async y await es una forma de escribir de manera mas limpia

 */

//REVISAR LA CLASE DE FUNDAMENTOS DE JAVASCRIPT ASYNC,

const walkDog = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve('You walkd the dog 🐕');
    }, 1500);
})

const cleanKitche= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('You cleaned the kitchen 🧹');
    }, 2500);
})