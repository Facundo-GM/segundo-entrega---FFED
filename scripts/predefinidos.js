const productos = [
    {
        id: 1,
        nombre: "calabaza",
        detalles: "calbaza de jardin para decorar",
        valor: 1500,
        categoria: "decoraciones",
        imagenes: ["","",""],
        stock: 5,
        talle: ["s","xl"],
        estado: "disponible"
    },
    {
        id: 2,
        nombre: "calabera",
        detalles: "calabera de fijar para decorar",
        valor: 2000,
        categoria: "decoraciones",
        imagenes: ["","",""],
        stock: 3,
        talle: ["s","xl"],
        estado: "disponible"
    },
    {
        id: 3,
        nombre: "fantasma",
        detalles: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe error, libero ex sequi molestias rem eos sit cum culpa dignissimos labore eveniet obcaecati id, dolores dolorum aspernatur debitis necessitatibus?",
        valor: 5000,
        categoria: "juguetes",
        imagenes: ["","",""],
        stock: 3,
        estado: "disponible"
    }
];

localStorage.setItem("-productos",JSON.stringify(productos));