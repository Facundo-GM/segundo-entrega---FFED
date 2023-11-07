const products=JSON.parse(localStorage.getItem("-productos"));
const tabla = document.getElementById("tabla-fav");
const favLS =JSON.parse (localStorage.getItem("favoritos")) || [];

tabla.innerHTML = favLS.map((fav)=>
` <tr>
    <td class="product-image"><img src="${fav.imagenes[0]}" alt=""></td>
    <td>${fav.nombre}</td>
    <td>$${fav.valor}</td>
    <td>${fav.detalles}</td>
    <td><button class="btn btn-success add-to-cart" onclick="addCart(${fav.id})">Agregar </button></td>
    <td><button class="btn btn-danger remove-favorite" onclick="deleteFav(${fav.id})">Eliminar</button></td>
</tr>
`
).join("")
const addCart = (id) => {
    const cartLS = JSON.parse(localStorage.getItem("carrito")) || [];
    const cartFilter = cartLS.filter((prod)=>prod.id === id);
    if(cartFilter.length > 0 ){
        alert("Este producto ya se encuentra en el carrito")
    }else{
        const prodFilter = products.filter((prod)=> prod.id === Number(id))
        cartLS.push(prodFilter[0]);
        localStorage.setItem("carrito",JSON.stringify(cartLS))
    }
}


const deleteFav= (id) =>{
    const confirmDeleteFav = confirm ("¿Estas seguro de querer eliminar este articulo de tus favoritos?")
    if(confirmDeleteFav){
        const favFilter = favLS.filter((fav) => fav.id !== id)
        localStorage.setItem("favoritos",JSON.stringify(favFilter));
        location.reload()
    }

}
