const usuarioActual = JSON.parse(localStorage.getItem("--user"));
const usuarios = JSON.parse(localStorage.getItem("--usuarios")) || [];

const tablaUS = document.getElementById("ustl");



if(usuarios.length > 0){

    if(usuarioActual.permisos.editarADM == true){
        usuarios.forEach(sujeto => {
            if(sujeto.id != usuarioActual.id){
                tablaUS.innerHTML += 
                `
                <tr>
                    <th scope="row">${sujeto.id}</th>
                    <td>${sujeto.usuario}</td>
                    <td>${sujeto.mail}</td>
                    <td>
                        <div class="d-flex gap-3 opciones">
                            <a href="../html/editarUS.html?=${sujeto.id}"><button type="button" class="btn btn-outline-warning">Editar</button></a>
                            <button type="button" class="btn btn-danger btnElimUS" data-ideUS="${sujeto.id}">
                                Eliminar
                            </button>
                        </div>
                    </td>
                </tr>
                `
            }
            
        });
    }
    else{
        usuarios.forEach(sujeto => {
            if(sujeto.role != "adm"){
                tablaUS.innerHTML += 
                `
                <tr>
                    <th scope="row">${sujeto.id}</th>
                    <td>${sujeto.usuario}</td>
                    <td>${sujeto.mail}</td>
                    <td>
                        <div class="d-flex gap-3 opciones">
                            <a href="../html/editarUS.html?=${sujeto.id}"><button type="button" class="btn btn-outline-warning">Editar</button></a>
                            <button type="button" class="btn btn-danger btnElimUS" data-ideUS="${sujeto.id}">
                                Eliminar
                            </button>
                        </div>
                    </td>
                </tr>
                `
            }
            
        });
    }

    
}

const btnElimUS = document.querySelectorAll('.btnElimUS');

btnElimUS.forEach((tag)=>{
    tag.addEventListener('click', (event)=> {
        
        const dataIdUS = event.target.getAttribute('data-ideUS');
        
        Swal.fire({
            title: 'ESPERA',
            text: "¿Seguro que quiere borrar este usuario?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Quiero borrarlo !'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Borrado!',
                'Sigamos trabajando.',
                'success'
             );
              const encontrado = usuarios.findIndex((sujeto) => {
                return sujeto.id == dataIdUS;
              });
                
                usuarios.splice(encontrado,1);
                localStorage.setItem("--usuarios",JSON.stringify(usuarios));
                setTimeout(()=>{
                    location.reload();
                },2000);
                
            }
        });
    });
});