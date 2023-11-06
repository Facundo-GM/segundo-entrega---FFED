const stars = document.querySelectorAll(".star")
const products=JSON.parse(localStorage.getItem("-productos"))
const idProduct = location.search.split("=")[1];
const filterProduct = products.filter((prod)=> prod.id === Number(idProduct))
const divProduct =document.getElementById("divProduct")
const thumb = slider.querySelector('.thumb');

thumb.onmousedown = function(event) {
  event.preventDefault(); 

  let shiftX = event.clientX - thumb.getBoundingClientRect().left;
  

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(event) {
  const newLeft   = event.clientX - shiftX - slider.getBoundingClientRect().left;

    
    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = slider.offsetWidth - thumb.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    thumb.style.left = newLeft + 'px';
  }

  function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }

};

thumb.ondragstart = function() {
  return false;
};


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


divProduct.innerHTML=filterProduct.map((producto)=>
`  <div class=" col-sm-12 col-lg-4">
<div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="${producto.imagenes[0]}"
        class="d-block w-100" alt="Articulo para halloween">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
    data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
    data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
<div class="col-sm-12 col-lg-4">
<h2>${producto.nombre}<button type="button" class="boton-fav" onclick="addFav(${producto.id})"><i class="bi bi-heart-fill"></i></button></h2>
<h3 class="my-3">Precio: $${producto.valor}</h3>
<p>Envios al todo el pais.</p>
<hr>
<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#flush-collapseOne1" aria-expanded="false" aria-controls="flush-collapseOne">
        Descripcion
      </button>
    </h2>
    <div id="flush-collapseOne1" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">${producto.detalles}</div>
    </div>
  </div>
</div>
<hr>
<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#flush-collapseOne2" aria-expanded="false" aria-controls="flush-collapseOne">
        Envios 
      </button>
    </h2>
    <div id="flush-collapseOne2" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <p>•Envío Standard: $ 300. Entrega aproximada 20 días laborables (sin tener en cuenta los fines
          de semana).</p>
        <p>•Envío Express: $ 500. Entrega aproximada 4 días laborables (sin tener en cuenta los fines
          de semana).</p>
      </div>
    </div>
  </div>
</div>
<hr>
<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
        data-bs-target="#flush-collapseOne3" aria-expanded="false" aria-controls="flush-collapseOne">
        Medios de pago
      </button>
    </h2>
    <div id="flush-collapseOne3" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><span>¿Cuáles son las formas de pago aceptadas en HalloFest?</span>
        <img src="https://www.edstiendas.org.ar/wp-content/uploads/2021/01/formas-pago-3.png" alt=""
          class="img-fluid">
      </div>
    </div>
  </div>
</div>
<hr>
</div>
<div class="col-sm-12 col-lg-4">
<div class="card">
  <div class="card-body">
    <div class="d-flex  justify-content-between">
      <h5 class="card-title">Talla:</h5>
      <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
        class="boton-prod btn btn-outline-dark">
        📏 Guia de tallas
      </button>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog ">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Tallas:</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img
                src="https://d26lpennugtm8s.cloudfront.net/stores/627/888/rte/Guia%20de%20Talles%20General.jpg"
                alt="" height="600px" width="600px" class="img-fluid">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Entendio</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" my-2 text-center">
      <a href="./404.html"><button type="button" class="btn btn-warning boton-prod1">S</button></a>
      <a href="./404.html"><button type="button" class="btn btn-warning boton-prod1">M</button></a>
      <a href="./404.html"><button type="button" class="btn btn-warning boton-prod1">L</button></a>
      <a href="./404.html"><button type="button" class="btn btn-warning boton-prod1">XL</button></a>
      <a href="./404.html"><button type="button" class="btn btn-warning boton-prod1">XXL</button></a>
      <a href="./404.html"><button type="button" class="btn btn-warning boton-prod1">XXXL</button></a>
    </div>
    <div class="text-center">
      <button type="button" class="btn btn-success" onclick="addCar(${producto.id})">🛒 Agregar a carrito</button>
    </div>

  </div>
</div>
<div class="card my-3">
  <div class="card-body">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <h5>Atener en cuenta:</h5>
            <hr>
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne4" aria-expanded="false" aria-controls="flush-collapseOne">
              Cuidados
            </button>
          </h2>
          <div id="flush-collapseOne4" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              <p class="text-dark">Para asegurarte de que tus disfraces de Halloween se mantengan en perfecto estado temporada tras temporada, sigue estas instrucciones de cuidado y mantenimiento. En primer lugar, antes de guardarlos, asegúrate de lavar o limpiar en seco el disfraz según las indicaciones de la etiqueta. Evita doblarlos de manera brusca, en su lugar, guárdalos colgados o enrollados en un lugar fresco y oscuro para prevenir arrugas. Si tu disfraz tiene accesorios o detalles frágiles, como lentejuelas o plumas, protégelos de daños asegurándote de que estén bien sujetos. Además, mantenlos alejados de la humedad y la luz solar directa, ya que pueden causar decoloración. Si es necesario, repara cualquier rasgadura o desgaste menor antes de guardarlos. Siguiendo estas pautas, podrás disfrutar de tus disfraces de Halloween durante muchos años.</p>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne5" aria-expanded="false" aria-controls="flush-collapseOne">
              Devoluciones
            </button>
          </h2>
          <div id="flush-collapseOne5" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              <p>El cliente deberá notificarnos la intención de devolver el producto y hacer efectivo el envío del
                mismo hacia nuestros almacenes, dentro de un plazo máximo de 14 días naturales, contados desde la
                fecha de entrega. El producto deberá estar libre de cualquier uso o modificación.</p>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>
</div>
`)

const addCar = async (id) => {
    const existUser = JSON.parse(localStorage.getItem("user"));
    const carLS = JSON.parse (localStorage.getItem("carrito")) || [];
    const filterCar = carLS.filter((prod)=> prod.id === id);
    if(existUser){
     try {
        if(filterCar.length > 0){
            alert("Este producto ya se encuentra en su carrito")
        }else{
            const filterProduct = products.filter((prod)=> prod.id === Number(id))
            carLS.push(filterProduct[0])
            localStorage.setItem("carrito",JSON.stringify(carLS))
        }
     }  catch(error){
        console.log("error")
     }
    }else {
        location.href="../html/iniciar-sesion.html"
    }
   
}

const addFav = async (id) => {
    const existUser = JSON.parse(localStorage.getItem("user")) ;
    const favLS = JSON.parse (localStorage.getItem("favoritos")) || [];
    const filterfav = favLS.filter((prod)=> prod.id === id);

    if(existUser){
        try {
           if(filterfav.length > 0){
               alert("Este producto ya se encuentra en su carrito")
           }else{
               const filterProduct = products.filter((prod)=> prod.id === Number(id))
               favLS.push(filterProduct[0])
               localStorage.setItem("favoritos",JSON.stringify(favLS))
           }
        }  catch(error){
           console.log("error")
        }
       }else {
           location.href="../html/iniciar-sesion.html"
       }
}


