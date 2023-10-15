const menuIcon = document.getElementById('touch_menu'); // Elemento que recibe el evento click
const menuLinks = document.getElementById('nav_7382'); // Elemento para establecer el estado display

const webAccess = document.getElementsByClassName('web_page_access');
// Establece el menú como no visible al principio
menuLinks.style.display = 'none';
// Establece el overlay como no visible al principio



let isMenuVisible = false; // Variable para seguir el estado del menú (cambia a false)

menuIcon.addEventListener('click', (e) => {
    console.log('working...' + e);
    const computedStyle = window.getComputedStyle(menuLinks);
    const displayValue = computedStyle.getPropertyValue('display');
    
    if (displayValue === 'block' && isMenuVisible) {
        console.log('El menú está visible. Ocultándolo...');
        menuLinks.style.display = 'none';
        isMenuVisible = false;
    } else if (!isMenuVisible) {
        console.log('El menú está oculto. Mostrándolo...');
        menuLinks.style.display = '';
        isMenuVisible = true;
    }
});

// Sección para el DEMO.
const demo_layer = document.querySelector('.DEMO');
demo_layer.addEventListener('click', (e)=>{
    loginForm();
})

function loginForm(){
    // Mostramos el overlay.
    const overLay = document.querySelector('.overlay');
    overLay.style.display = '';
    //Si la contraseña es igual pasamos...
    document.getElementById("login-button").addEventListener("click", function () {
        var passwordInput = document.getElementById("password-input").value;

        if (passwordInput === "123456") {
            console.log("Éxito");
            demo_layer.style.display = 'none';
            webAccess[0].style.display ='';
        } else {
            console.log("Contraseña incorrecta");
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.querySelector(".overlay");
    const passwordInput = document.getElementById("password-input");
    const loginButton = document.getElementById("login-button");

    loginButton.addEventListener("click", function () {
        const enteredPassword = passwordInput.value;
        if (enteredPassword === "123456") {
            overlay.style.display = "none";
            console.log("Listo");

        } else {
            console.log("Contraseña incorrecta");
        }
    });
});