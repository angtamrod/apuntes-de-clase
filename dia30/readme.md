## Definición de Funciones

```js
//Función Clásica
function miFuncion(param1 param2){

    return valor;//Las funciones normalmente devulven algo y no pueden devolver 2 cosas
                //Para devolver más cosas devuelven una lista o un objeto que devuelven varias cosas

}

//Función asignada a variables 
const miFuncion = function(param1, param2){
    return valor;
} // Es una función asignada como una variable

//Función flecha (arrow function)
const miFuncion = (param1, param2) => {
    return valor;
}//Directamente no se pone función si no que se pone el igual y el signo del mayor como una flecha después del paréntesis

// Función flecha simplificada
const miFuncion = param => valor; //Los simplifica en una sola línea de código
//Ej:
divEstadísticas. addEventListener("Lo que quiero escuchar", "Que haga algo");//esto encierra dos parámetros
divEstadísticas. addEventListener("click", function (){//Esto encierra dos parámetros y uno de ellos es una función
    console.log("estoy haciendo algo cuando me hicieron click")
});
//Cuando hacemos click en divEstadísticas, mostramos el mensaje en la consola.
divEstadísticas.addEventListener("click", () => {//Para simplificarlo más se ponen estos dos paréntesis y la flecha para indicar que es una función dentro de otra función
    //A estas funciones que se ejecutan dentro de una función se le llaman: FUNCIÓN DE CALLBACK
    console.log("estoy haciendo algo cuando me hicieron click")
})
```



```js

const Numeros =[5,3,25,12];
const ListaActualizada = Numeros.map (function( numero ){
    return numero;
})

const Numeros =[5,3,25,12];
const ListaActualizada = Numeros.map (function( numero ){
    return numero+1;
})//El resultado sería [6,4,26,13]


```