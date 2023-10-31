const errorUsuario=document.getElementById("errorUsuario");
const errorContrasenia=document.getElementById("errorContrasenia");

const inputContrasenia=document.getElementById("inputContrasenia");
const inputIniciar=document.getElementById("inputIniciar");
const inputUsuario=document.getElementById("inputUsuario");
const botonIniciar=document.getElementById("botonIniciar");

const objUsuario={
usuario:" ",
contrasenia:" ",
};

errorUsuario.classList.add("d-none");
errorContrasenia.classList.add("d-none");



const cambioInputs=(evento)=>{
    objUsuario[evento.target.name] = evento.target.value;
    if(evento.target.name === "usuario" && evento.target.value !== ""){
        errorUsuario.classList.add("d-none");
    }else if (evento.target.name === "contrasenia" && evento.target.value !== "")
    {
        errorContrasenia.classList.add("d-none");
    }
}; 

 const enviarIniciar=(ev)=>{
 ev.preventDefault();
  if ( 
    !objUsuario.usuario &&
    !objUsuario.contrasenia ) 
    { errorUsuario.classList.remove("d-none");
    errorContrasenia.classList.remove("d-none");
 } else if (objUsuario.usuario){
    errorUsuario.classList.remove("d-none");

} else if (objUsuario.contrasenia){
    errorContrasenia.classList.remove("d-none");
 }
 if ( 
    !objUsuario.usuario &&
    !objUsuario.contrasenia ) {
    console.log(objUsuario);
    }
 };
inputContrasenia.addEventListener("input",cambioInputs);
inputUsuario.addEventListener("input",cambioInputs);

inputIniciar.addEventListener("click",enviarIniciar);
