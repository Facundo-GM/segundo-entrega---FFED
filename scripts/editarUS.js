let url = location.href;
url = url.split("=");

const almecen = document.getElementById("almacen")
const usuarios = JSON.parse(localStorage.getItem("--usuarios"));
const usuarioActual = JSON.parse(localStorage.getItem("--user"));


if(usuarioActual.permisos.editarADM == true){
    const dropContainer = document.getElementById("dropContainer");
    dropContainer.classList.remove("d-none");
}

const sujeto = usuarios.find((sujeto)=> sujeto.id == url[1]);
console.log(sujeto);


almecen.innerHTML += 
`
    <div class="d-flex gap-3">
        <p class="text-light">Nombre:</p>
        <p class="cuadricula">${sujeto.usuario}</p>
    </div>
    <div class="d-flex gap-3">
        <p class="text-light">Email:</p>
        <p class="cuadricula">${sujeto.mail}</p>
    </div>
    <div class="d-flex gap-3">
        <p class="text-light">Contraseña:</p>
        <p class="cuadricula">${sujeto.contrasenia}</p>
    </div>
    <div class="d-flex gap-3">
        <p class="text-light">Estado:</p>
        <p class="cuadricula">${sujeto.log == false ? "Desconectado" : "Conectado"}</p>
    </div>
    <div class="d-flex gap-3">
        <p class="text-light">Role:</p>
        <p class="cuadricula">${sujeto.role == "user" ? "Usuario" : "Administrador"}</p>
    </div>
`

const completaElCampo = ()=>{
    const txt = document.getElementById("txtIndicador");
    
    txt.classList.remove("d-none");
    txt.classList.add("txtCompletar");
    
    setTimeout(()=>{
        txt.classList.remove("txtCompletar");
        txt.classList.add("d-none");
    },5000);
}

let contadorValid = 0;
let validMail;
let palabra;

const validar = (tag)=>{

    const placeholderBase = tag.placeholder;

    const patron = /^[A-Za-z]+$/;

    
    if (tag.value == "") {
        tag.classList.add("is-invalid");
        tag.placeholder = placeholderBase;
        validMail = false;
    } 

    if(tag.value != ""){
        tag.classList.remove("is-invalid");
        tag.classList.add("is-valid");
        validMail = true;
    }

    
    if (!patron.test(tag.value) && (tag.id != "mail" && tag.id != "pass")) {
        if (tag.value == "") {
            tag.placeholder = placeholderBase;
        }
        else{
            tag.classList.add("is-invalid");
            tag.value = "";
            tag.classList.add("phAdv");
            tag.placeholder = "No debe tener caracteres especiales o numeros";
            setTimeout(()=>{
                tag.placeholder = placeholderBase;
                tag.classList.remove("phAdv");
            },4000);
        }
    }
    else if(tag.id == "mail"){
        
        if (tag.value == "") {
            tag.placeholder = placeholderBase;
        }
        else if(tag.value.includes("@")){
            tag.placeholder = placeholderBase;
            
        }
        else{
            tag.classList.add("is-invalid");
            tag.value = "";
            tag.classList.add("phAdv");
            tag.placeholder = "Debe contener @";
            setTimeout(()=>{
                tag.placeholder = placeholderBase;
                tag.classList.remove("phAdv");
            },4000);
        }
    }
    
    

    if(patron.test(tag.value) || tag.value.includes("@") || validMail){
        contadorValid++
    }
    else{
        contadorValid = 0;
    }
    console.log(contadorValid);
}

const pasarContenido = (objetoTag)=>{
    
    const inputCat = document.getElementById("roleDown");
    if(objetoTag.textContent == "Administrador"){
        palabra = "adm"
    }

    if(objetoTag.textContent == "Usuario"){
        palabra = "user"
    }
    
    inputCat.value = objetoTag.textContent;
}


const btnGuardar = document.getElementById("guardar");

const name = document.getElementById("nombre");
const mail = document.getElementById("mail");
const inputCat = document.getElementById("roleDown");
const contrasenia = document.getElementById("pass");



btnGuardar.addEventListener("click",()=>{
    
    validar(name);
    validar(mail);
    validar(contrasenia);
    

    if(usuarioActual.permisos.editarADM == true){
        validar(inputCat);
        if(name.value != "" && mail.value != "" && contrasenia.value != "" &&  inputCat.value != "" && contadorValid >= 4){
            objEditado = {
                id : url[1],
                mail : mail.value,
                usuario : name.value,
                contrasenia : contrasenia.value,
                role : palabra ? palabra : "user",
                log : false,
                permisos :{
                    editarUS : true,
                    editarADM : false,
                }
            }
    
            usuarios.splice((url[1])-1,1,objEditado);
            localStorage.setItem("--usuarios",JSON.stringify(usuarios));
            location.reload();
        }
        else{
            completaElCampo();
        }
    }
    else{
        
        if(name.value != "" && mail.value != "" && contrasenia.value != "" && contadorValid >= 3){
            console.log("no")
            objEditado = {
                id : url[1],
                mail : mail.value,
                usuario : name.value,
                contrasenia : contrasenia.value,
                role : "user",
                log : false,
                permisos :{
                    editarUS : false,
                    editarADM : false,
                }
            }
    
            usuarios.splice((url[1])-1,1,objEditado);
            localStorage.setItem("--usuarios",JSON.stringify(usuarios));
            location.reload();
        }
        else{
            console.log("si")
            completaElCampo();
        }
    }
});