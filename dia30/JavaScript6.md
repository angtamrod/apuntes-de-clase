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

1. Propiedades:

Color: Blanco y negro.
Nombre: Lasy
  
2. Metodos:
  
ladran(): hacer un ruido fuerte
MoverLaCola(): Mueve la cola demostrando su felicidad
  
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
  En la pestaña de consola (Escribiendo directamente)
2. En las etiquetas de <script>:
  Se suelen poner dentro del <body> al final
3. En un archivo .js externo y linkeado 
4. En sitios WEB externos:
  
[https://playcode.io/]
[https://codepen.io/]
[https://jsfiddle.net/]
[https://linangdata.com/javascript-tester/`]

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
 * @param {number} b - El segundo número
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
---------------------------------------------------------------------------->
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

Operaciones matemáticas:

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

- Igual ``==`` Como el igual asigna un valor a una variable o lo que sea, se usa doble igual para preguntar si dos valores son iguales comparandolos
- Estrictamente Igual ``===``: Compara si 2 valores son iguales y del mismo tipo.
- Es distinto ``!=``: Compara si 2 valores son distintosa
- Es distinto estricyo ``!==``: Compara si 2 valores son distinto valor y tipo.
- Mayor que `>`: Compara si un valor es mayor a otro.
- Menor que `<`: Compara si un valor es menos que otro.
- Mayor o igual que `>==`: Compara si un valor es mayor o igual a otro
- Menor o igual que `<==`: Compara si un valor es menor o igual a otro

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
<!---------------------------------------------------------------------------
                            CONTINUACIÓN DÍA 27
---------------------------------------------------------------------------->

## Operadores Lógicos

Podemos verificar que múltiples operaciones sean verdaderas usando esos operadores:

&& - se tienen que cumplir todas las comparaciones.
|| - se tiene que cumplir al menos una de las comparaciones.

```javascript
if(edad > 21 && acepteTyC == true){
  //Segun esto para registrar al usuario será necesario que sea mayor a 21 año y que acepte los términos y condiciones
}

if(diaSemana == "sabado" || diaSemana =="domingo"){
  return "Es fin de semana!!";
}

if(num % 2 === 0){
  //es par
}

if(num%2 !== 0){
  // es impar
}

if(!true){
    // false. Ya que le hemos puesto delante una exclamación que indica ser lo contrario de
}
```

## Funciones

Una función es un bloque de código o algoritmo que realiza una operación específica. Puede recibir valores de entrada (`Parámetros`) y devolver un único resultado. Siempre que devuelva devolverá un ÚNICO RESULTADO, NO puede devolver 2 cosas. Los valores que se pasan a la función cuando se invoca se les llama `argumentos`. Tambien tenemos la opcicón de inicializar un parámetro con un valor. Recordemos que siempre tienen que ir AL FINAL DE LA LISTA

```javascript

/**
 * Función que saluda al usuario y le indica su nombre y su edad.
 * @param {string} nombre - Nombre del usuario
 * @param {number} edad - La edad del usuario
 * 
 * @return {void} - El void significa vacío. No devuelve nada
**/

function Saludar ( nombre ) { //Los paréntesis del principio sirven para recibir valores de entrada
  //Entre las llaves escribimos el código que realizará mi función entre ({})
  console.log ("Hola a todos!!!" + nombre);

}

//Aquí abajo estamos llamando a la función múltiples veces ()
Saludar ("Juan");
Saludar ("Tomás");
Saludar ("María");

```

```js

function Saludar ( nombre, edad ) { //Los paréntesis del principio sirven para recibir valores de entrada
  //Entre las llaves escribimos el código que realizará mi función entre ({})
  console.log ("Hola a todos!!!" + nombre);
  console.log ("Mi edad es" + edad);

}

Saludar ("Juan", 18);
Saludar ("Tomás", 32);
Saludar ("María", 31);

//En los paréntesis de la función arriba definida las variables no se asignan por el nombre si no por el orden que siguen. 
//La función se comporta como un camarero que trae algo a la mesa, lo que ponemos entre paréntesis es la cosa que tiene que traer (Como un plato / copa / una servilleta). La acción de traer algo a la mesa sería lo que pondríamos dentro de la función, es decir lo que ponemos dentro de la función es la acción que va a realizar ese camarero que es la función en sí.

```

Tambien tenemos la opcicón de inicializar un parámetro con un valor. Recordemos que siempre tienen que ir AL FINAL DE LA LISTA

```js
function Saludar ( nombre, edad, genero = "no indicado") { 
  
  //1. Creo una variable
  let respuesta;
  // 2. Actualiza la variable
  respuesta = "Hola a todos!! Mi nombre es " + nombre + "y mi edad es " + edad;
  // 3. Devuelvo la variable actualizada
  return respuesta;

}

let mensaje;
//Llamar a la función múltiples veces con distintos ARGUMENTOS
mensaje = Saludar("Juancito", 18, "masculino");// "Juancito" y 18
console.log(mensaje);
alert(mensaje);

mensaje = Saludar("Juan", edad);
mensaje = Saludar("María", "Treinta y uno", "femenino");//"María" y "Treinta y uno"

```

## Condicionales

Son estructuras de control que nos premiten tomar decisiones. Si se cumple la condición, se ejecuta un bloque de código y si no se cumple, se ejecuta otro bloque de código.

- El uso de `else` es opcional
- Se pueden anidar condicionales, es decir puede haber condicionales dentro de condicionales.

```js

let numero = 7
/*
* Me indica si el módulo (%) (resto de una división) de 2 números es PAR o IMPAR
*/
if(number % 2 ==== 0) {
  //si el número es par
  console.log("El número es PAR");

}else{
  //Si el número es impar
  console.log("El número es IMPAR");
}

```

```js

let edad= 16;
// me indica si es mayor de edad
if(edad >= 18 ){
  console.log("Es Mayor de edad");
}else{
  console.log("Es Menor de edad");
}

if(edad< 21){
  //prohibir el acceso a la página
}

if(edad< 90){
  if(edad < 80){
    if (edad < 70){
      let mensaje = "soy menor de 70";
      //....
    }
  }
}
```

### Ejercicios de prácticas:

1. Crear una función que reciba un número y devuelva si es par o impar.
2. Crear una función que reciba un número y devuelva si es `positivo`, `negativo`, o `cero`
3. Crear una función que me indica si es mayor o menor de edad.
4. Crear una función a la que si le indico el día de la semana, me devuelve si es laboral o no.
5. Crear una función donde sus parámetros sean Jugador 1 y Jugador2, y devuelva si el Jugador 1 le gana a Jugador 2 es un juego de `piedra`, `papel` o `tijera`
6. Modificar la calculadora del día 25 para que podamos sumar restar multiplicar o dividir 2 valores utilizando funciones.

<!--
---------- CONTINUACIÓN DIA 28
-->
## Uso de Bucles

Los bucles permiten repetir un código varias veces. En JS tenemos 3 tipos de bucles:

- `for`: Se utiliza cuando sabemos cuantas veces queremos que se repita algo.
- `while`: Se utiliza cuando no sabemos cuantas veces se va a repetir el bloque de código. (SE USA MUY POCO)
- `do-white`: Es igual a while, pero SE EJECUTA AL MENOS UNA VEZ se cumpla o no la condición la primera vez (SE USA MUY POCO)

```js
//EJEMPLO DE FOR
// for(inicializador esto define la variable; condicion la condición para que se siga ejecutando; operación a realizar al terminar el código (En este caso incremento))
 for(let contador=0; contador < 10; contador++){
  //me voy a repetir muchas veces!
  console.log("HOLA ALUMNOS!!!"+ contador);
 }
```

```js
//EJEMPLO DE BUCLE WHILE
//Aquí la variable va fuera del while, dentro de los parámetros del while se pone la condición para que se ejecute y la operación se pone al final del todo dentro de las llaves de while
let i=0;
while(i<10){
  console.log("Hola Alumnos");
  i++;
}

let salir=false;
//while(salir==false) lo de abajo es lo mismo 
while(!salir){
  console.log("me quedo jugando...");
  salir=true;
}
```

```js
//EJEMPLO DE DO-WHITE
let i = 25;
do{
  console.log("Hola Alumnos");
} while(i<5);
```

## Math

El objeto `math` nos propociona propiedades y métodos para realizar operaciones. Los más comunes son:

- Math.random(): Devuelve un número pseudo-aleatorio entre 0 y 1.
- Math.round(): Devuelve el valor de un número redondeado al entero más cercano.
- Math.ceil(): Redondea hacia arriba.
- Math.floor(): Redondea para abajo.
- Math.abs(): Devuelve el valor absoluto de un número.

```js
let numero=3.1416;

let numeroRedondeadoEntero = Math.round(numero); // 3
let numeroRedondeadoParaArriba = Math.ceil(numero); // 4
//De esta forma convertimos nuestro número de 4 dígitos en decimales en 2 dígitos
let numeroDeDosDigitos = Math.round(numero*100)/100;// 3.14

//EJEMPLO DE UN NÚMERO AL AZAR DEL 1 AL DIEZ
let numeroAzar1Al10 = Math.round(Math.random()*10);
```

## Interpolación de variables (Template Strings)

Es una forma de concatenar strings y variables de forma legible. Se utiliza acento grave(backtick) (``) para delimitar el string y ${} para insertar la variable.

Entre los beneficios tenemos:

- Lectura mucho más sencilla
- Uso de variables en nuestros strings.
- Posibilidad de escribir múltiples líneas de texto.
- Realizar operaciones dentro de llaves {} string.

```js

//método tradicional
let nombre = "Juan";
let contenido = `<div class='caja'>"+
                  "<h1>Hola a todos!, mi nombre es ${nombre} </h1>
                  </div>`;

let mensaje = `Hola, me llamo ${nombre} y voy a cumplir ${edad+1} años!`
```


<!------------------------------------------------------------------------------------------------------------
-------------------------------------CONTINUACIÓN DIA 29------------------------------------------------------
-------------------------------------------------------------------------------------------------------------->



# Objeto

Una colección de propiedades, y todas tienen sus respectivos nombres (claves) y valores.
Sus valores pueden ser de todo tipo:

- Datos
- Variables
- Funciones
- Otros objetos...

En el caso de las funciones a estas propiedades las llamamos métodos

```js
const miObjeto = {
  propiedad : "valor1",
  propiedad2 : 2, 
  propiedad3 : false,
  metodoSumar : function (num1, num2) {//Un método es una función dentro de un objeto
    return num1+num2;
  },
  metodo2 : function () {},
  //Las propiedades y los valores van separados de una , en vez de un punto y coma ;
  ...
}
```

Podemos acceder a las propiedades del objeto desde sus métodos usando la palabra clave `this`. EL uso de `this` hace referencia a ÉL mismo para acceder a sus valores.

```js
const coche = { //Coche en este ejemplo es un objetos y contiene sus propiedades y valores las propiedades son el nombre que le damos a las cosas
  marca: "Tesla", // propiedad: Marca valor: "Tesla"
  modelo: "ModelX",
  kmsRecorridos: 7777,
  color: "Negro",

  //métodos
  metodoEncender: function (){//propiedad: metodoEncender valor: la función que contiene
    //usamos "this" para acceder a los kilómetros del coche
    const kms = this.kmsRecorridos;///Esto nos dará 7777
    console.log(`Arrancando el coche con ${kms} kms`)
  },
  buscarme: function (positionGPS){
    console.log(`Manejar automáticamente hasta la posición GPS ${positionGPS}`)
  }
}
//leer kms recorridos 
console.log(coche.kmsRecorridos);
const kilometros = coche.kmsRecorridos; //7777
//Escribir nuevos kms recorridos: 
coche.kmsRecorridos = kilometros + 5; //kmsRecorridos = 7782
//Pintar el tesla de rojo
coche.color = "Rojo";

//Para ejecutar métodos hay que ponerle paréntesis al final
//Para encender el coche
coche.metodoEncender();

//Para que el coche me venga a buscar con la función que hemos puesto arriba
coche.buscarme(positionGPS);
```


# QuerySelector

Los query selector nos devuelven objetos del tipo element que son refeencias a los nodos html, o a `null` si no lo encuentra.
pueden ser clases IDs o elementos 

```js
//seleccionamos el primer input que posea el atributo type = "text"
const textInput = document.querySelector(`input[type=text]`)
console.log(primerTextInput);
```

# QuerySelectorAll

Este nos devuelve una lista de nodos (nodeList) que se comporta como un array, incluso es una `lista vacía`  o un arrays vacío si no encuentra ningún elemento.

```js
//seleccionamos todas las secciones con la clase "section"
const todosLosDivSections = document.querySelectorAll(`.section`);
todosLosDivSection.forEach( unDiv => {
    console.log(unDiv);
});
```

# addEventListener

Escuchamos (prestar atencón a) un evento ("click", "keyup", "input", "change") específico en alguno de nuestros elementos. Cuando pasa algo como por ejemplo:

click: Se ejecuta cuando se hace click.

input: Se ejecuta cada vez que el valor del campo cambia. Esto incluye escribir, borrar o pegar texto con el ratón.

keyup: Se activa cuando el usuario suelta la tecla. Es útil por si necesitas detectar cambios en tiempo real. Pero no se va a ejecutar si el usuario pega un texto con el ratón, o borra un texto con el ratón.

change: Este evento se ejecuta cuando el elemento pierde el foco y su valor ha cambiado. Es útil si solo necesitamos reaccionar cuando el usuario termina de editar el campo.

```js 
primerTextInput.addEventListener{"input", () => {
    console.log("El input cambio su valor");
}

  }

//keyup ejecuta la función cuando soltamos la tecla que tenemos que pulsar, con cualquier teclado
//primerTextInput.addEventListener{"keyup", funcionAejecutarCuandoHagoKeyUp()   }
//como no hace falta poner nombre ya que se ejecutará siempre que soltemos la tecla es mejor usar función flecha
primerTextInput.addEventListener{"keyup", () => {
    console.log("Acabo de liverar una tecla");
}

  }

primerTextInput.addEventListener{"keyup", () => {
    console.log("Me fui del input, y su valor ha cambiado");
}

  }
```


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







