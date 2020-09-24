window.onload = () => {
    //Botones para desplebar el menu lateral del ucuario
    let navMenu = document.querySelector('#nav-menu');
    let btnExitMenu = document.querySelector('#btn-exit-menu');

    //Boton para desplegar el sub menu del usuario y sus opciones
    let btnSubMenu = document.querySelector('#btn-sub-menu-user');

    //MENU-------------------------------------------------------------------//
    navMenu.addEventListener('click', ()=>{
        let menu = document.querySelector('#menu');
        menu.classList.toggle('menu-activo');
    });

    btnExitMenu.addEventListener('click', ()=>{
        let menu = document.querySelector('#menu');
        menu.classList.toggle('menu-activo');
    });

    //SUB MENU--------------------------------------------------------------//
    btnSubMenu.addEventListener('click', ()=>{
        let subMenu = document.querySelector('#sub-menu-user');
        subMenu.classList.toggle('sub-activo');
    });
};