
/*Anuncio #1: CARRUSEL- Automatico*/

const btnLeft = document.querySelector(".button-left"),
    btnRight = document.querySelector(".button-right"),
    slider = document.querySelector("#slider"),
    sliderSection = document.querySelectorAll(".slider-section");

/*Cada que se precione un botono muevase en esa dirección*/
btnLeft.addEventListener("click", e => moveToLeft());
btnRight.addEventListener("click", e => moveToRight()); 

setInterval(() => {
    moveToRight();
}, 3000);

/*Con esta formula se pueden agregar más imagenes y
se le dara una porción adecuada a cada una para hacer presencia
widthImg = 100 / sliderSection.length; */
let operacion = 0;
    counter = 0;
    widthImg = 100 / sliderSection.length; 

 // Se mueve a la derecha
function moveToRight() {
    // Infinito a la derecha
    if(counter >= sliderSection.length-1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none"; /*Eliminar la ultima transition */
        return;
    } 
        counter++;
        operacion = operacion + widthImg;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all aese .6s";
    
}

// Se mueve a la izquierda
function moveToLeft() {
    counter--;
    if(counter < 0 ){
        counter = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1);/*Esta formula nos lleva a la ultima posicion de la imagen*/
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none"; /*Eliminar la ultima transition */
        return;
    } 
        operacion = operacion - widthImg;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all aese .6s"
}

/*FINALIZA - Anuncio #1: CARRUSEL-*/



/*Footer Ocultar listas en h2*/
document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-list');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const list = this.nextElementSibling; // Obtener el elemento hermano siguiente (la lista ul)
            list.classList.toggle('hidden-list'); // Alternar la clase para mostrar u ocultar la lista
          
           const icon = this.querySelector('.toggle-icon'); // Obtener el icono dentro del título
            icon.textContent = list.classList.contains('hidden-list') ? '+' : '-'; // Cambiar el contenido del icono
        });
    });
});

/*FINALIZA Footer */