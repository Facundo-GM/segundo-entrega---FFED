const inputNombreApellido =document.getElementById("inputNombreApellido");  
const inputUsuario=document.getElementById("inputUsuario");
const inputContrasenia=document.getElementById("inputContrasenia");
const inputRepetirContrasenia=document.getElementById("inputRepetirContrasenia");
const inputRegister=document.getElementById("inputRegister");
const repetirContrasenia=document.getElementById("repetirContrsenia")
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
nombreApellido:"",
usuario:"",
contrasenia:"",
repetirContrasenia:"",
};

const validarIniciar= (target)=>{
    if(tag.name == "nombreApellido" && tag.value == ""){
        errorNombreApellido.classList.remove("d-none");
    }
    else if(tag.value != ""){
        errorNombreApellido.classList.add("d-none");
    }
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
    }if(tag.name == "repetirContrasenia" && tag.value == ""){
        errorRepetirContrasenia.classList.remove("d-none");
    }
    else if(tag.value != ""){
        errorRepetirContrasenia.classList.add("d-none");
    }
};

const cambioInputs=(evento) =>{

    
    objUsuario[evento.target.name] = evento.target.value;
    if(evento.target.name === "nombreApellido" && evento.target.value == ""){
        errorNombreApellido.classList.remove("d-none");
    }
    else if (evento.target.name === "usuario" && evento.target.value == "")
    {
        errorUsuario.classList.remove("d-none");
        
    }
    else if (evento.target.name === "contrasenia" && evento.target.value == "")
    {
        errorContrasenia.classList.remove("d-none");
        
    }
    else if (evento.target.name === "repetirContrasenia" && evento.target.value == "")
    {
        errorRepetirContrasenia.classList.remove("d-none");
        
    }
   
};


const enviarRegistrar=(ev)=>{

    ev.preventDefault();

    validarInicio(inputNombreApellido);
    validarInicio(inputUsuario);
    validarInicio(inputContrasenia);
    validarInicio(inputRepetirContrasenia);
    }
        if(objUsuario.nombreApellido!=""&&objUsuario.usuario!=""&&objUsuario.contrasenia!=""&&objUsuario.repetirContrasenia!="") 
        if(objUsuario.contrasenia===objUsuario.repetirContrasenia)
        {
         objUsuario.push({
            id,
            nombreApellido:nombreApellido.value,
            contrasenia:contrasenia.value,
            estado:false,
            role:"user",
            permisos:{
            editarUS:false,
            editarADM:false,
            }

        }) 
    }else{alert ("las contraseñas no coiciden")
    
    } setTimeout(() =>{
        location.href="../html/usuario.html"
        } ,1000);
    
        localStorage.setItem("user",JSON.stringify(array));
        localStorage.setItem("user"),JSON.stringify(array[array.length-1]);

        inputNombreApellido.value="";
        inputUsuario.value="";
        inputContrasenia.value="";
        inputRepetirContrasenia.value="";

   

inputNombreApellido.addEventListener("input",cambioInputs);
inputUsuario.addEventListener("input",cambioInputs);
inputRepetirContrasenia.addEventListener("input",cambioInputs);
inputContrasenia.addEventListener("input",cambioInputs);


inputRegister.addEventListener("click",enviarRegistrar);