const stars = document.querySelectorAll(".star")


stars.forEach(function (star, index) {
    star.addEventListener("click" , function() {
    for (let i=0 ; i <=index ; i++ ){
        stars[i].classList.add("checked");
    }
    for (let i=index+1; i<stars.length; i++){
        stars[i].classList.remove("checked")
    }
})
    
});

// revisar codigo agregado por David

const idProd = location.search.split("=")[1];
const divCard = document.getElementById("cardsFakeStore");
const products = JSON.parse(localStorage.getItem("products"));

const filterProd = products.filter((prod) => prod.id === Number(idProd));

divCard.innerHTML = filterProd.map(
  (product) =>
    `       
      <div class="d-flex">
          <img
              src="${product.image}"
              class="card-img-top class-img"
              alt="..."
          />
          <div class="card-body">
           <h5 class="card-title">${product.title}</h5>
           <p class="card-text">
           ${product.description}
           </p>
          <button class='btn btn-primary' onclick="addCart(${product.id})">Añadir Carrito</button>
          <button class='btn btn-success' onclick="addFavorite(${product.id})">Añadir Favoritos</button>
          </div>
      </div>
        
           `
);

const addCart = async (id) => {
  const userExist = JSON.parse(localStorage.getItem("user"));
  const cartLs = JSON.parse(localStorage.getItem("cart")) || [];


  if (userExist) {
    const res = await fetch('https://fakestoreapi.com/products/${idprod');
    const response =await res.json();
    cartLs.push(response);
    console.log(cartLs);

        alert("El Producto ya existe en el carrito");
      } else {
      }
        const filterProd = products.filter((prod) => prod.id === Number(id));
        cartLs.push(filterProd[0]);
        localStorage.setItem("cart", JSON.stringify(cartLs));
      }
  
    }
  } else {
    location.href = "../html/iniciar-sesion.html";
};

const addFavorite = async (id) => {
  const userExist = JSON.parse(localStorage.getItem("user"));
  const favLs = JSON.parse(localStorage.getItem("favorite")) || [];
  const filterFav = favLs.filter((fav) => fav.id === id);

  if (userExist) {
    try {
      if (filterFav.length > 0) {
        alert("El Producto ya existe en Favoritos");
      } else {
        const filterFav = products.filter((prod) => prod.id === Number(id));
        favLs.push(filterFav[0]);
        localStorage.setItem("favorite", JSON.stringify(favLs));
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    location.href = "../html/iniciar-sesion.html";
  }
};