
const pr = JSON.parse(localStorage.getItem("-productos")) || [];

const tabla = document.getElementById("prtl");

if(pr.length > 0){
    pr.forEach(product => {
        tabla.innerHTML += 
        `
        <tr>
            <th scope="row">${product.id}</th>
            <td>${product.nombre}</td>
            <td>${product.valor}$</td>
            <td>
                <a href="../html/editarPR.html?=${product.id}"><button type="button" class="btn btn-outline-warning">Editar</button></a>
                <button type="button" class="btn btn-danger btnElim" data-ide="${product.id}">
                    Eliminar
                </button>
            </td>
        </tr>
        `
    });
}


const btnElim = document.querySelectorAll('.btnElim');

btnElim.forEach((tag)=>{
    tag.addEventListener('click', (event)=> {
        
        const dataId = event.target.getAttribute('data-ide');
        
        Swal.fire({
            title: 'ESPERA',
            text: "¿Seguro que quiere borrar este producto?",
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
              const encontrado = pr.findIndex((item) => {
                return item.id == dataId;
              });
                
                pr.splice(encontrado,1);
                localStorage.setItem("-productos",JSON.stringify(pr));
                setTimeout(()=>{
                    location.reload();
                },2000);
                
            }
        });
    });
});