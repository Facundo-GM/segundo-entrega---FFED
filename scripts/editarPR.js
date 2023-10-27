let url = location.href;
url = url.split("=");

const almecen = document.getElementById("almacen")
const pr = JSON.parse(localStorage.getItem("-productos"));


const elemento = pr.find((pr)=> pr.id == url[1]);
console.log(elemento);

if("talle" in elemento){
almecen.innerHTML += 
`
    <div class="d-flex gap-3">
        <p class="text-light">Nombre:</p>
        <p class="cuadricula">${elemento.nombre}</p>
    </div>
    <div class="d-flex gap-3">
        <p class="text-light">Categoria:</p>
        <p class="cuadricula">${elemento.categoria}</p>
    </div>
    <div class="d-flex gap-3">
        <p class="text-light">Detalles:</p>
        <p class="cuadricula">${elemento.detalles}</p>
    </div>
    <div class="d-flex gap-3">
        <p class="text-light">Valor:</p>
        <p class="cuadricula valor">${elemento.valor}$</p>
    </div>
    <div class="d-flex gap-3">
        <p class="text-light">Stock:</p>
        <p class="cuadricula stock">${elemento.stock}</p>
    </div>
    <div class="d-flex gap-3">
        <p class="text-light">Talles:</p>
        <div class="d-flex gap-3">
        ${elemento.talle.map(talle => `<p class="cuadricula stock">${talle}</p>`).join('')}
        </div>
    </div>
    <div class="d-flex gap-3">
        <p class="text-light">Estado:</p>
        <p class="cuadricula stock">${elemento.estado}</p>
    </div>
`
}else{

almecen.innerHTML += 
    `
    <div class="d-flex gap-3 ">
        <p class="text-light">Nombre:</p>
        <p class="cuadricula">${elemento.nombre}</p>
    </div>
    <div class="d-flex gap-3">
        <p class="text-light">Categoria:</p>
        <p class="cuadricula">${elemento.categoria}</p>
    </div>
    <div class="d-flex gap-3">
        <p class="text-light">Detalles:</p>
        <p class="cuadricula">${elemento.detalles}</p>
    </div>
    <div class="d-flex gap-3">
        <p class="text-light">Valor:</p>
        <p class="cuadricula valor">${elemento.valor}$</p>
    </div>
    <div class="d-flex gap-3">
        <p class="text-light">Stock:</p>
        <p class="cuadricula stock">${elemento.stock}</p>
    </div>
    <div class="d-flex gap-3">
        <p class="text-light">Estado:</p>
        <p class="cuadricula stock">${elemento.estado}</p>
    </div>
    `
}

let contador = 0;
let arraycheck = [];
let arrayimg = [];

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
        /*
        zonaInpImg.innerHTML += 
        `
        <input type="text" name="" id="" class="form-control my-3 entradaImg">
        `*/
        const nuevoCampo = document.createElement("input");
        nuevoCampo.type = "text";
        nuevoCampo.className = "form-control my-3 entradaImg";
        zonaInpImg.appendChild(nuevoCampo);
    }
    
}



const guardarImg = ()=>{
    let entradasImg = document.querySelectorAll(".entradaImg");
    entradasImg.forEach((tag)=>{
        arrayimg.push(tag.value);
    })
    console.log(arrayimg);
}


const btnGuardar = document.getElementById("guardar");


btnGuardar.addEventListener("click",()=>{
    const name = document.getElementById("nombre");
    const detalles = document.getElementById("detalles");
    const inputCat = document.getElementById("input-cat");
    const price = document.getElementById("valor");
    const stock = document.getElementById("stock");

    let objEditado = {}

    if(inputCat.value != "Disfraces"){
        console.log("si");
        objEditado = {
            id : url[1],
            nombre : name.value,
            detalles : detalles.value,
            valor : price.value,
            categoria : inputCat.value,
            stock : stock.value,
        }
       
    }
    else{
        console.log("no");
        objEditado = {
            id : url[1],
            nombre : name.value,
            detalles : detalles.value,
            valor : price.value,
            categoria : inputCat.value,
            stock : stock.value,
            talle : arraycheck
        } 
    }

    pr.splice((url[1])-1,1,objEditado);
    localStorage.setItem("-productos",JSON.stringify(pr));
    location.reload();

});