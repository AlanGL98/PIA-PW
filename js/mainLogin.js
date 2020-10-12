window.onload = () => {
    let login = document.querySelector('#login');
    let createAccount = document.querySelector('#create-account');

    login.addEventListener('click', ()=>{
        let panelLogin = document.querySelector('#panel-login');
        let panelCrear = document.querySelector('#panel-create-account');
        panelLogin.classList.add('activar');
        panelCrear.classList.remove('activar');
    });

    createAccount.addEventListener('click', ()=>{
        let panelLogin = document.querySelector('#panel-login');
        let panelCrear = document.querySelector('#panel-create-account');
        panelLogin.classList.remove('activar');
        panelCrear.classList.add('activar');
    });

    //Validaciones Login
    let formLogin = document.querySelector('#form-login'),
        error = document.querySelector('#error');

    function validaCorreo(e){
		if (formLogin.correo.value == '' || formLogin.correo.value == null){
			error.style.width = '80%';
			error.innerHTML += '<li>Correo incorrecto.</li>';

			e.preventDefault();
		} 
    }

    function validaContraseña(e){
        if (formLogin.password.value.length < 8 || formLogin.password.value == null){
            error.style.width = '80%';
			error.innerHTML += '<li>Verificar Contraseña.</li>';
            
			e.preventDefault();
        }
    }

    function validaFormulario(e){
        // Reiniciamos el error para que inicie sin mensaje.
        error.innerHTML = '';
        
        validaCorreo(e);
        validaContraseña(e);
    }

    formLogin.addEventListener('click', validaFormulario);
}