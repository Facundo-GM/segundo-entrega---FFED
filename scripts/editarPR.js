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
