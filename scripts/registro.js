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

const validarIniciar= (tag)=>{
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
    /*
    if(
        !objUsuario.usuario&&
        !objUsuario.contrasenia&&
        !objUsuario.repetirContrasenia
    ){
        
    errorNombreApellido.classList.add("d-none");
    errorUsuario.classList.add("d-none");
    errorContrasenia.classList.add("d-none");
    errorRepetirContrasenia.classList.add("d-none");
    } if(!objUsuario.nombreApellido){
        errorNombreApellido.classList.remove("d-none");
    }
    if(!objUsuario.usuario){
        errorUsuario.classList.remove("d-none");

    }if(!objUsuario.contraseniaontrasenia){
        errorContrasenia.classList.remove("d-none");
    }if(!objUsuario.repetirContrasenia){
        errorRepetirContrasenia.classList.remove("d-none");
    }*/
    validarIniciar(inputNombreApellido)
    validarIniciar(inputUsuario)
    validarIniciar(inputContrasenia)
    validarIniciar(inputRepetirContrasenia)
  if(objUsuario.nombreApellido != "" &&
     objUsuario.usuario != "" &&
     objUsuario.contrasenia != "" &&
     objUsuario.repetirContrasenia != ""
    ){
            console.log(objUsuario);
        }if(objUsuario.contrasenia===objUsuario.repetirContrasenia){
            const users=JSON.parse(localStorage.getItem("--usuarios")) || [];
            console.log(users)
            const id = users[users.length -1 ].id +1;
            console.log(id);
            
            users.push({
                id:id,
                nombreApellido:objUsuario.nombreApellido,
                contrasenia:objUsuario.contrasenia,
                usuario:objUsuario.usuario,
                estado:true,
                role:"user",
                permisos:{
                    editarUS:false,
                    editarADM:false,
                }
            });
                    
            console.log(users)
            localStorage.setItem("--usuarios",JSON.stringify(users));
            localStorage.setItem("--user",JSON.stringify(users[users.length-1]));

            setTimeout(()=>{
                location.href="../html/usuario.html"
            },2000);
            
            
        }else{
            alert("Las contraseñas no coinciden")
        }

    };

        inputNombreApellido.value="";
        inputUsuario.value="";
        inputContrasenia.value="";
        inputRepetirContrasenia.value="";



inputNombreApellido.addEventListener("input",cambioInputs);
inputUsuario.addEventListener("input",cambioInputs);
inputRepetirContrasenia.addEventListener("input",cambioInputs);
inputContrasenia.addEventListener("input",cambioInputs);


inputRegister.addEventListener("click",enviarRegistrar);