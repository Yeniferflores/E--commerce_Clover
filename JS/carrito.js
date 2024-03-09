const diseñoCarrito = ()=>{
    modalContainer.innerHTML= "";
    modalContainer.style.display = "flex";
    const modalCarrito = document.createElement("div");
    modalCarrito.className = "modal";
    modalCarrito.innerHTML= `<h3 class="modal-title">Carrito de compras</h3>
                           `;

    modalContainer.append(modalCarrito);

    const modalButton = document.createElement("h1");
    modalButton.className = "modal-btn";
    modalButton.innerHTML= `<i class="bi bi-x-lg"></i>`;

    modalCarrito.append(modalButton)

    modalButton.addEventListener("click",()=>
    modalContainer.style.display="none")


   
    
    carrito.forEach((producto)  =>{
    const carritoContent = document.createElement("div");
    carritoContent.className = "content";
    carritoContent.innerHTML = `
    <img  src=${producto.img} alt=""> 
    <h4> ${producto.title} </h4>  
    <br>
    <h5> Precio: $${producto.price} </h5>
    <br> 
    <button class="restar" > - </button>
    <p>${producto.cantidad}</p>
    <button class="sumar" > + </button>
    <br>
    <p>Total: $${producto.cantidad * producto.price}</p>
    <br>
    
`

    modalContainer.append(carritoContent)

    let restar = carritoContent.querySelector(".restar");

    restar.addEventListener("click",()=> {
        if (producto.cantidad !== 1){
            producto.cantidad --;
        }
        save()
        diseñoCarrito();
    })


    let sumar = carritoContent.querySelector(".sumar");

    sumar.addEventListener("click", () =>{
        producto.cantidad ++;
        
        
        diseñoCarrito(); 
        save();   
    })

 //creamod el boton eliminar 

    const deleteProducto = document.createElement("span");
    deleteProducto.className = "btn-delete";
    deleteProducto.innerHTML = `<i class="bi bi-trash3"></i>`;

    carritoContent.appendChild(deleteProducto)

//le asignamos un evento click y la funcion eliminar producto para que la ejecute
    deleteProducto.addEventListener("click", eliminarProducto)

    

})
     
const totalCarrito= carrito.reduce ( (acc, el)=> acc + el.price * el.cantidad, 0);

const total = document.createElement("div");
total.className = "totalCarrito";
total.innerHTML = `Total a pagar: ${totalCarrito}`;

modalContainer.append(total)
}


verCarrito.addEventListener("click", diseñoCarrito);

//creamos una funcion en donde buscamos el id que el cliente quiere eliminar

const eliminarProducto = ()=>{
    let findId = carrito.find ((producto)=> producto.id)
    carrito = carrito.filter((carritoId)=>{
        return carritoId !== findId;
    })
    carritoCounter();
    save();
    diseñoCarrito();
}

const carritoCounter = () => {
    cantidadCarrito.style.display ="block";

    const carritoGuardado = carrito.length;

    localStorage.setItem("carritoGuardado", JSON.stringify(carritoGuardado));

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoGuardado"));
}
carritoCounter();







