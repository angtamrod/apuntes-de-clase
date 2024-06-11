# Fecha Date ()

El objeto Date() devuelve una fecha específica

```js
let hoy = new Date(); // devuelve la fecha actual

const sumarUnDia = new Date(hoy);
hoy.getDate() // Con el método getDate nos muestra el día del mes en el que estamos en este caso (10)

```

```js
let hoy = new Date(); // devuelve la fecha actual

// sumar 1 día
const sumarUnDia = new Date(hoy);
sumarUnDia = hoy.getDate() + 1 // nos devolvería el número 11
```

```js
let hoy = new Date(); // devuelve la fecha actual

// sumar 1 día
const sumarUnDia = new Date(hoy);
sumarUnDia.setDate ( hoy.getDate() + 1);// nos devolvería la fecha de mañana con todos los datos

//restar un día
const restarUnDia = new Date(hoy);
restarUnDia.setDate( hoy.getDate()- 1);

//restar dos horas
const restar2Horas = new Date(hoy);
restar2Horas.setHours( hoy.gerHours() -2); //hace 2 horas

//Estamos haciendo una función para cambiar los minutos, de la fecha actual,
function cambiarMinutos(fecha, minutos){
    const nuevaFecha = new Date(fecha);
    nuevaFecha.setMinutes(fecha.getMinutes() + minutos);
    return nuevaFecha;
}

const hoy = new Date();
const dentrode5minutos = cambiarMinutos(fecha, 5);
const hace15minutos = cambiarMinutos(fecha, -15);
```

# Math.random() entre 2 valores

Math.random() devuleve un número decimal entre 0 y 1

```js
function numeroRandomEntre(min, max){
    return Math.floor(Math.random() * (max-min +1) + min);
}
const min=2;
const max=15;
const numeroAleatorio = numeroRandomEntre(min, max);
console.log(`Numero entre ${min} y ${max} es ${numeroAleatorio}`);
```

# BOM y Objeto Window

El BOM representa el navegador (chrome, safari, firefox, Brave, Edge, etc...)

Window es el objeto principal del BOM, y contiene métodos que nos permiten interactuar con él.

```js
//obtener la altura y el ancho de la ventana
const altura = window.innerHeight;
const anchura = window.innerWidth;

//obtener la URL actual
const url = window.location.href;

//Redirigir a otra página
window.location.href = "https://google.com";

//Recargar la página
window.location.reload();

//Historial de navegación
window.history.back():
window.history.forward():

//abrir una ventana nueva
const nuevaVentana = window.open("https://google.com", "_blank", "width=600, height=400");
nuevaVentana.close();// cerrar la ventana que abrí

// Ejecutar una función cada vez que redimensiono mi ventana
window.addEventListener("resize", () =>(
    const anchura = window.innerWidth;
    //console.log("Cambie el ancho de mi ventana", anchura);

))

//Para cuando ponemos los scripts en el <head> (NO ESTÁ TERMINADO)
window.addEventListener ("Load", )

```

# Crear HTML desde JavaScript

El método createElement() me permite crear elementos en el HTML desde JS 
El método appendChild() nos permite meter elementos dentro de otros en el HTML desde JS

El profe prefiere que usemos el inneHTML.
Pero esta forma tiene algunas ventajas para códigos más complejos es mejor

```js
const div = document.createElement(`div`); // Con esto puedo crear cualquier etiqueta que se nos ocurra
const imagen = document.createElemeny(`img`); // <img>
imagen.src = "./imgs/foto1.png";// <img src=>
imagen.alt = "mi foto de perfil";//


//Para agregar la imagen en el div
div.appendChild(imagen);
//Para agregar el div en el body
document.body.appendChild(div);

//Ejemplo con template strings
document.body.innerHTML += `<div>
                                <img src="imgs/foto1.png" alt="Mi foto de perfil">
                            </div>`;
const miImagen = document.querySelector("img");

miImagen.addEventListener("click", ()=>{
    console.log("le hice click!!!");
})
```

# JSON

Se ve como un objeto de JS `pero es un string`, es una versión simplificada de los objetos de JS y se usa para enviar una información del backend al frontend

Es una representación de datos en forma de texto (string) que sigue la sintáxis específica.
Es un formato que facilita la comunicación entre los back-end y front-end, servidores, y es fácil de leer para el usuario, y fácil de crear para la máquina. 

Para comprobar el JASON: https://jsonplaceholder.typicode.com/

Los string de JASON no soportan métodos

```js
// Objeto JavaScript
const alumno = {
    edad: 25,
    nombre: "Pepito", 
    saludar: () => {alert ("HOLAAA");}
}

// convertir un objeto JS en sting de JSON
const jsonString2 = JSON.stringfy(alumno);
console.log(jsonString2);

// String JSON (Representación para que se entienda mejor ESTO NO SE PONE ASÍ)
{
    "edad":25,
    "nombre": "Pepito",
}
//String de JSON
`{ "edad": 25, "nombre": "Pepito"}`


// String de JSON
const jsonString= `{"edad":25, "nombre": "Pepito"}`
console.log(jsonString);
//Convertir un string de JSON a un objeto de JS
const objeto = JSON.parse(jsonString);
console.log(objeto);
``` 