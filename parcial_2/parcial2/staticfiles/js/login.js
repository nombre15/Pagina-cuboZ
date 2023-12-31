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

// //Valida lo que se escribió dentro del registo
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
//         incorrectoMessage.style.display = 'block';
//     } else {

//         incorrectoMessage.textContent = ''; 

//         // revisar si el correo es valido
//         const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         if (!emailPattern.test(emailInput.value)) {
//             incorrectoMessage.textContent = 'Ingrese una dirección de correo válida.';
//             incorrectoMessage.style.color = 'red';
//             incorrectoMessage.style.display = 'block';
//             return;
//         } else {
//             incorrectoMessage.textContent = ''; 

//             const enteredEmail = document.getElementById('email').value;
//             const enteredPassword = document.getElementById('password').value;

//             // Get the stored email and password from local storage
//             const storedEmail = localStorage.getItem('email_cuenta');
//             const storedPassword = localStorage.getItem('password_cuenta');

//             // Check if the entered values match the stored values
//             if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
//                 // Login successful, perform the desired action (e.g., navigate to another page)
//                 window.location.href = 'productos.html';
//                 const logged = 1;
//                 localStorage.setItem('logged_true', logged);
//             } else {
//                 // Login failed, display an error message or take appropriate action
//                 incorrectoMessage.textContent = 'Email o contraseña incorrecta, intente de nuevo.'
//                 incorrectoMessage.style.color = 'red';
//                 incorrectoMessage.style.display = 'block';
//             }
//         }
//     }
// }