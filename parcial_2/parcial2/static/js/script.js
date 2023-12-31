/* Script para hacer un slideshow con imagenes */

let slideIndex = [1,1]; // Dos presentaciones
let slideId = ["mySlides1", "mySlides2"] // Dos presentaciones

//Mostrar la primera imagen en ambas presentaciones
showSlides(1, 0);
showSlides(1, 1);

//Funcion para mover las imagenes
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

//Funcion para mostrar las imaenes
function showSlides(n, no) {

  let i;
  let x = document.getElementsByClassName(slideId[no]);

  if (n > x.length) {slideIndex[no] = 1} //Si el numero de la imagen es mas alto al total de imagenes, reiniciar desde la primera imagen   
  if (n < 1) {slideIndex[no] = x.length}//Si el numero de la imagen es menor a 1, mostrar la ultima imagen
  
  // Esconder todas las imagenes
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }

  // Mostrar solo la imagen actual
  x[slideIndex[no]-1].style.display = "block";  
}


