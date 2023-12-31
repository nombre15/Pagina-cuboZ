// function checkLocalStorageItem(itemName) {
//     // Check if the item exists in local storage
//     if (localStorage.getItem(itemName)) {
        
//         document.getElementById('login_text').innerHTML = "Bienvenido " + localStorage.getItem('nombre_cuenta');
//         document.getElementById('registro_text').innerHTML = "Cerrar sesión";
    
//         const anchor = document.getElementById('login_text');
//         const clear = document.getElementById('registro_text');
//         anchor.addEventListener('click', function(event) {
//             event.preventDefault(); // Prevent the default action, such as navigating to a new page
//           });
//           anchor.style.cursor = 'text';

//         clear.addEventListener('click', function () {

//             clear.href = 'login.html';
//             localStorage.clear(); 
//         });
//     } 
// }

// //Valida lo que se escribió dentro del registro
// function validateRegistration(event) {

//     event.preventDefault(); // Hace que la pagina no se vuelva a cargar al darle click al form

//     const inputs = document.querySelectorAll('input[required]');
//     const incorrectoMessage = document.getElementById('incorrecto');
//     const emailInput = document.getElementById('email');

//     let allInputsFilled = true;

//     //revisar inputs de uno en uno
//     inputs.forEach((input) => {
//         if (input.value.trim() === '') {
//             allInputsFilled = false;
//             return;
//         }
//     });

//     //si no estan llenos
//     if (!allInputsFilled) {

//         incorrectoMessage.textContent = 'Llene todos los campos.';
//         incorrectoMessage.style.color = 'red';
//     } else {

//         incorrectoMessage.textContent = ''; 

//         // revisar si el correo es valido
//         const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         if (!emailPattern.test(emailInput.value)) {
//             incorrectoMessage.textContent = 'Ingrese una dirección de correo válida.';
//             incorrectoMessage.style.color = 'red';
//             return;
//         } else {
//         incorrectoMessage.textContent = ''; 
//         checkPasswords(); 
//     }
//     }
// }

// //revisar si las contraseñas coinciden
// function checkPasswords() {
//     const password1 = document.getElementById('password').value;
//     const password2 = document.getElementById('password2').value;
//     const incorrectoMessage = document.getElementById('incorrecto');

//     if (password1 !== password2) {

//         incorrectoMessage.textContent = 'Las contraseñas no coinciden.';
//         incorrectoMessage.style.color = 'red';
//     } else {

//         localStorage.setItem('nombre_cuenta', document.getElementById('nom_usuario').value);
//         localStorage.setItem('email_cuenta', document.getElementById('email').value);
//         localStorage.setItem('password_cuenta', document.getElementById('password').value);
//         localStorage.setItem('nom_completo_cuenta', document.getElementById('nom_completo').value);
//         incorrectoMessage.textContent = ''; 
//         window.location.href = 'login.html';
//     }
// }