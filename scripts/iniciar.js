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

const validarIniciar= (tag)=>{
    
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
  
  validarIniciar(inputUsuario)
  validarIniciar(inputContrasenia)
  const usuarios= JSON.parse(localStorage.getItem("--usuarios"))
  console.log(usuarios);
  
  const user = usuarios.findIndex((users)=>{
    return users.mail== objUsuario.usuario && users.contrasenia == objUsuario.contrasenia;
  });
  console.log(user)
  if (user != -1){
    usuarios[user].log=true;
  }
  
  localStorage.setItem("--user",JSON.stringify(usuarios[user]));

  if(usuarios[user].role=="user"){
    setTimeout(()=>{
      location.href="../html/usuario.html";

    },2000);

  }
  else{
      setTimeout(()=>{
        location.href="../html/adm-tablas.html";
    }),2000}
}

inputUsuario.value="";
inputContrasenia.value="";

inputContrasenia.addEventListener("input",cambioInputs);
inputUsuario.addEventListener("input",cambioInputs);

inputIniciar.addEventListener("click",enviarInicio);