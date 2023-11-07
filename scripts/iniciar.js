const inputContrasenia=document.getElementById("inputContrasenia");
const inputIniciar=document.getElementById("inputIniciar");
const inputUsuario=document.getElementById("inputUsuario");
const errorUsuario=document.getElementById("errorUsuario");
const errorContrasenia=document.getElementById("errorContrasenia");

const objUsuario={
usuario:"",
contrasenia:"",

};


errorUsuario.classList.add("d-none");
errorContrasenia.classList.add("d-none");

const validarIniciar= (target)=>{
    
    if(tag.name == "usuario" && tag.value == ""){
        errorUsuario.classList.remove("d-none");
    }
    else if(tag.value != ""){
        errorUsuario.classList.add("d-none");
    }
    if(tag.name == "contrasenia" && tag.value == ""){
        errorContrasenia.classList.remove("d-none");
    }
    else if(tag.value != ""){
        errorContrasenia.classList.add("d-none");
    }
};
const cambioInputs=(evento)=>{
  objUsuario[evento.target.name] = evento.target.value;
  if(evento.target.name === "usuario" && evento.target.value == ""){
      errorUsuario.classList.remove("d-none");
  }
  else if (evento.target.name === "contrasenia" && evento.target.value == "")
  {
      errorContrasenia.classList.remove("d-none");
      
  }
}; 

const enviarInicio=(ev)=>{

  ev.preventDefault();
  
  validarInicio(inputUsuario);
  validarInicio(inputContrasenia);
  
const users=array.findIndex((user)=>{
  return users.usuario== users.usuario.value && users.contrasenia==value;
});
if (users != -1){
array[users].estado=true;

localStorage.setItem("usuario",JSON.stringify(array[users]))
if(array[users].role=="users"){
  setTimeout(()=>{
    location.href="../html/usuario.html";

  },2000);

}

}else{
  setTimeout(()=>{
    location.href="../html/adm-tablas.html";
}
 ),2000}
};
  

   console.log(objUsuario);


inputContrasenia.addEventListener("input",cambioInputs);
inputUsuario.addEventListener("input",cambioInputs);

inputIniciar.addEventListener("click",enviarInicio);
