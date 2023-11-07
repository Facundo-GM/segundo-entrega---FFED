
let userArr = JSON.parse(localStorage.getItem("--user"));

if(!userArr){
    location.href = "../html/iniciar-sesion.html"
}
