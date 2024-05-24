# apuntes-de-clase

Hoy aprendimos como instalar Github:
 Es interesante recordar que los apuntes de clase los dejamos en privado y los proyectos que estamos haciendo los dejamos en público
 Cada vez que terminamos una clase lo guardamos y lo subimos a GitHub




Box model: 
Cajas inline: <span></span>
 Este tipo de cajas no ocupan el ancho de la página 
Un <span></span> es inline por defecto no se puede modificar ni anchura ni altura

Cajas en bloque: <div></div>
 Este tipo de cajas si ocupan el ancho de la página 
Un div es BLOCK por defecto se le puede modificar anchura y altura 

Las imágenes (<img></img>) son una etiqueta que indica una caja INLINE, pero nos deja aportar un width (anchura) y un heigth (altura)

Los párrafos (<p></p>) son cajas de bloque (BLOCK) ya que ocupan todo el ancho que pueden

Todas las cajas (<div></div>) tienen 4 elementos:
1. Content (Contenido)
Es el espacio donde se muestra nuestro contenido como por ejemplo: texto- imágenes-video CSS height, width, min-height, min-width max-height, max-width
2. Padding (Relleno interno)
Es el espacio entre el contenido y el borde del elemento. Podemos definir este espacio para los cuatro lados de la caja (arriba, derecha, abajo, izquierda) CSS: Padding, Padding-top, padding-right, padding-bottom, padding-left
3. Border (Borde)
Es la línea que rodea el contenido y el relleno. Puede tener un ancho, estilo y color
CSS: Border, border-style, border-color, border-width
Todos estos atributos se pueden poner directamente en:
   border: 2px(relativo al grosor) dashed(al tipo de borde puede ser punteado como este caso, o sólido(solid)) red (color)
4. Margin (Margen)
Es el espacio entre el borde del elemento y los otros elementos de nuestra web. Se puede definir para los cuatro lados de la caja (arriba, derecha, abajo, izquierda)
CSS: margin, margin-top, margin-right, margin-bottom, margin-left

Si estos elementos no están definidos estarán a 0

El editor siempre priorizará la última regla colocada o en su defecto la más específica

WIDTH:
Indica el ancho de un elemento, establece el ancho del área del contenido, pero si está puesto el box-sizing: border-box; Establece el ancho del area del borde (Es decir lo que ocupa la caja)
Lo podemos definir con medidas como:
 Length: Define el ancho como un valor absoluto. Es más concreto, menos variable. (px, em (Esto mide a través de la medidas de las letras, en concreto de una letra mayúscula M))
 Porcentaje: Especifica el ancho como porcentaje de la anchura del bloque contenedor
 Auto: El navegador calculará y seleccionará el ancho para el elemento especificado.
 max-content: Selecciona el ancho preferido intrínseco


El ID es un atributo que sirve para identificar un elemento concreto del código y se escribe dentro de la estiqueta la que corresponda y luego en el head se coloca dentro de una etiqueta <style> en el <head> se colocará una almohadilla antes del nombre que hayamos escogido para referenciarlo. Ejemplo:
Primero colocamos esto en el body:
<body>
 <div id="mifooter">
    Contenido 4
    </div>
</body>
Después colocamos esto en el head:
<head>
<style>
    #mifooter {
            background-color: aquamarine;
            margin: 20px;
            padding: 20px;

        }
</style>
</head>

El atributo class(Clase) sirve para identificar varios elementos a la vez en el código y y se escribe dentro de la estiqueta la que corresponda y luego en el head se coloca dentro de una etiqueta <style> en el <head> se colocará un punto(.) antes del nombre que hayamos designado para para referenciarlo. Ejemplo:
Primero colocamos esto en el body:

<body> 
<div class="contenido">
Contenido 1
</div>

<div class="contenido">
    Contenido 2
</div>

<div class="contenido">
    Contenido 3
</div>
</body>

Después colocamos esto en el head, dentro de una etiqueta <style></style>
<style>
.contenido {
            background-color: blue;
            margin: 25px;
            padding: 25px;
            color: white;
            
        }  
        
 </style>

Se le da un uso mayor al atributo (class) sobre todo en CSS, incluso cuando tenemos un <header> le daremos una clase header, para después modificar con mayor facilidad el estilo que le queremos dar a los diferentes elementos. Ej:
  <header class="header"> </header>
Luego en el <head> colocaremos una etiqueta <style></style> que ponga esto:
<style>
  .header{
            background-color: blue;
            margin: 25px;
            padding: 25px;
            color: white;
  }
</style>




En ocasiones el ancho que le asignamos a dos elementos que están juntos no deja funcionar correctamente al padding (El espacio entre el contenido y el borde del elemento) para ello usamos el atributo box-sizing. Colocamos el atributo dentro de una etiqueta <style></style>, dentro de una clase específica. Ej:
<style>
    
        .div1{
            border: 2px dashed red;
            padding:5px;
            width: 200px;
            box-sizing: border-box;
        }

        .div2{
            border:2px dashed green;
            padding:25px;
            width:200px;
            /*Si queremos incluir el padding dentro del ancho total usamos box sizing border box*/
            box-sizing: border-box;
            
        }
</style>
Para no tener que estar poniendo el border-sizing en todas las clases podemos usar el selector (*{}) que sirve para dar atributos a todo el documento HTML. Ejemplo:
<style>
*{
       box-sizing: border-box; 
    }
</style>





Por defecto los navegadores le agregarán un margin y un padding, para que esto no sea así y para cero tendríamos que poner:
  <style> 
   *{
    box-sizing:border-box;
    margin:0px;
    padding: 0px;
    }
    </style>
Estos se llaman estilos de RESET




Cuando hacemos proyectos más complejos nuestra etiquetas de estilos (<style></style>) se va a hacer demasiado larga así que haremos en el <head> una etiqueta <link>, que referencie a un nuevo archivo de hoja de estilos, que sea (.css)Ej:
1. Hacemos un nuevo archivo en nuestra carpeta de proyectos con un nombre.css Ej:
    estilos.css
Después copiamos el contenido de la etiqueta <style>, SIN LA ETIQUETA <style> ya que esta es una etiqueta HTML, y estamos trabajando con un archivo CSS
2. Una vez hecho esto abrimos una estiqueta <link> en el <head> y referenciamos en el (href=) la ruta del archivo Ej:
    <link rel="stlyesheet" href="estilos.css">

3. Podremos borrar la etiqueta <style> del documento HTML, recordando que todo lo relativo a esta etiqueta lo añadiremos al documento CSS
Siempre está bien crear una carpeta dentro de nuestro proyecto llamada CSS que contenga nuestros archivos CSS


Posición relativa vs Posición absoluta
    <link rel="stlyesheet" href="./css/estilos.css">
    <!--posición relativa: inicia desde el archivo que lo está usando-->
    <!--el (./) indica la carpeta del proyecto que estoy usando-->
    <link rel="stlyesheet" href="/dia6/css/estilos.css">
    <!--posición absoluta: inicia desde la carpeta raíz de mi servidor web -->

    para subir una carpeta en la organización pongo: (../)
    Para subir 2 carpetas en la organización pongo: (../../) etc...
La MÁS RECOMENDABLE es: La posición RELATIVA

 

Si queremos que un elemento tenga más de una clase se le pueden sumar clases de la siguiente manera:
<div class="divVerde caja">
       hola soy el contenido 1! 
     </div>
Si queremos modificar un elemento con unas clases específicas, lo hacemos de esta manera:
1. En el HTML, en el <body> colocamos esto:
<body>
 <div class="divVerde caja resaltada">
        hola soy el contenido 2! 
      </div>
</body>
2. En el archivo.css colocamos esto:
.divVerde.caja.resaltada{
        border: 5px dashed blue 
     }
SI LE DAMOS MÁS DE UNA CLASE A UNA ETIQUETA LA COMÚN A TODAS DEBE IR LA PRIMERA EN LA HOJA DE ESTILOS (.css) Y DE FORMA DESCENDENTE CON LAS CLASES MÁS ESPECÍFICAS.
Si hacemos un <div> dentro de otro <div>, y el <div> padre tiene unas clases, y el <div> hijo tiene otra clase específica, se hará así:
1. En el HTML en el <body> irá así:
<div class="divVerde caja">
        <div class="resaltada">
        hola soy el div verde caja y resaltada
      </div>
      </div>
2. En el CSS irá así:
.divVerde.caja .resaltada{
        border: 5px solid rgb(60, 255, 0);
     }






Si le damos a algo un atributo display pero no queremos que se vea, en una etiqueta style, le ponemos display: none




Si tenemos problemas para el tamaño de nuestro fondo (background) utilizaremos el background size, tenemos varias opciones:
  - background-size: contain; (Ocupa la pantalla entera repitiendo la imagen)
  - background-size: contain; (Ocupa solo el tamaño de la imagen)
    background-repeat: no-repeat;
  - background-size: cover; (Cubre todo el fondo pero con la imagen recortada)
  - background-size: 30%; (Cube el fondo con las imágenes representadas en un 30%)
  - background-size: 200px 100px; (Cubre el fondo con la imagen repetida a un tamaño específico)
  


Una forma de centrar un div 
 <div style="max-width: 25%; margin: 0 auto">



 *{
            background: red;
            /*Sirve para marcar todo el contenido en pantalla*/
        }
        :root {
            /*sirve para marcar todo el contenido HTML*/
        }
        body{
            /*para marcar solo lo que haya en el body*/
        }


El display:flex va en la caja contenedor primaria es decir solo afecta a los hijos no a los subhijos
Los atributos flex se deben poner en cada caja específica de cada subhijo

Para mover elementos a través de la página con la propiedad flex:
 Justify-content sirve para moverlos HORIZONTALMENTE
 Alingn-items sirve para moverlos VERTICALMENTE
  Para mover elementos a través de la página con la propiedad flex

  Esta página nos explica como hacer un RESET para todos los estilos de nuestra página:
  https://meyerweb.com/eric/tools/css/reset/
  
  También hay otros que dan medidas de normalización como esta, que busca que en todos los navegadores y pantallas se vea de la misma manera:
  https://necolas.github.io/normalize.css/
  https://elad2412.github.io/the-new-css-reset/


Un LAYOUT es la distribución que va a llevar una página WEB esto es lo primero que debemos hacer organizar de que manera vamos a distribuir los elementos en la página WEB
A la hora de organizar el layout el header el main y el footer son COLUMNAS, ya que todo lo dividible en filas se entiende como columnas, entonces en el atributo container, que contendrá todo estos en el body deberíamos poner esto:

.container{
            display:flex;
            flex-direction: column;
            height: 100vh; 
        }


Para repetir el número de elementos que quieres utilizar ponemos el nombre del elemento (li), asterisco(*) ponemos seguido el número de veces (5)que los quieres ver:
  li*5


Como especificar que el contenido ocupe todo lo que sobra de espacio en una página:
  height: 100vh; /*100% del view height*/


Todos los elementos STICKY y FIXED van con POSITION y NO CON DISPLAY FLEX
Los UL no pueden tener otro elemento que no sean LI
Los formularios son una manera de comunicarnos con el servidor haremos consultas (REQUEST) de GET y de POST.



FORMAS DE PONER COMENTARIOS EN VISUAL STUDIO CODE:
<!--Estos son los comentarios de HTML-->
/*Estos son los comentarios de CSS*/


<!--COSAS PENDIENTES PARA VER-->
SERÍA INTERESANTE REVISAR CORRECCIÓN DE EVA Y CAROL:
Desde el principio del día 14 - Hasta 0:25
SERÍA INTERESANTE REVISAR CORRECCIÓN DE DAVID Y JENNY:
Desde el 0:45 del día 14 - Hasta 
SOLUCION PROBLEMAS HEADER
0:54-1:02
mirar solución label
1:50-1:59



<!--SEMÁNTICA WEB-->
La semantica WEB permite que la información se comparte y reutilizada entre aplicaciones empresas y comunidades.
La semántica WEB es una extensión de la web/intenet actual donde la informacion está dada, bien definida, para conectar de una mejor manera computadoras y personas para poder trabajar de forma conjunta.
En este caso la información es la página WEB que estamos creando. Y lo que buscamos es que este contenido se pueda compartir entre difentes, comunidades, personas, empresas, ordenadores... 

Con la semantic WEB ponemos una información extra pa

La web semántica es un enfoque para organizar y presentar la información en la web de una manera que las computadoras pueden comprender el significado y el contexto de los datos, facilitando así la colaboracíon entre diferentes sistemas y usuarios.
TERMINAR VIDEO MAÑANA 2:56

Lo que buscamos con la semántica web es tener más control con la manera que tenemos de organizar la web por zonas y elementos. 
<!--Para esto busca en google ejemplos de semantic tags-->
El article puede contener múltiples cosas no hay una respuesta correcta simplemente ayuda a los navegadores y a los usuarios a tratar de comprender nuestro código. Sirve para hacer un buen SEO, ya que si tenemos bien utilizada nuestra semántica WEB el navegador puede sacar ciertos elementos y hacer publicidad automática.


NOMENCLATURAS CSS
Sirven para organizar mejor todo el documento CSS y utilizar un mismo documento CSS por varias personas


<!--SHORTCUTS DE VISUAL ESTUDIO CODE-->
# VSC Shortcuts interesantes

- `Ctrl + Shift + P` : Buscar cualquier comando (Ver uso de > y @)
- `Ctrl + P` : Buscar cualquier archivo en el proyecto
- `Ctrl + P` : y luego `>` : Buscar cualquier comando
- `Ctrl + P` : y luego `@` : Buscar cualquier Símbolo/Nodo en el archivo

- `Ctrl + B` : Ocultar/Mostrar el sidebar
- `Ctrl + Shift + E` : Ver el explorador de archivos
- `Ctrl + Shift + X` : Ver el explorador de extensiones
- `Ctrl + Ñ` : Abrir la terminal
- `Ctrl + Space` : Autocompletar (Trigger Suggestion)
- `Ctrl + I` : Activar Github Copilot

Podemos ver la lista completa de shortcuts en la página de [Visual Studio Code](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
o para [MacOS](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
o haciendo `Ctrl + K` y luego `Ctrl + S`.

## Selección de texto
- `Ctrl + L` : Seleccionar la línea actual + la siguiente
- `Ctrl + D` : Seleccionar la siguiente ocurren
- `Ctrl + D` : Seleccionar la siguiente ocurrencia de la selección
- `Ctrl + Shift + L` : Seleccionar todas las ocurrencias de la selección
- `Alt + Shift + Right` : Ampliar la seleccion: "Palabra -> Linea -> Bloque"
- `Alt + Shift + Left` : Reducir la selección: "Bloque -> Linea -> Palabra"

## Movimiento por el código

- `Alt + Up` : Mover la línea actual hacia arriba
- `Alt + Down` : Mover la línea actual hacia abajo
- `F2` : Cambiar el nombre de la variable en todas sus ocurrencias
fux-jmif-nnv 


seleccionar Editar>Buscar y reemplazar o presionando CTRL+F.


REPASAR DÍA 16 MINUTO 0:56 HASTA lo que sea / retomar 1:49

:root es similar  al (*) que es el selector de CSS

cuando ponemos un style inline (dentro de la etiqueta) tiene más especificidad. No es recomendable

Dejaremos de usar los IDs para CSS porque lo dejaremos para JavaScript

Para poner una clase es es mejor poner la clase en inglés
De cara al proyecto final no deberíamos usar la 

en EL METODO BEM los modificador puede ser modificador del elememto o del bloque si es del elemento tenemos que poner primero la clase del bloque espacio elemento y el modificador directamente
Ejemplos de opciones de bloque/elemento/modificador
bloque
bloque__elemento
bloque__elemento--modificador
bloque--modificador

para seleccionar 2 clases lo ponemos así
 .clase.boton{
 }
Seguido solo en el caso de queramos seleccionar un elemento con dos clases


:root {
  Es como mencionar al HTML pero como css utiliza multiples dispositivos en esos dispositivos sería root. Para mencionar todo el HTML es mejor usar estro
}

el margin si usamos rem no depende del tamaño de fuente o font-size y y cuando usamos en si 

Existe o

En CSS y JS cuando usamos paréntesis estamos haciendo funciones:
function sumar(num1, num2) {
  devolver num1 + num2;
}

Main Axis (x) por defecto

white-space:no-wrap para que no se vaya para abajo

<p> es un elemento en bloque

En el proyecto final hay que linkear los archivos JavaScript

Es mejor tener el HTML por un lado y el JS por otro

Siempre que va una linea de JS va punto y coma (;) y dentro de los objetos  va (,)
Los formularios no deben funcionar en el proyecto final
No dejan usar onClick para el proyecto final

Métodos para seleccionar elementos en JS 
getElementById para seleccionar elementos a través de ID 
queryselector para seleccionar elementos a través de la lista de selectores


/**
 * 
**/
ASÍ ES COMO SE COMENTAN LAS FUNCIONES EN EL PROYECTO FINAL


FUNCIÓN para hacer comprobación login de usuario

```js
  function LoginUsuario(user, clave, clave2){
    if( user tiene mas de 4 letras){ return }
    if( clave es segura ){ return }
    if( clave == clave2 ){ return }

    Hacer Login de Usuario:
  }
```


Para este tipo de ejercicios es mejor no usar else
 porque sobreescriben otros "if"

 en JS NO SE PUEDE USAR (-) guión medio