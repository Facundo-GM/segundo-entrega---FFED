const usuarios = JSON.parse(localStorage.getItem("--usuarios"));
const usuarioActual = JSON.parse(localStorage.getItem("--user"));

const ultimoID = usuarios[(usuarios.length)-1].id;

if(usuarioActual.permisos.editarADM == true){
    const dropContainer = document.getElementById("dropContainer");
    dropContainer.classList.remove("d-none");
}

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
                id : ultimoID + 1,
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
    
            usuarios.push(objEditado);
            localStorage.setItem("--usuarios",JSON.stringify(usuarios));
            Swal.fire({
                position: 'center-center',
                icon: 'success',
                title: '¡Usuario Creado!',
                showConfirmButton: false,
                timer: 3000
            });
            setTimeout(()=>{
                location.href = "adm-tablas.html";
            },3000);
        }
        else{
            completaElCampo();
        }
    }
    else{
        
        if(name.value != "" && mail.value != "" && contrasenia.value != "" && contadorValid >= 3){
            console.log("no")
            objEditado = {
                id : ultimoID + 1,
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
    
            usuarios.push(objEditado);
            localStorage.setItem("--usuarios",JSON.stringify(usuarios));
            Swal.fire({
                position: 'center-center',
                icon: 'success',
                title: '¡Usuario Creado!',
                showConfirmButton: false,
                timer: 3000
            });
            setTimeout(()=>{
                location.href = "adm-tablas.html";
            },3000);
        }
        else{
            completaElCampo();
        }
    }
});