//Botones para desplebar el menu lateral del ucuario
var navMenu = document.querySelector('#nav-menu');
var btnExitMenu = document.querySelector('#btn-exit-menu');

//Boton para desplegar el sub menu del usuario y sus opciones
var btnSubMenu = document.querySelector('#btn-sub-menu-user');

//MENU-------------------------------------------------------------------//
navMenu.addEventListener('click', ()=>{
    var menu = document.querySelector('#menu');
    menu.classList.toggle('menu-activo');
});

btnExitMenu.addEventListener('click', ()=>{
    var menu = document.querySelector('#menu');
    menu.classList.toggle('menu-activo');
});

//SUB MENU--------------------------------------------------------------//
btnSubMenu.addEventListener('click', ()=>{
    var subMenu = document.querySelector('#sub-menu-user');
    subMenu.classList.toggle('sub-activo');
});


// efecto.addEventListener('mouseover', ()=>{
//     alert('hola hola hola');
// });
