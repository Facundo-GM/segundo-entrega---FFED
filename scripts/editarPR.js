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

let arraycheck = [];

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

const btnGuardar = document.getElementById("guardar");

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
/*
btnGuardar.addEventListener("click",()=>{
    const name = document.getElementById("nombre");
    const price = document.getElementById("valor");
    const  = document.getElementById("");
    const  = document.getElementById("");
    const  = document.getElementById("");
})*/