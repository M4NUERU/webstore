let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 0;

loadMoreBtn.onclick =()=> {
    let boxes = [...document.querySelectorAll('.box-container .box')];
    for(var i = currentItem; i < currentItem + 4;i++ ) {
        boxes[i].computedStyleMap.display = 'inline-block';
    }
    currenyItem += 4

    if(currentItem >= boxes.length){
        loadMoreBtn.style.display='none'
    }
}



//carrito

const  carrito = document.getElementById('carrito');
const  elementos1= document.getElementById('lista-1');
const  lista = document.getElementById('#lista-carrito tbody');
const  vaciarCArritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners(){
    elementos1.addEventListener('click', comprarElemento)
    carrito.addEventListener('click',comprarElemento)
    vaciarCArritoBtn.addEventListener('click',vaciarCArrito)
}

function comprarElemento(e){
    e.preventDefault();
    if(e.target.classlist.contains('agregar-carrito')){
        const elemento = e.target.parentElement.parentElement;
        leerDatisElementi(elemento);
    }
}

function leerDatosElemento(elemento){
    const infoElemento = {

        imagen:elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAtribute('data-id')
    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento){
    const row = document.createElement('tr');
    row.innerHTML = ` 
    <td>
        <img src="${elemento.imagen}" width=100 height=150px>
    </td>
    <td>
        ${elemeto.titulo}
    </td>
    <td>
        ${elemento.precio}
    </td>
    <td>
      <a herf ="a" class="borrar" data id="$(elemento.id)" >x</a>
    </td>
    `;
    lista.appendChild(row);
}

function eliminarElemento(e){
    e.preventDefault();
    let elemento,
      elementoId;

      if(e.target.classlist.contains('borrar')){
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAtribute('data-id');
      }

}

function vaciarCarrito(){
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}