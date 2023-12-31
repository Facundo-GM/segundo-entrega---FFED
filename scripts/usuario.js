// cerrar sesion y pasar usuario login a false


const buttonLogout = document.getElementById("idLogout");

const userLogout = () => {

    let usuariosArr = JSON.parse(localStorage.getItem("--usuarios"));
    let userArr = JSON.parse(localStorage.getItem("--user"));

    
    const sujeto = usuariosArr.findIndex((sujeto) => {
        return sujeto.nombre === userArr.nombre && sujeto.contrasenia === userArr.contrasenia;
    });

    usuariosArr[sujeto].log = false;
    localStorage.setItem("usuarios",JSON.stringify(usuariosArr));
    
    setTimeout(()=>{
        localStorage.removeItem("--user");
        location.href = "../html/iniciar-sesion.html";
    },1500);
};
      
buttonLogout.addEventListener("click", userLogout);



// generacion de Cards para pagina de usuario

const hayProductoLs = JSON.parse(localStorage.getItem(productos)) || [];

if(hayProductoLs.length == 0){
    localStorage.setItem("productos",JSON.stringify(productos));
}
console.log(hayProductoLs)


const ContenedorCardProductos = document.getElementById("productCards"); //En esta línea, se obtiene una referencia al elemento HTML con el ID "productCards" y se almacena en la variable productCardsContainer. Esto se utiliza para posteriormente agregar las tarjetas de productos al contenedor.

productos.forEach(producto => {   // Aquí comienza un bucle forEach que recorrerá un array llamado productos, el cual se supone que contiene objetos que representan productos.
    
    const carta = document.createElement("div");  // Dentro del bucle, se crea un nuevo elemento HTML div y se almacena en la variable card. Este div se utilizará como el contenedor de cada tarjeta de producto.
    
    carta.innerHTML = ` 
        
        <div class="card h-100 d-flex" style="width: 95%;">
            
            <div class="title-div">
            <h3>${producto.nombre}</h3>
            </div>
            <div class="contenedor-div">
            <img src="${producto.imagenes[0]}" class="card-img-top square-image" alt="${producto.nombre}">
            </div>

            <div class="card-body">
           
                <h3>Precio: $${producto.valor}</h3>

                <a href="../html/producto.html?id=${producto.id}" class="btn btn-primary botonGoClass text-center">Ver Mas</a>

            </div>
        </div>

    `;

     // Agrega la tarjeta al contenedor
     ContenedorCardProductos.appendChild(carta);
});



