const usersDatabase = [
    {
      username: "andres",
      password: "123",
    },
    {
      username: "caro",
      password: "456",
    },
    {
      username: "mariana",
      password: "789",
    },
  ];

const usertsTimelINE = [
    {
        username: "Estefany",
        timeline: "Me Encanta JavaScript",
    },
    {
         username: "Oscar",
        timeline: "Bebeloper es lo mejor!",
    },
    {
         username: "Mariana",
        timeline: "A mi me gusta mas el cafe que el te",
    },
    {
         username: "Andres",
        timeline: "Yo oy no quiero trabajar",
    }

];


const username = prompt("Ingresa tu usuario");
const password = prompt("Ingresa tu contraseña");

function usuarioExistente(username, password){
    for (let i=0; i< usersDatabase.length;i++){
        if (usersDatabase[i].username === username && usersDatabase[i].password === password){
           return true;
            break;
        }else{
         
        }
    }
    return false;
}

usuarioExistente(username, password);
function signIn(){
  if (usuarioExistente(username, password)){
  alert(`Bienvenido a tu cuenta ${username}`);
  console.log(usertsTimelINE)
  }else{
    alert('Uuups, usuario o contraseña incorrectos')
  }

}
signIn(username,password);

