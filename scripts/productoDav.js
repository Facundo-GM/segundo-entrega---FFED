const idProd = location.search.split('=')[1]; 
console.log(idProd);  // entrega el valor del id del producto , por ej 1 o 2 o 3 ...

const divCard=document.getElementById("cardsDisfrazes");

productosDav = JSON.parse(localStorage.getItem("productos")) || [];
console.log(productosDav);  // devuelve el array de objetos

productosDav.forEach((producto) => {
    console.log(producto);  // devuelve el objeto producto
    console.log(producto.id); // devuelve el id del objeto producto
    if(producto.id == idProd){
        console.log(producto.id);
        console.log(producto.nombre);
        
        const cartas = document.createElement("div");  // Dentro del bucle, se crea un nuevo elemento HTML div y se almacena en la variable card. Este div se utilizará como el contenedor de cada tarjeta de producto.
        
        divCard.innerHTML = ` 
        
           <div class="card d-flex">
                <div class="card-body">
                    <h2 class="card-title">${producto.nombre}</h2>
                    <p class="card-text">${producto.detalles}</p>
                </div>
            <img src="${producto.imagenes}" class="card-img-bottom"  alt="${producto.nombre}">
            <button class="btn btn-primary" onclick="addCart()" >Añadir Carrito</button> 
            </div>
            `}
        }

);

const addCart =() => {
    console.log("carrito");
}
























