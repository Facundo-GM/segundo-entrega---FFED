const productos = [
    
    {
        id: 1,
        nombre: "Sangre roja artificial",
        detalles: "Añade un toque espeluznante a tu disfraz de Halloween con esta sangre roja artificial. Perfecta para simular heridas, cortes y escenas terroríficas. Esta sangre de alta calidad es ideal para maquillajes de terror y efectos especiales.",
        valor: 1000,
        categoria: "Maquillajes",
        imagenes: ["https://http2.mlstatic.com/D_NQ_NP_992734-MLA71481156852_092023-O.webp"],
        stock: 23,
        estado: "disponible"
    },
    {
        id: 2,
        nombre: "Sangre zombie artificial",
        detalles: "Añade un toque aterrador a tu disfraz de zombie en Halloween con esta sangre zombie artificial. Este spray de sangre falsa es perfecto para crear efectos espeluznantes y realistas en tu maquillaje. Con su color y textura impactantes, hará que parezca que acabas de salir de una película de terror",
        valor: 1100,
        categoria: "Maquillajes",
        imagenes: ["https://media.boohoo.com/i/boohoo/dzz66193_red_xl_1/mujer-spray-de-sangre-falsa-para-halloween"],
        stock: 15,
        estado: "disponible"
    },
    {
        id: 3,
        nombre: "Kit de pintura body painting",
        detalles: "Desata tu creatividad en Halloween con nuestro completo kit de pintura body painting. Este kit incluye una variedad de colores vibrantes y fáciles de aplicar que te permitirán transformar tu cuerpo en una obra de arte aterradora. Ya sea que desees convertirte en un monstruo, un esqueleto o cualquier otro personaje espeluznante",
        valor: 800,
        categoria: "Maquillajes",
        imagenes: ["https://http2.mlstatic.com/D_NQ_NP_902924-MLA52004813336_102022-O.webp"],
        stock: 8,
        estado: "disponible"
    },
    {
        id: 4,
        nombre: "Disfraz de Payaso amarillo",
        detalles: "¡Prepárate para dar escalofríos en la noche de Halloween con nuestro espeluznante disfraz de Payaso amarillo! Este disfraz aterrador te transformará en el payaso más terrorífico que hayas visto. Con detalles siniestros y colores vibrantes, este disfraz es perfecto para asustar a tus amigos y familiares",
        valor: 8300,
        categoria: "Disfraces",
        imagenes: ["https://www.disfracesjarana.com/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/d/i/disfraz-de-payaso-terror-adulto.jpg"],
        stock: 3,
        talle: ["m","xl"],
        estado: "disponible"
    },
    {
        id: 5,
        nombre: "Disfraz de Catrina",
        detalles: "Embárcate en una celebración de Halloween con estilo y misterio al lucir nuestro elegante disfraz de Catrina. Inspirado en la tradicional calavera mexicana, este disfraz te transformará en una figura enigmática y hermosa",
        valor: 9500,
        categoria: "Disfraces",
        imagenes: ["https://www.disfracesjarana.com/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/8/0/80937-configurable-80937-catrina-talla-m9.jpg","https://www.disfracesjarana.com/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/d/i/disfraz-de-catrina-calavera-para-mujer-espalda.jpg"],
        stock: 8,
        talle: ["s","m"],
        estado: "disponible"
    },
    {
        id: 6,
        nombre: "Disfraz de Bruja",
        detalles: "Conviértete en la bruja más temible y poderosa de la noche de Halloween con nuestro increíble disfraz de bruja satánica. Este disfraz está diseñado para hacerte destacar, con detalles oscuros y misteriosos que te transformarán en una auténtica hechicera",
        valor: 12000,
        categoria: "Disfraces",
        imagenes: ["https://www.disfracesjarana.com/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/d/i/disfraz-de-bruja-satanica-para-mujer.jpg","https://www.disfracesjarana.com/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/d/i/disfraz-de-bruja-satanica-para-mujer-espalda.jpg"],
        stock: 5,
        talle: ["s","m"],
        estado: "disponible"
    },
    {
        id: 7,
        nombre: "Disfraz de Vampiro",
        detalles: "Abraza la oscuridad de la noche en Halloween con nuestro misterioso disfraz de Vampiro. Este disfraz oscuro y elegante te convertirá en un vampiro seductor y aterrador.¡Sé el señor de la noche con nuestro disfraz de Vampiro!",
        valor: 11800,
        categoria: "Disfraces",
        imagenes: ["https://www.disfracesjarana.com/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/d/i/disfraz-de-vampiro-oscuro-para-hombre.jpg","https://www.disfracesjarana.com/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/d/i/disfraz-de-vampiro-oscuro-para-hombre-espalda.jpg"],
        stock: 5,
        talle: ["m","l","xl"],
        estado: "disponible"
    },
    {
        id: 8,
        nombre: "Tridente del diablo",
        detalles: "Completa tu look infernal en Halloween con nuestro tridente del diablo. Este accesorio icónico te otorgará una apariencia demoníaca y aterradora. Perfecto para complementar disfraces de demonios, diablos u otros personajes de terror",
        valor: 1550,
        categoria: "Accesorios",
        imagenes: ["https://www.disfracesjarana.com/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/t/r/tridente-desmontable.jpg"],
        stock: 15,
        estado: "disponible"
    },
    {
        id: 9,
        nombre: "Cuchillo en cabeza",
        detalles: "¿Quieres agregar un toque espeluznante a tu disfraz de Halloween? Nuestro cuchillo en cabeza es el accesorio perfecto. Esta diadema con un cuchillo ensangrentado clavado en la cabeza crea una apariencia aterradora y siniestra. ¡Serás el centro de atención en cualquier fiesta de Halloween!",
        valor: 1920,
        categoria: "Accesorios",
        imagenes: ["https://www.disfracesjarana.com/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/d/i/diadema-cuchillo-carnicero-halloween.jpg"],
        stock: 12,
        estado: "disponible"
    },
    {
        id: 10,
        nombre: "Hoz de la muerte",
        detalles: "Este accesorio esencial para los amantes de lo macabro y lo misterioso añadirá un toque sombrío a tu disfraz. La guadaña es desmontable y fácil de llevar, lo que te permitirá personificar a la muerte con estilo",
        valor: 1280,
        categoria: "Accesorios",
        imagenes: ["https://www.disfracesjarana.com/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/g/u/guadana-desmontable.jpg"],
        stock: 8,
        estado: "disponible"
    },
    {
        id: 11,
        nombre: "Alas de pluma oscuras",
        detalles: "Estas alas crean un efecto dramático y misterioso que te transformará en un ser mágico o angelical con un toque siniestro. Perfectas para complementar disfraces de ángeles caídos, criaturas de la noche o personajes de fantasía",
        valor: 3400,
        categoria: "Accesorios",
        imagenes: ["https://www.disfracesjarana.com/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/8/6/8671n-simple-8671n.jpg"],
        stock: 3,
        estado: "disponible"
    },
    {
        id: 12,
        nombre: "Telaraña falsa",
        detalles: "Crea una atmósfera escalofriante en tu hogar en Halloween con nuestra telaraña falsa. Esta decoración es perfecta para darle a tu espacio un toque tenebroso y espeluznante. La telaraña se puede estirar y adaptar fácilmente, lo que te permite decorar cualquier rincón de manera rápida",
        valor: 1500,
        categoria: "Decoraciones",
        imagenes: ["https://static1.funidelia.com/22268-f6_big2/telarana-20-grs.jpg"],
        stock: 10,
        estado: "disponible"
    },
    {
        id: 13,
        nombre: "Calabaza luminosa",
        detalles: " Esta decoración de calabaza es perfecta para añadir un toque festivo y espeluznante a tu ambiente. Con su suave luz, crea una atmósfera misteriosa y festiva que se adapta perfectamente a la temporada de Halloween",
        valor: 2300,
        categoria: "Decoraciones",
        imagenes: ["https://static1.funidelia.com/470621-f6_big2/calabaza-luminosa-decoracion-halloween.jpg"],
        stock: 23,
        estado: "disponible"
    },
    {
        id: 14,
        nombre: "Guirnaldas de brujas",
        detalles: "Decora tu espacio en Halloween con nuestras divertidas guirnaldas de brujas. Estas guirnaldas temáticas de brujas añaden un toque festivo y alegre a tu ambiente. Con imágenes de brujas volando en sus escobas",
        valor: 800,
        categoria: "Decoraciones",
        imagenes: ["https://static1.funidelia.com/27914-f6_big2/guirnalda-fantasia-brujas-halloween-23-x-300-cm.jpg"],
        stock: 30,
        estado: "disponible"
    },
    {
        id: 15,
        nombre: "Pegatinas adhesivas de sangre",
        detalles: "Estas pegatinas son fáciles de aplicar en ventanas, espejos o cualquier superficie lisa para crear efectos sangrientos y aterradores. Perfectas para simular heridas, salpicaduras de sangre o escenas de crimen ficticias",
        valor: 1200,
        categoria: "Decoraciones",
        imagenes: ["https://static1.funidelia.com/528059-f6_big2/pegatinas-adhesivas-de-sangre-halloween.jpg"],
        stock: 54,
        estado: "disponible"
    },
    {
        id: 16,
        nombre: "Esqueleto inflable",
        detalles: " Este esqueleto gigante es fácil de inflar y colocar en tu jardín, patio o cualquier espacio exterior.Ideal para fiestas al aire libre o simplemente para asustar a los vecinos",
        valor: 3500,
        categoria: "Decoraciones",
        imagenes: ["https://static1.funidelia.com/33050-f6_big2/esqueletos-hinchables.jpg"],
        stock: 2,
        estado: "disponible"
    }
];

const existProduct = JSON.parse(localStorage.getItem(productos)) || [];

if(existProduct.length == 0){
    localStorage.setItem(productos,JSON.stringify(productos));
}



const productCardsContainer = document.getElementById("productCards"); //En esta línea, se obtiene una referencia al elemento HTML con el ID "productCards" y se almacena en la variable productCardsContainer. Esto se utiliza para posteriormente agregar las tarjetas de productos al contenedor.

productos.forEach(producto => {   // Aquí comienza un bucle forEach que recorrerá un array llamado productos, el cual se supone que contiene objetos que representan productos.
    
    const card = document.createElement("div");  // Dentro del bucle, se crea un nuevo elemento HTML div y se almacena en la variable card. Este div se utilizará como el contenedor de cada tarjeta de producto.
    //card.classList.add("cardProduct"); // Se agrega la clase CSS "product-card" al elemento div creado en la línea anterior. Esto le dará un estilo específico a las tarjetas de productos.
    card.innerHTML = ` 
        
        

        <div class="card h-100 d-flex" style="width: 95%;">
            
            <div class="title-div">
            <h3>${producto.nombre}</h3>
            </div>
            <div class="contenedor-div">
            <img src="${producto.imagenes}" class="card-img-top square-image" alt="${producto.nombre}">
            </div>

                <div class="card-body">
           
                    <h3>Precio: $${producto.valor}</h3>

                    <a href="../html/producto.html?id=${producto.id}" class="btn btn-primary botonGoClass">
                    Ver Mas</a>
                    <button class='btn btn-success' onclick="addCart(${producto.id})">Añadir al Carrito</button>

                </div>
        </div>

    `;

     // Agrega la tarjeta al contenedor
    productCardsContainer.appendChild(card);
});


