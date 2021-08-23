/* Funcionalidad para el la Barra de Menus con el icono Hamburguesa. */
let navbar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
    cartItem.classList.remove("active");
};

/* Funcionalidad para la Barra de Busqueda con el icono de Busqueda */
let searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle("active");
    navbar.classList.remove("active");
	cartItem.classList.remove("active");
};

/* Funcionalidad para la Tarjeta de Items con el icono del carrito de compras.*/
let cartItem = document.querySelector(".cart-item-container");
document.querySelector("#cart-btn").onclick = () => {
    cartItem.classList.toggle("active");
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
};

window.onscroll = () => {
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
    cartItem.classList.remove("active");
};

