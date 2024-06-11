//-------------------------------------
// 1. DECLARAMOS VARIABLES Y CONSTANTES
//-------------------------------------

//Slider
//Aquí estamos seleccionando la caja que contiene las fotos
const sliderImages = document.querySelector(".Slider-images");
//Aquí estamos seleccionando las imágenes se conformará como unq lista (Array) ya que estamos seleccionando más de un elemento. Por eso usamos querySelectorAll
const listImages = document.querySelectorAll(".Slider-images img");


//Botones
const btnPrev = document.querySelector(".btnPrev");
const btnNext = document.querySelector(".btnNext");


//Contador
//Aquí estamos seleccionando el marcador de la foto que estamos viendo en este momento
const spanActual = document.getElementById("txtActual");
//Aquí estamos seleccionando el marcador de todas las fotos totales
const spanTotal = document.getElementById("txtTotal");


//Primero ponemos el índice de imágenes en 0
let imgIndex = 0; 
//Estamos diciendo que el total de las imágenes el lenght(El total de elementos de una lista) de la constante que hemos declarado anteriormente que eran las fotos de la galería
const totalImages = listImages.length;

// EventListeners

//Esto lo estamos haciendo para añadir un evento a la constante btnNext que anteriormente hemos asociado a un botón, en este caso le estamos diciendo que cuando haga click en este botón ejecute la función (nextImagen)
btnNext.addEventListener("click", nextImagen);

//Esto lo estamos haciendo para añadir un evento a la constante btnNext que anteriormente hemos asociado a un botón, en este caso le estamos diciendo que cuando haga click en este botón ejecute la función (prevImagen)
btnPrev.addEventListener("click", prevImagen);

//-------------------------------------
// 2.FUNCIONES
//-------------------------------------

//Esta es la función que hará que cuando le demos al botón siguiente pase a la siguiente imagen
function nextImagen(){
    imgIndex++;//Le estamos agregando
    if (imgIndex >= totalImages){
        imgIndex=0;
    }
    actualizarslider();
    actualizarContador();

}

//Esta es la función que hará que cuando le demos al botón anterior pase a la anterior imagen
function prevImagen(){
    imgIndex--;
    if(imgIndex < 0){
        imgIndex = totalImages;
    }
    
    actualizarslider();
    actualizarContador();
}

function actualizarslider(){
    const width=sliderImages.querySelector('img').clientWidth; //calcula width automáticamente
    //const width=400; el ancho del slider que marcamos en styles
    sliderImages.style.transform = `translateX(${-width * imgIndex}px)`;
}

function actualizarContador(){
    spanActual.textContent = imgIndex + 1;
    
}
//-------------------------------------
// 3. EJECUTAMOS NUESTRO CÓDIGO
//-------------------------------------
actualizarContador();
spanTotal.textContent = totalImages;

//-------------------------------------
// 4. CREAR INTERVALOS
//-------------------------------------

let intervalos;
agregarIntervalo();

sliderImages.addEventListener("mouseover", () =>{
    clearInterval(intervalos);

})

sliderImages.addEventListener("mouseout", () =>{
    agregarIntervalo();
    
})

function agregarIntervalo(){
    intervalos = setInterval (nextImagen, 2000);
}