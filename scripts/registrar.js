const inputNombreApellido =document.getElementsByName("inputNombreApellido");  
const inputUsuario=document.getElementById("inputUsuario");
const inputContrasenia=document.getElementById("inputContrasenia");
const inputRepetirContrasenia=document.getElementById("inputRepetirContrasenia");
const inputRegister=document.getElementById("inputRegister");

const errorContrasenia=document.getElementById("errorContrasenia");
const errorUsuario=document.getElementById("errorUsuario");
const errorRepetirContrasenia=document.getElementById("errorRepetirContrasenia");
const errorNombreApellido=document.getElementById("errorNombreApellido");
const botonRegistrar=document.getElementById("botonRegistrar");

errorNombreApellido.classList.add("d-none");
errorUsuario.classList.add("d-none");
errorContrasenia.classList.add("d-none");
errorRepetirContrasenia.classList.add("d-none");


const objUsuario={ 
nombreApellido:" ",
usuario:" ",
contrasenia:"",
repetirContrasenia:"",

};

const cambioInputs=(evento) =>{

    objUsuario[evento.target.name] = evento.target.value;
    if(evento.target.name === "nombreApellido" && evento.target.value !== ""){
        errorNombreApellido.classList.add("d-none");
    }else if (evento.target.name === "usuario" && evento.target.value !== "")
    {
        errorUsuario.classList.add("d-none");
    }else if (evento.target.name === "contrasenia" && evento.target.value !== "")
    {
        errorContrasenia.classList.add("d-none");
    }else if (evento.target.name === "repetirContrasenia" && evento.target.value !== "")
    {
        errorRepetirContrasenia.classList.add("d-none");
    }
};


const enviarRegistrar=(ev)=>{
    ev.preventDefault();
    if (
        !objUsuario.nombreApellido && 
        !objUsuario.usuario &&
        !objUsuario.contrasenia &&
        !objUsuario.repetirContrasenia ) {
       errorNombreApellido.classList.add("d-none");
       errorUsuario.classList.add("d-none");
       errorContrasenia.classList.add("d-none");
       errorRepetirContrasenia.classList.add("d-none");
        }
       else if (!objUsuario.nombreApellido){
       errorNombreApellido.classList.remove("d-none");
  
    }  else if (!objUsuario.usuario){
      errorUsuario.classList.remove("d-none");
   } else if(!objUsuario.contrasenia ){
    errorContrasenia.classList.remove("d-none");
    
   }else if(!objUsuario.repetirContrasenia ){
    errorRepetirContrasenia.classList.remove("d-none");
   }
   if (
    !objUsuario.nombreApellido && 
    !objUsuario.usuario &&
    !objUsuario.contrasenia &&
    !objUsuario.repetirContrasenia ) 
    {
console.log(objUsuario);
console.log(click);
    }
   
};



inputUsuario.addEventListener("input",cambioInputs);
inputRepetirContrasenia.addEventListener("input",cambioInputs);
inputContrasenia.addEventListener("input",cambioInputs);


inputRegister.addEventListener("click",enviarRegistrar);


