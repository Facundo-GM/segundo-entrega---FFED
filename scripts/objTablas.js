
const pr = JSON.parse(localStorage.getItem("-productos")) || [];

const tabla = document.getElementById("prtl");

if(pr.length > 0){
    pr.forEach(product => {
        tabla.innerHTML += 
        `
        <tr>
            <th scope="row">${product.id}</th>
            <td>${product.nombre}</td>
            <td>${product.valor}</td>
            <td>
                <a href="../html/editarPR.html?=${product.id}"><button type="button" class="btn btn-outline-warning">Editar</button></a>
                <button type="button" class="btn btn-danger">Eliminar</button>
            </td>
        </tr>
        `
    });
}