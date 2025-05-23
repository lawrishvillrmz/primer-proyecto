
//seleccionar elementos 
const title = document.getElementById("txt");
console.log(title);

const image = document.getElementsByClassName("header__logo");
//console.log(image[0]);

const tags = document.getElementsByTagName("section");
console.log(tags[6]);

const elem = document.querySelector(".logo");
console.log(elem);
const rowProduct = document.querySelector('.row-product');
//crear elementos y agreegar atributes
//const parent = documen.querySelector(".products");
const newElem = document.createElement("section");

newElem.setAttribute("class" ,"new"); /**cambia de nombre a la clase */
//parent.append(newElem);

//--------------------------------------------------------------------
//Atributos
const logo = document.querySelector(".header__logo");
//logo.setAttribute("src", "img/sss.jpg") //cambiar imagen de un atributo existente 
/*
console.log(logo.getAttribute("src"));
console.log(logo.hasAttribute("src"));
*/
//logo.removeAttribute("src");
/*
if(logo.hasAttribute("src")){
 alert("tiene src!")
}
*/

// ----------css classes
const parent2 = document.querySelector(".products"); //selecciona la seccion
const parent3 = parent2.firstElementChild; 
const price = parent3.lastElementChild;//selecciona el ultimo hijo del elemento 

//console.log(parent3);
//console.log(price);
price.classList.add("red");//classlist devuelve coleccion de metodos. red esta en ssas
//price.classList.replace("red", "blue");
//price.classList.remove("red"); //remover clases

//-----------Modificar texto
const button = document.getElementsByTagName("button");
console.log(button[0].innerText);
//button[0].innerText = "BUY"; 

//------------Style Modificar
console.log(button[0].style);
//button[0].style.backgroundColor = "gray";

//-----Eventos 
const elementButton = button[0];
//target.addEventListener(event, function);
elementButton.addEventListener('click',() => {
    //elementButton.style.backgroundColor = "red";
    elementButton.classList.toggle("toggle");
    //console.log("click!!");
});
/*
const iconRemove = document.querySelectorAll(".remove");
console.log(iconRemove);

iconRemove.forEach(elem => { //forechar itera sobre el array 
    elem.addEventListener("click", () => {
        const elemParent = elem.parentElement;
        elemParent.remove();
    });
});
*/
const header = document.querySelector("header"); //seleccionar el header 
const cartIcon = document.querySelector(".header__carrito ");; //seleccionar el ultimoelemnto de header
const cart = document.querySelector(".cart"); //seleccionamos carrito
const cartEmpty = document.querySelector('.cart-empty');
const containerCartProducts = document.querySelector('.container-cart-products');
const burger = document.querySelector(".burger");
const headerMenu =document.querySelector(".header__menu");
headerMenu.addEventListener("click", () => {
    burger.classList.toggle("show"); //agregr clase show de .scss para que regrese la seccion visible y agregandole transicion en el .cart
})

cartIcon.addEventListener("click", () => {
    cart.classList.toggle("show"); //agregr clase show de .scss para que regrese la seccion visible y agregandole transicion en el .cart
})
//https://www.w3schools.com/jsref/dom_obj_event.asp
const productos = document.querySelectorAll(".mouse");

productos.forEach(producto => {
    producto.addEventListener("mouseenter", () => {
        producto.style.opacity = "1"; // Reduce opacidad al pasar el cursor
    });

    producto.addEventListener("mouseleave", () => {
        producto.style.opacity = "1"; // Vuelve a la opacidad normal al salir
    });
});

//agrandar la imagen al pasar cursor
const images = document.querySelectorAll(".products__img");

images.forEach(image => {
    image.addEventListener("mouseenter", () => {
        image.classList.add("img-large");
    });

    image.addEventListener("mouseleave", () => {
        image.classList.remove("img-large");
    });
});

//CERRAR CARRITO CON X

const closeCart = document.querySelector(".cartX"); 

closeCart.addEventListener("click", () => {
    cart.classList.remove("show");
});

const closeCartBurger = document.querySelector(".burger__x"); 

closeCartBurger.addEventListener("click", () => {
    burger.classList.remove("show");
});
/*
//agregar al carrito 
document.addEventListener("DOMContentLoaded", () => {
    const carrito = []; //se crea array en el carrito 
    const btnAgregar = document.querySelectorAll(".btnAdd"); //btnAgregar
    const contenedorCarrito = document.querySelector(".cart"); //carrito
    const carritoArticulos = document.querySelector(".cart__articulos"); //cada articulo uno por uno
    const badge = document.querySelector(".badge"); //badge agregar

    btnAgregar.forEach((boton) => { //forEach itera sobre el array por cada uno de los elementso
        boton.addEventListener("click", (event) => {
            const producto = event.target.closest(".products__articulos"); //event target elemento exacto que se dio clic
            const titulo = producto.querySelector(".products__titulo").innerText; //selecciona texto visible 
            const precio = producto.querySelector(".products__precio").innerText;
            const imgSrc = producto.querySelector(".products__img").src; //selecciona la imagenb .src

            agregarAlCarrito(titulo, precio, imgSrc);
        });
    }); */
/*
    function agregarAlCarrito(titulo, precio, imgSrc) {
        // Crear objeto del producto
        const producto = { titulo, precio, imgSrc };
        carrito.push(producto);

        // Actualizar la vista del carrito
        actualizarCarrito();
    }
*/
    const productsList = document.querySelector('.products');
    let allProducts = [];
    let valorTotal = document.querySelector('.total-pagar');

    const countProducts = document.querySelector('#contador-productos');

     productsList.addEventListener('click', e => {

        if(e.target.classList.contains('btnAdd')){
            const product = e.target.parentElement;

            //console.log(product.querySelector('h3').textContent) //validamos que nos de arroge el nombre del producto 
       
            const infoProducts = {
                quantity: 1,
                img: product.querySelector('img').src,
                title: product.querySelector('h3').textContent,
                price: product.querySelector('p').textContent,
            }
            //some recorre todos los objetos, valida si ya existe o no el producto con true o false
            const existe = allProducts.some(product => product.title === infoProducts.title);

    
           //console.log(existe);
            if(existe) {
                //
                const products = allProducts.map(product => {
                    if(product.title == infoProducts.title ){
                        product.quantity++;
                        return product;
                    }
                    else {
                        return product;
                    }
                });
                allProducts = [...products];
            } else {
            // console.log(infoProducts) //validar que nos de la informacion
            allProducts = [...allProducts, infoProducts];
            }
           showHTML(); //aqui llamamos a la funcion  para agregar al carrito y ver en cart
        }
        //console.log(allProducts) 

     });
    

     document.addEventListener("DOMContentLoaded", function () {
        const item = document.querySelector("#item__Cart"); // Ajusta el selector según tu estructura
        if (item) {
          item.remove();
        }
      
      });

     rowProduct.addEventListener('click', (e) => {
	    if (e.target.classList.contains('icon-close')) {
		    const product = e.target.parentElement;
		    const title = product.querySelector('p').textContent; //usar un id unico para cada pruoducto en vez de tittle 

		    allProducts = allProducts.filter(
			    product => product.title !== title //diferente a
		    );

		   // console.log(allProducts);
		   showHTML()
	    }
    });


     //fincion mostrar html 
    
     const showHTML = () => {

        if(!allProducts.length){
            containerCartProducts.innerHTML= `
            <p class="cart-empty"> El carrito esta vacio </p>
            `
        }

            //limpiar html
            rowProduct.innerHTML='';

            let total = 0;
            let totalOfProducts = 0;

        allProducts.forEach(product => {
            const containerProduct = document.createElement('div')
            containerProduct.classList.add('cart-product')
            containerProduct.innerHTML =  `
            
            <div  class="info-cart-product"> 
                <span class="cantidadProductoCarrito">${product.quantity}</span>            
                <img class="cart__img" src= "${product.img}" alt="">
                <p class="cart__tituloarticulo">${product.title}</p>
                <p class="cart__precio">${product.price}</p>
            </div>
                     <svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="icon-close"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
            
            `;
            
            rowProduct.append(containerProduct);

            total =
			total + parseInt(product.quantity * product.price.replace(/,/g, "").slice(1));
		totalOfProducts = totalOfProducts + product.quantity;
	});

	valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;
};
