
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
                <div class="d-flex gap-3 opciones">
                    <a href="../html/editarPR.html?=${product.id}"><button type="button" class="btn btn-outline-warning">Editar</button></a>
                    <button type="button" class="btn btn-danger btnElim" data-ide="${product.id}">
                        Eliminar
                    </button>
                    <i class="bi bi-star-fill destacar" data-ident="${product.id}"></i>

                </div>
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



const btnDest = document.querySelectorAll('.destacar');


btnDest.forEach((tag)=>{

    const starBase = JSON.parse(localStorage.getItem("-prDest"));
    if(starBase != null){
        btnDest[starBase.id-1].classList.add("colorStar");
    }
    

    
    tag.addEventListener('click', (event)=> {

        const imgDest = JSON.parse(localStorage.getItem("-prDest")) || [];
        const dataIdent = event.target.getAttribute('data-ident');

        let destacado = {
            id:dataIdent,
            image:pr[dataIdent-1].imagenes[0]
        };
        
        if(imgDest.length != 0){
            Swal.fire({
                title: 'ESPERA',
                text: "¿Si destacas este producto se reemplazara el anterior?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Aceptar'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Genial!',
                    `Se destaco el producto de ID: ${dataIdent}`,
                    'success'
                 );
                 
                 const btnDestArray = Array.from(btnDest); // Convierte NodeList a Array

                 const starrr = btnDestArray.findIndex((item) => {
                     return item.getAttribute('data-ident') === imgDest.id;
                 });
                 console.log(starrr)
                 btnDest[starrr].classList.remove("colorStar")
                 localStorage.setItem("-prDest",JSON.stringify(destacado))
                 tag.classList.add("colorStar");
                 //location.reload();
                }
            });
            
        }
        else{
            imgDest.push(destacado)
            localStorage.setItem("-prDest",JSON.stringify(destacado))
            Swal.fire(
                'Bien!',
                `Se destaco el producto de ID: ${dataIdent}!`,
                'success'
            );
            tag.classList.add("colorStar");
            
        }
        
    });
});