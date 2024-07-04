# Contenido asíncrono

Antes de ver el contenido asíncrono que utilizaremos en nuestros proyectos, debemos entender algunos conceptos fundamentales, por ejemplo: Sincronía, asincronía, callbacks, promesas, async/await, entre otros.


## Concepto de Sincronía vs. Asincronía

La sincronía es la ejecución de tareas en un orden secuencial, es decir, una tarea se ejecuta después de que la anterior haya terminado. 

```javascript
console.log("Paso 1");

traerDatos();
console.log("Paso 3");

function traerDatos(){
    esperar(3000); // wait 3 seconds
    console.log("Paso 2");
}

// simulación de setTimeout (sincrónico)
function esperar(milliseconds) {
    const start = new Date().getTime();
    while (new Date().getTime() - start < milliseconds);
}
```


La asincronía es la ejecución de tareas en un orden no secuencial, es decir, una tarea puede ejecutarse antes de que la anterior haya terminado. 

Se utiliza para:
- traer información de la DB
- traer información de una API
- manipular archivos de nuestro equipo


```javascript
    console.log("Paso 1");

    traerDatos();
    console.log("Paso 3");

    function traerDatos(){
        //es asíncrono
        setTimeout(() => {
            console.log("Paso 2");
        }, 3000); // wait 3 seconds
    }
```


## Callbacks

Como debemos esperar a que una tarea asíncrona termine para poder continuar con la siguiente, se utilizan los callbacks para realizar una acción después de que la tarea asíncrona haya terminado.

```javascript
    let datos="";
    console.log("Paso 1: ", datos);

    traerDatos(imprimirDatos);
    console.log("Paso 3");

    function traerDatos(callback){
        //es asíncrono
        setTimeout(() => {
            console.log("Paso 2");
            datos = "Datos 1,2,3";
            callback(datos);
        }, 3000); // wait 3 seconds
    }

    function imprimirDatos(datos){
        console.log("paso 4: imprimiendo", datos);
    }
```

otra manera de mostrar lo mismo es con el uso de funciones anónimas: 

```javascript
    let datos="";
    console.log("Paso 1: ", datos);

    traerDatos((datos) => {
        console.log("paso 4: imprimiendo", datos);
    });

    console.log("Paso 3: ", datos);

    function traerDatos(callback){
        //es asíncrono
        setTimeout(() => {
            datos = "Datos 1,2,3";
            console.log("Paso 2:", datos);
            callback(datos);
        }, 3000); // wait 3 seconds
    }
```

Ejercicio: Crear una código donde se muestre por consola la siguiente secuencia:
1) Un comensal solicita a un camarero un entrante para su comida
2) el camarero va a buscar el plato solicitado
3) la persona toma un vaso de agua mientras espera
4) el camarero lleva el plato a la mesa
5) la persona come el plato de comida


```javascript
    let plato = "Ensalada";
    console.log("1) El comensal solicita a un camarero un plato de ", plato);

    hacerPedido(plato, ()=>{
        console.log("4) El camarero lleva el plato ("+plato+") a la mesa");
        console.log("5) La persona se come su comida: ", plato);
    })

    console.log("3) La persona toma un vaso de agua");


    // Acción asíncrona del camarero que va a buscar el plato de comida
    function hacerPedido(plato, callback) {
        console.log("2) El camarero va a buscar el plato de comida: ", plato);

        // demora en la cocina
        setTimeout(() => {
            callback();
        }, 3000); // Simula el tiempo que tarda el camarero en ir a buscar el plato
    }
```


## Promesas

La gran desventaja de los callbacks es que se pueden anidar y se vuelven difíciles de leer y mantener. Lo cual se llama `callbackHell` (buscar en google) Por eso se han creado las `promesas`. 

Una promesa es un objeto que representa la terminación o el fracaso de una operación asíncrona. 

```javascript
const promesa = new Promise((resolve, reject) => {
    console.log("Ejecutando promesa");
    setTimeout(() => {
        resolve("¡Éxito!");
        // reject("¡Error!");
    }, 1000);
});

promesa
  .then(result => console.log(result)) // "¡Éxito!"
  .catch(error => console.log(error));
```

## Encadenamiento de promesas

Podemos encadenar promesas para que se ejecuten en un orden específico:

```javascript

// cada return será el argumento de la siguiente promesa
promesa.then(result => {
    console.log(result); // "¡Éxito!"
    return "¡Éxito 2!";
}).then(result => {
    console.log(result); // "¡Éxito!"
    return "¡Éxito 3!";
}).then(result => {
    console.log(result); // "¡Éxito!"
    return "¡Éxito 4!";
}).then(result => {
    console.log(result); // "¡Éxito 2!"
}).catch(error => {
    console.error("tuvimos un error!"); // "¡Error!"
});
```

## Fetch API con .then() y .catch()

Uno de los usos fundamentales de las promesas es en el uso de la Fetch API para realizar peticiones HTTP a otros servidores. 

La función `fetch()` nos permite hacer peticiones HTTP a otros servidores y nos devuelve una promesa. 

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json()) // convertimos nuestro JSON string a un objeto JS
  .then(json => {
    console.log(json);
    console.log("Titulo: ", json.title);
    }) // utilizamos la respuesta como querramos
  .catch(error => console.error(error)); // gestión de errores
```

## Async/Await (Uso en proyecto final!)

La desventaja de las promesas es que se vuelven difíciles de leer y mantener cuando se anidan. Por eso se han creado las funciones `async` y `await`.


```javascript
// la función es "async" para poder utilizar "await"
async function traerDatos() {

    // cuando quiero esperar a que una promesa termine, utilizo "await"
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const json = await response.json();
    console.log(json);
    console.log("Titulo: ", json.title);
}



// Esta es la manera actual de trabajar con promesas en JavaScript.  
async function traerDatos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const json = await response.json();
        console.log(json);
        console.log("Titulo: ", json.title);
    } catch (error) {
        console.error(error);
    }
}
```

Nuestro ejemplo del restaurante  utilizando fetch sería:

```javascript
    let plato = "Ensalada";
    console.log("1) El comensal solicita a un camarero un plato");
    console.log("2) El camarero va a buscar el plato de comida");
    buscarPlato();

    async function buscarPlato() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const datosJS = await response.json();

            // los siguientes mensajes esperan el await para poder continuar...
            console.log("4) El camarero lleva el plato ("+plato+") a la mesa");
            console.log("5) La persona se come su comida: ", plato);
        } catch (error) {
            console.error(error);
        }
    }

    // no espera a la función asíncrona
    console.log("3) La persona toma un vaso de agua");
```

## Ejercicios de Fetch

Obtener usuarios de jsonPlaceHolder y mostrarlos en el DOM

```javascript
    const domUsuarios = document.getElementById('usuarios'); // <ul id="usuarios"></ul>

    async function obtenerUsuarios() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const usuarios = await response.json();
            
            console.log(usuarios);
            //const listaUsuarios = document.body;
            
            usuarios.forEach(usuario => {
                const li = document.createElement('li');
                li.textContent = usuario.name;
                domUsuarios.appendChild(li);
            });
        } catch (error) {
            console.error("ERRORRR:",error);
        }
    }

    obtenerUsuarios();
```

## Enviar información con Fetch

El método `fetch()` también nos permite recibir tanto como enviar información a un servidor. 


Ejemplo formulario tradicional:
    
```html
    <form id="formulario">
        <input type="text" name="nombre" id="nombre">
        <input type="email" name="email" id="email">
        <button type="submit">Enviar</button>
    </form>
```

```javascript
    document.getElementById('miFormulario').addEventListener('submit', function(event) {
        // Prevenir el envío tradicional del formulario
        event.preventDefault();

        // Comprobaciones aquí
        // ...

        // Construir la cadena de datos en formato x-www-form-urlencoded
        const datosFormulario = 'nombre=' + encodeURIComponent(this.nombre.value) + 
                                '&apellido=' + encodeURIComponent(this.apellido.value);

        // Enviar los datos con fetch
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: datosFormulario,
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    });
```

Un ejemplo en JSON que permite estructuras mas complejas sería

```javascript
const data = { title: 'Mi título', body: 'Mi cuerpo' };

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
});

// O utilizando el "FormData"
const formData = new FormData();
formData.append('nombre', 'John Doe');
formData.append('edad', 30);
fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: formData,
});

// si estamos enviando un formulario con un input file
const formData = new FormData();
formData.append('file', input.files[0]);
fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'multipart/form-data',
    },
    body: formData,
});

```




