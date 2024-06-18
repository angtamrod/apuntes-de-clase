# Contenido Asíncrono

Sincronía 

Asincronía

Callbacks

promesas

async/await

## Concepto de Sincronía vs Asincronía

La sincronía es la ejecución de tareas en un orden secuencial, es decir, una tare que se ejecuta después de que la anterior se haya terminado.

```javascript
console.log("Paso1");

traerDatos();
 //espere 3 segundos
 console.log("Paso 3");

 function traerDatos(){
    esperar(3000);
     console.log("Paso 3");
 }
 //simulación de setTimeout (síncrona)
 function esperar(milisegundos){
        const start = new Date().getTime();
        while(new Date().getTime() - start < milisegundos);
    }

```

La asíncronía es la ejecución de tareas en orden no secuencial 


## Async/Await (uso para proyecto final u otros proyectos)

La desventaja de las promesas, es que se vuelven difíciles de entender cuando se anidan. Por eso se han creado las funciones `async` y `await`.

```js

//con la palabra async, decimos que esta función va a ser asíncrona
let listaUsuarios;

async function traerDatos(){
    try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const datos = await response.json(); //convierte mis datos de JSON en JS

    console.log(datos);
    console.log(datos[0].name); // Traer el nombre del usuario
    return datos;

    } catch(error)
    {
        console.error("tuve un error: ",error);
    }
}
listaUsuarios=traerDatos();


```

Ejemplo del restaurante:

```js
let plato = "Ensalada";
console.log("Paso1: Solicitar a un camarero el plato", plato);
console.log("Paso 2: El camarero va a buscar el plato de comida");

async function buscarPlato(){
    try{
        const responseJson = await fetch("http://restaurante.com/api/traerPlato");
        const datosJs = await responseJson.json ();

        console.log("Paso 4: el camarero lleva el palto de: ", datosJs.plato);
        console.log("Paso 5: El comensal se come su comida");

    }catch (error){
        console.log ("Mi error fue: ", error);

    }
}

console.log("Paso 3: La persona se toma el vaso de agua");

```

Ejercicio: Obtener los 10 usuarios de jsonPlaceholder, y mostrarlos en pantalla.

<ul id="listaUsuarios">
    
</ul>