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
  > Objetos (Object): Colección de propiedades (Características) y métodos (Funcionalidades). Se escriben con llaves ({})
  
```js
//PRIMITIVOS
let texto = "Hola Alumnos de CEI";
let textoConComillas = ' Hols estoy muy "bien" ';
let textoConComillasSimples = "I'm Tomi";
let texto = `Quiero comillas 'simples' y "dobles" `;  //template String

let numeros= 123;
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
const listaMixta = [1, "juan", true];

// objetos
const alumnos = {
  nombre: "Mario",
  edad: 33,
  isRecibido: false,
  presentarProyecto: function()=> {
    isRecibido=true;
  }
}

```