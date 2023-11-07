const btnCerrar = document.getElementById("cerrarSes");


const cerrarSesion = ()=>{
    /*
    let usuariosArr = JSON.parse(localStorage.getItem("usuarios"));
    let userArr = JSON.parse(localStorage.getItem("user"));

    
    const sujeto = usuariosArr.findIndex((sujeto) => {
        return sujeto.nombre === userArr.nombre && sujeto.contrasenia === userArr.contrasenia;
    });

    usuariosArr[sujeto].estado = false;
    localStorage.setItem("usuarios",JSON.stringify(usuariosArr));
    */
    setTimeout(()=>{
        //localStorage.removeItem("user");
        location.href = "../html/iniciar-sesion.html";
    },1500);

}


btnCerrar.addEventListener("click",cerrarSesion);