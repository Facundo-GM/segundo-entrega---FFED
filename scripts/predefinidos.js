const productos = [
    
    {
        id: 1,
        nombre: "Sangre roja artificial",
        detalles: "calbaza de jardin para decorar",
        valor: 1000,
        categoria: "Maquillajes",
        imagenes: ["https://bazarani.com/23497-large_default/sangre-artificial-de-283-mililitros-de-color-rojo.jpg","https://m.media-amazon.com/images/I/71xFmWwK+XL.jpg"],
        stock: 23,
        estado: "disponible"
    },
    {
        id: 2,
        nombre: "Sangre zombie artificial",
        detalles: "calbaza de jardin para decorar",
        valor: 1100,
        categoria: "Maquillajes",
        imagenes: ["https://media.boohoo.com/i/boohoo/dzz66193_red_xl_1/mujer-spray-de-sangre-falsa-para-halloween"],
        stock: 15,
        estado: "disponible"
    },
    {
        id: 3,
        nombre: "Kit de pintura body painting",
        detalles: "calbaza de jardin para decorar",
        valor: 800,
        categoria: "Maquillajes",
        imagenes: ["https://http2.mlstatic.com/D_NQ_NP_902924-MLA52004813336_102022-O.webp"],
        stock: 8,
        estado: "disponible"
    },
    {
        id: 4,
        nombre: "Disfraz de Payaso amarillo",
        detalles: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe error, libero ex sequi molestias rem eos sit cum culpa dignissimos labore eveniet obcaecati id, dolores dolorum aspernatur debitis necessitatibus?",
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
        detalles: "",
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
        detalles: "",
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
        detalles: "",
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
        detalles: "",
        valor: 1550,
        categoria: "Accesorios",
        imagenes: ["https://www.disfracesjarana.com/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/t/r/tridente-desmontable.jpg"],
        stock: 15,
        estado: "disponible"
    },
    {
        id: 9,
        nombre: "Cuchillo en cabeza",
        detalles: "",
        valor: 1920,
        categoria: "Accesorios",
        imagenes: ["https://www.disfracesjarana.com/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/d/i/diadema-cuchillo-carnicero-halloween.jpg"],
        stock: 12,
        estado: "disponible"
    },
    {
        id: 10,
        nombre: "Hoz de la muerte",
        detalles: "",
        valor: 1280,
        categoria: "Accesorios",
        imagenes: ["https://www.disfracesjarana.com/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/g/u/guadana-desmontable.jpg"],
        stock: 8,
        estado: "disponible"
    },
    {
        id: 11,
        nombre: "Alas de pluma oscuras",
        detalles: "",
        valor: 3400,
        categoria: "Accesorios",
        imagenes: ["https://www.disfracesjarana.com/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/8/6/8671n-simple-8671n.jpg"],
        stock: 3,
        estado: "disponible"
    },
    {
        id: 12,
        nombre: "Telaraña falsa",
        detalles: "",
        valor: 1500,
        categoria: "Decoraciones",
        imagenes: ["https://static1.funidelia.com/22268-f6_big2/telarana-20-grs.jpg"],
        stock: 10,
        estado: "disponible"
    },
    {
        id: 13,
        nombre: "Calabaza luminosa",
        detalles: "",
        valor: 2300,
        categoria: "Decoraciones",
        imagenes: ["https://static1.funidelia.com/470621-f6_big2/calabaza-luminosa-decoracion-halloween.jpg"],
        stock: 23,
        estado: "disponible"
    },
    {
        id: 14,
        nombre: "Guirnaldas de brujas",
        detalles: "",
        valor: 800,
        categoria: "Decoraciones",
        imagenes: ["https://static1.funidelia.com/27914-f6_big2/guirnalda-fantasia-brujas-halloween-23-x-300-cm.jpg"],
        stock: 30,
        estado: "disponible"
    },
    {
        id: 15,
        nombre: "Pegatinas adhesivas de sangre",
        detalles: "",
        valor: 1200,
        categoria: "Decoraciones",
        imagenes: ["https://static1.funidelia.com/528059-f6_big2/pegatinas-adhesivas-de-sangre-halloween.jpg"],
        stock: 54,
        estado: "disponible"
    },
    {
        id: 16,
        nombre: "Esqueleto inflable",
        detalles: "",
        valor: 3500,
        categoria: "Decoraciones",
        imagenes: ["https://static1.funidelia.com/33050-f6_big2/esqueletos-hinchables.jpg"],
        stock: 2,
        estado: "disponible"
    }
];

localStorage.setItem("-productos",JSON.stringify(productos));