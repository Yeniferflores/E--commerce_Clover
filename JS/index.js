
const nav = document.querySelector("#nav-menu");
const abrir = document.querySelector("#open-menu")
const cerrar = document.querySelector("#close-menu")
const verCarrito = document.getElementById ("verCarrito")
const modalContainer = document.getElementById("modal-container")
const cantidadCarrito = document.getElementById("cantidadCarrito")




abrir.addEventListener( "click", () => {
    nav.classList.add("visible");
    
})

cerrar.addEventListener ("click", () => {
    nav.classList.remove ("visible")
})

function clothes (id, title, img, price, detail, stock, cantidad, color){

        this.id= id,
        this.title= title,
        this.img= img,
        this.price= price,
        this.detail= detail,
        this.cantidad = cantidad,
        this.stock= stock,
        this.color= color
    }




let carrito =  JSON.parse(localStorage.getItem("guardarCarrito")) || [];

const contenedor = document.getElementById("container_productos")

listaProductos.forEach((prod)=> {
            const div = document.createElement ("div");
            div.className =`clothes`;
            div.innerHTML = `<img  src=${prod.img} alt=""> 
                            <h4> ${prod.title} </h4>  
                            <br>
                            <h5> $${prod.price} </h5>
                            <br> 
                            <p>Cantidad: ${prod.cantidad}</p>`;

            contenedor.append(div); 


        let comprar = document.createElement("button");
            comprar.className = "btn-comprar";
            comprar.innerText = "Comprar" ;
            
            div.append(comprar)

        comprar.addEventListener("click", ()=>{
            const repetido = carrito.some ((productoRepetido)=> productoRepetido.id === prod.id);
            console.log(repetido );
            if (repetido){
                carrito.map ((element)=>{
                    if (element.id === prod.id){    
                        element.cantidad++;
                    }
                });
            }else {
            carrito.push({
                id: prod.id,
                img: prod.img,
                title: prod.title,
                price: prod.price,
                cantidad: prod.cantidad,
            })

            carritoCounter();
            save();

        };
       
        
    })
             
});


//set items --> enviamos los productos 

const save = () =>{
    localStorage.setItem("guardarCarrito", JSON.stringify(carrito));
}


//ger items --> recibe los productos


   






    











