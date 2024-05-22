# Javascript

Es un lenguaje de programación de alto nivel, interpretado y orientado a objetos, que se utiliza para crear contenido dinámico e interactivo en sitios web.

Lenguaje de alto nivel:
Está diseñado para ser fácil de leer y escribir para los humanos.

Interpretado:
- Se ejecuta línea por línea en tiempo real. No necesita ser compilado.
  
  ```js
  let numero=1;
  console.log("Instrucción1 y numero vale:", numero); //imprime: "Instrucción 1 y numero vale:1"
  numero = numero + 1;

  console.log("Instrucción2 y numero vale:", numero); //imprime: "Instrucción2 y numero vale:2"
  ```


Orientado a Objetos:
JS utiliza un paradigma (OOP) lo que significa que organiza el código en "objetos". Un objeto es una colección de propiedades y métodos que se pueden leer y manipular. Es decir un pedazo de código al que le damos unas características y unas funciones.

Perro:
//Propiedades
- Color: Blanco y negro.
- Nombre: Lasy
//Metodos
- ladran(): hacer un ruido fuerte
- MoverLaCola(): Mueve la cola demostrando su felicidad
  
  ```js
  // ejemplo de un objeto con propiedades y métodos 
  let alumnos = {
    nombre: "lucia"
    edad: 35,
    saludar: function (){
        console.log("Hola, mi nombre es Lucía");
    }
  }

  //quiero imprimir el nombre de mi alumno
  console.log(alumno.nombre);//Lucia
  console.log("Me llamo ", alumno.nombre, " y tengo ", alumno.edad, " años");

  //si quiero que el alumnos salude 
  alumno.saludar ();
  ```

## Donde probar JS
1. En el navegador (En el inspector de elementos)
  
- En la pestaña de consola (Escribiendo directamente)
2. En las etiquetas de <script>:
- Se suelen poner dentro del <body> al final

3. En un archivo .js externo y linkeado 
4. En sitios WEB externos
- https://playcode.io/
- https://codepen.io/
- https://jsfiddle.net/
- https://linangdata.com/javascript-tester/


## Funcionalidades
- Manipulación del DOM (Document Objects Model): Agregar, modificar o eliminar elementos HTML y CSS.
- Procesar formularios: Verificar datos ingresados por el usuario, y realizar formularios complejos de múltiples secciones.
- Manejo de animaciones: Podremos manipular efectos visuales y animaciones en nuestra WEB.
- Manejo de eventos: Responder a las acciones del usuario como por ejemplo: Hacer click o desplazarse por la WEB.
- Comunicación asíncrona con servidores mediante AJAX/Fetch: Enviar y recibir datos de un servidor sin tener que recaergar la página.

## Variables

> Son como CAJAS que utilizamos para guardar información. Esta información puede ser un número, texto, una lista de cosas, y muchos otros tipos más. Nos permiten almacenar datos y luego usarlos o modificarlos en diferentes partes de nuestro programa.
> Las variables hay que definirlas: Es como darle un nombre a esta caja con un rotulador para poder encontrarla más adelante.
> Asignamos un valor: Esto es poner cosas dentro de la página puede ser un número, texto, una lista de cosas, y muchos otros tipos más.
> Usar esa variable: Abrir la caja y ver que hay dentro. Podemos ver las cosas y modificarlas.

En JS las variables se declaran con la palabra `let` o `const` (Hay una diferencia con el manual que no incluye a las "const" como variables, pero si lo son. Lo único que "const" es fija no cambia) Antes se definían con la palabra var seguido del nombre de la variable y Opcionalmente un valor inicial.

```js
let nombre="Juan";
let edad=46;
const PI=3.14159;
```
La constante será mejor para la optimización ya que siempre es el mismo valor y no tendrá que cambiar la información 

## Comentarios en JS

- Comentario simple: Se utiliza `//` para comentar una sola línea de código. 
- Comentario simple en la misma línea: Se puede agregar la `//` al final de una línea.
- Comentario de Bloque: Se utiliza `/* ... */` para hacer comentarios de múltiples líneas.
- Comentario de documentación: Se utiliza `/** ..... */` para inicial un bloque de documentación. Este tipo de comentario se utiliza para funciones y clases.

```javascript
//Comentario de una sola linea
let nombre="juan";
console.log("imprimir nombre");

/*Comentario
multiples
lineas*/

/**
 * Esta es una función que suma 2 números
 * 
 * @param {number} a - El primer número
 * @param {numbre} b - El segundo número
 * @return{number} La suma de los 2 números anteriores
 * 
 */
 function sumar(a,b){
  return a+b;
 }

```

## Tipos de Datos

- Números: Enteros, decimales, positivos, negativos etc...
- Cadenas de texto (Strings): Textos, palabras, frases, 1 letra. Entre comillas simples '', dobles "", o backticks ``
- Booleanos: Verdadero o Falso
- Referenciales:
  > Listas de cosas (Arrays): Se escribe con corchetes ([]) y separadas con comas. Cuando hacemos listas estamos apuntando hacia un lugar donde están esas cajas (Variables) siempre que haya una lista tienen que ser constante (const)
  > Objetos (Object): Se escriben con llaves ({}). Colección de propiedades (Características) y métodos (Funcionalidades). 
  
```js
//PRIMITIVOS
let texto = "Hola Alumnos de CEI";
let textoConComillas = ' Hols estoy muy "bien" ';
let textoConComillasSimples = "I'm Tomi";
let texto = `Quiero comillas 'simples' y "dobles" `;  //template String

let numeros= 123; //numero entero
let decimales=22.30;
let negative= -5;
const PI=3.14159;
let miNumero = Number("1234"); //esto es igual a 1234

let estaPrendido= false;
let isPrimary = true;
let onActive = false;

//REFERENCIALES
//Podemos modificar los datos de Arrays y Objetos por más que sean constantes.

// arrays
const alumnosDeDW = ["Nerea", "David", "Jenny",...];
const edades = [25, 32, 18, 49];
const listaMixta = [1, "juan", true, (val1: "Hola", val2:"chau") ];

const listaDeCompras = ["tomate", "lechuga"];
// agregar a la lista "patata"
listaDeCompras = ["tomate", "lechuga", "patata"];
//listaDeCompras = "patata"; //ERROOOR
ListaDeCompras[2]="patata"; // ["tomate", "lechuga", "patata"];

//lectura de una lista (Arrays). Empiezan con el índice 0 y se leen así
console.log(listaDeCompras [0]    );// tomate
console.log(listaDeCompras [1]    );// lechuga
console.log(listaDeCompras [2]    );// patata

console.log(listaDeCompras [3]    );// undefined
console.log(listaDeCompras [-1]    );// undefined


// objetos
const alumnos = {
  nombre: "Mario",
  edad: 33,
  isRecibido: false,
  presentarProyecto: function()=> {
    isRecibido=true;
  }
}

// lectura de una variable
console.log(estarPrendida);
let miNuevaVar= estaPrendida;

// lectura de una propiedad
console.log("La edad de Mario es: ", .alumno.edad ); //imprime "La edad de Mario es: 33"

// uso de un método
alumno.presentarProyecto();
consle.log();
```

<!---------------------------------------------------------------------------
CONTINUACIÓN DÍA 26
-->
## Más tipos de datos 

- Undefined: Valor que se le asigna a una variable que no tiene valor (se declara pero no se le asigna un valor)
- Null: Valor que se le asigna a una variable para identificar que no tiene valor intencionalmente.
- NaN (Not a Number): Valor que obtenemos cuando se esperaba un número pero no lo es.
- Empty (Vacío): Un string con valor vacío  '' o ""
- Funciones 
- Fechas


```javascript
// Otros tipos de datos
/*let noDefinido= undefined; //undefined*/ Esto no se usa
let noDefinido3; //undefined

let varNula="texto"; //string
varNula=null;//Null

let noEsNumero= NaN; //Empty

let saludar = function () {
  console.log("Hola a todos!");
}//Una función

let hoy = new Date(); // Fecha, que en realidad es una objeto

```


Podemos siempre ver el tipo de dato que es una variable utilizando el operador `typeof`

```javascript

console.log(typeof noDefinido);
console.log(typeof varNula);
console.log(typeof NoEsNumero);
console.log(typeof vacio);
console.log(typeof saludar);
console.log(typeof hoy);

```

## Consola (Chrome Developers Tool)

La consola nos permite imprimir mensajes y depurar nuestro código. Podemos imprimir mensajes de diferentes tipos.
También nos permite filtar los mensajes según su tipo.

```javascript
//Mensajes informativos
console.log("Esto es un texto informativo");
// Mensajes de Error
console.error("Este es un mensaje de error");
// Mensajes de advertencia
console.warn("Este es un mensaje de advertencia");
// Mensaje de información
console.info("Este es un mensaje informativo");
// Mensajes de depuración (no verbose)
console.debug("Este es un mensaje de depuración");
//Tabla de datos 
console.table(("Manzana", "Banana", "Cerezas"));

```

## Operadores

Son símbolos que nos permiten hacer operaciones en JavaScript. Hay distintos tipos: Aritméticos, de asignación, de comparación, de lógica e.t.c...

## Operaciones Arítmeticos

Operaciones matemáticas
- Suma (+): suma 2 valores
- Resta (-): resta 2 valores
- Multiplicación (*): multiplica valores
- División (/): divide valores
- Modulo (%): Devuelve el resto de la división de 2 valores.
    El módulo hace referencia al resto de la división
    4/2= 2, 0
    5/2= 2, 1
    6/2= 3, 0
    7/3= 2, 1 
- Incremento (++): Incrementa en 1 el valor de la variable
- Decremento (--): Reduce en 1 el valor de la variable

```javascript
let a = 10;
let b = 5;

let suma = a +b; // Resultado 15
let resta = a - b; // Resultado 5
let multiplicacion = a * b;// Resultado 50
let division = a / b; // Resultado 2
let modulo = a % b; // Resultado 0
let incremento = a++; // Resultado 11
let decremento = b--; // Resultado 4 

//Estamos declarando otras variables en base a la variable que declaramos anteriormente (let a y let b)

```

Un ejemplo de módulo muy común es para saber si un número es para o impar. Si el resto de la división de un numero entre 2 es igual a 0 el número sera PAR. Si es igual a 1 es IMPAR

```javascript
let numero =10;
let esPar = (numero % 2 === 0); //es par
let esImpar = (numero %2 !== 0); //es false (La exclamación significa en este caso: Es distinto de cero)

```

## Operadores Comparativos

Se utilizan para comparar 2 valores en JavaScript
-Igual ``==`` Como el igual asigna un valor a una variable o lo que sea, se usa doble igual para preguntar si dos valores son iguales comparandolos
-Estrictamente Igual ``===``: Compara si 2 valores son iguales y del mismo tipo.
-Es distinto ``!=``: Compara si 2 valores son distintosa
-Es distinto estricyo ``!==``: Compara si 2 valores son distinto valor y tipo.
-Mayor que `>`: Compara si un valor es mayor a otro.
-Menor que `<`: Compara si un valor es menos que otro.
-Mayor o igual que `>==`: Compara si un valor es mayor o igual a otro
-Menor o igual que `<==`: Compara si un valor es menor o igual a otro

```javascript
let num1= 10;
let num2 = 5;

/*num1 == num2; // true
num1 == num2; // false*/

let esIgual = { num1 == num2 }; //false
let estrictamenteIgual = { num1 === num2 }; //false
let esDistinto = { num1 != num2 }; //true
let estrictamenteDistinto = { num1 !== num2 }; //true
let esMayor = { num1 > num2 }; //true
let esMenor = { num1 < num2 }; //false

```

## Funciones

Una función es un bloque de código o algoritmo que realiza una operación específica. Puede recibir valores de entrada y devolver un único resultado. Siempre que devuelva devolverá un ÚNICO RESULTADO, NO puede devolver 2 cosas.

```javascript

function Saludar ( nombre ) { //Los paréntesis del principio sirven para recibir valores de entrada
  //Entre las llaves escribimos el código que realizará mi función entre ({})
  console.log ("Hola a todos!!!" + nombre);

}

//Llamar a la función múltiples veces ()
Saludar ("Juan");
Saludar ("Tomás");
Saludar ("María");


function Saludar ( nombre, edad ) { //Los paréntesis del principio sirven para recibir valores de entrada
  //Entre las llaves escribimos el código que realizará mi función entre ({})
  console.log ("Hola a todos!!!" + nombre);
  console.log ("Mi edad es" + edad);

}

Saludar ("Juan", 18);
Saludar ("Tomás", 32);
Saludar ("María", 31);


```
