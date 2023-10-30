
const pr = JSON.parse(localStorage.getItem("-productos"));

const ultimoID = pr[(pr.length)-1].id;
console.log(ultimoID);
let contador = 0;
let arraycheck = [];
let arrayimg = [];
let indDiz = false;

const completaElCampo = ()=>{
    const txt = document.getElementById("txtIndicador");
    
    txt.classList.remove("d-none");
    txt.classList.add("txtCompletar");
    
    setTimeout(()=>{
        txt.classList.remove("txtCompletar");
        txt.classList.add("d-none");
    },5000);
}

const validar = (tag)=>{
    
    if (tag.value == "") {
        tag.classList.add("is-invalid");
    } 

    if(tag.value != ""){
        tag.classList.remove("is-invalid");
        tag.classList.add("is-valid");
    }
    
}

const validarCheck = (check)=>{
    
    if (!check.checked) {
        check.classList.add("is-invalid");
    } 

    if(check.checked){
        check.classList.remove("is-invalid");
        check.classList.add("is-valid");
    }
}

const pasarContenido = (objetoTag)=>{
    const inputCat = document.getElementById("input-cat");
    const checks = document.getElementById("checks");

    inputCat.value = objetoTag.textContent;
    if(inputCat.value == "Disfraces"){
        checks.classList.remove("d-none");
        checks.classList.add("anicheck");
    }
    else{
        checks.classList.remove("anicheck");
        checks.classList.add("d-none");
    }
}

const checkS = document.getElementById("s");
const checkL = document.getElementById("l");
const checkXLL = document.getElementById("xll");

const controlCheck = (check)=>{
    
    if (!check.checked) {
        check.classList.add("is-invalid");
    } 

    if(check.checked){
        check.classList.remove("is-invalid");
        check.classList.add("is-valid");
    }

    let existeTalle = arraycheck.some((talle)=>talle == check.value);

    if(check.checked && !existeTalle){
        
        arraycheck.push(check.value);
        console.log(arraycheck)
    }

}

checkS.addEventListener("change",()=>controlCheck(checkS));
checkL.addEventListener("change",()=>controlCheck(checkL));
checkXLL.addEventListener("change",()=>controlCheck(checkXLL));


const agregarImg = ()=>{
    const zonaInpImg = document.getElementById("inp-img");
    
    contador++;
   
    if(contador <= 5){
        const nuevoCampo = document.createElement("input");
        nuevoCampo.placeholder = "URL de la Imagen"
        nuevoCampo.type = "text";
        nuevoCampo.className = "form-control my-3 anicheck entradaImg";
        zonaInpImg.appendChild(nuevoCampo);
    }
    
}



const guardarImg = ()=>{
    let entradasImg = document.querySelectorAll(".entradaImg");
    let txtImg = document.getElementById("txtIndicadorImg");
    entradasImg.forEach((tag)=>{
        validar(tag);
        if(tag.value != ""){
            arrayimg.push(tag.value);
        } 
    });
    if(arrayimg.length == 0){
        txtImg.classList.remove("d-none");
        txtImg.classList.add("txtCompletar");
        setTimeout(()=>{
            txtImg.classList.remove("txtCompletar");
            txtImg.classList.add("d-none");
        },5000);
    }
}





const btnGuardar = document.getElementById("guardar");

const name = document.getElementById("nombre");
const detalles = document.getElementById("detalles");
const inputCat = document.getElementById("input-cat");
const price = document.getElementById("valor");
const stock = document.getElementById("stock");
const btnSumnar = document.getElementById("btn+");


btnGuardar.addEventListener("click",()=>{
    
    validar(name);
    validar(detalles);
    validar(inputCat);
    validar(price);
    validar(stock);

    if(arrayimg.length == 0){
        btnSumnar.classList.add("colorBordeBtnsum");
    }
    else{
        btnSumnar.classList.remove("colorBordeBtnsum");
    }

    if(inputCat.value == "Disfraces" && arraycheck.length  == 0){
        validarCheck(checkS);
        validarCheck(checkL);
        validarCheck(checkXLL);
        completaElCampo();
    }

    let objCreado = {}

    if(name.value != "" && detalles.value != "" && 
    inputCat.value != "" && price.value != "" && 
    stock.value != "" && arrayimg.length > 0){
        console.log("llegue")
        if(inputCat.value == "Disfraces" && arraycheck.length > 0){
            console.log("si");
            objCreado = {
                id : ultimoID + 1,
                nombre : name.value,
                detalles : detalles.value,
                valor : price.value,
                categoria : inputCat.value,
                imagenes : arrayimg,
                stock : stock.value,
                talle : arraycheck
            }
            pr.push(objCreado);
            localStorage.setItem("-productos",JSON.stringify(pr));

            Swal.fire({
                position: 'center-center',
                icon: 'success',
                title: '¡Producto Creado!',
                showConfirmButton: false,
                timer: 3000
            });

            setTimeout(()=>{
                location.href = "adm-tablas.html";
            },3000);
        }
        else if(inputCat.value == "Disfraces" && arraycheck.length  == 0){
        }
        else{
            console.log("no");
            objCreado = {
                id : ultimoID + 1,
                nombre : name.value,
                detalles : detalles.value,
                valor : price.value,
                categoria : inputCat.value,
                imagenes : arrayimg,
                stock : stock.value,
            }
            pr.push(objCreado);
            localStorage.setItem("-productos",JSON.stringify(pr));

            Swal.fire({
                position: 'center-center',
                icon: 'success',
                title: '¡Producto Creado!',
                showConfirmButton: false,
                timer: 3000
            });

            setTimeout(()=>{
                location.href = "adm-tablas.html";
            },3000);
        }
    }
    else{
        completaElCampo();
    }

});