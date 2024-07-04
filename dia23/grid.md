# Grid CSS

- Es un sistema para crear y organizar nuestro layout.
- Para apps GRID
- No es opuesto a Flex ni a Float (Float no lo vamos a ver porque es muy antiguo)
- Se pueden combinar entre ellos aunque no es recomendable.

Grid es un sistema de maquetación bidimensional (con eje X y eje Y) que permite desarrollar interfaces/layouts del estilo de tablas.
Se compone de filas, columnas y obviamente celdas. Se pueden anidar unos dentro de otros.
La utilidad es poder crear layout complejos con muy pocas líneas de código.

## Implementación 

```css
.container{
    display: grid; /*iniciar el grid*/
    grid-template-columns: 100px 100px 100px 100px; /*Esto define el número y el tamaño de las columnas*/
    grid-template-rows: 100px 100px 100px;/*Esto define el número y el tamaño de las filas*/
}

```

Uso de reglas en los elementos aquí después de configurar nuestra cuadrícula es decir el tamaño de nuestro elemento que ocupará dentro de nuestra cuadrícula

para ver esto lo vemos en el inspector en nuestro div con grid en el botoncito (grid)

```css
        .item-1{
            grid-column-start:1;
            grid-column-end:4;
            grid-row-start:1;
            grid-row-end:3;
        }

```

Se pueden invertir el start y el end de los selectores y funcionará de la misma manera

```css
        .item-1{
            grid-column-start:4;
            grid-column-end:1;
            grid-row-start:3;
            grid-row-end:1;
        }

```

Podemos utilizar los valores negativos para seleccionar elementos dese el final del grid:
```css
        .item-1{
            grid-column-start:4;
            grid-column-end:-1;
            grid-row-start:2;
            grid-row-end:-1;
        }

```

Podemos utilizar la palabra span para indicar cuantas columnas o filas queremos que ocupe un item. Por ejemplo si quiere que un elemento se expanda 3 columnas  vamos a realizar un span de 4
```css
        .item-1{
            grid-column-start:1;
            grid-column-end:span 2; /*Espandir mi caja un bloque más*/
            grid-row-start:1;
            grid-row-end:span 3; /*Expandir mi caja 2 veces más*/
        }

```

Se puede utilizar span para mover los elementos desde el punto en el que se encuentra. Teniendo .item-1 podemos hacer que el .item-2 sea un bloque de 2x2 con el siguiente código:

```css
         .item-2{
            grid-column: span 3;
            grid-row:span 2;
            
        }
```

Podemos utilizar una sintaxis más corta de la siguiente manera:
```css

         /* grid-column-start: 2;
            grid-column-end:4;
            grid-row-start:3;
            grid-row-end:4;*/

         .item-3{
            grid-column:2/4;
            grid-row:3/4;
        }
```
Lo ideal es USAR ESTE de ahora en adelante

Podemos usar otra sintaxis más corta aún:
```css
.item-3{
    /*Row-start / col-start/ row-end / col-end*/
            grid-area:1/1/4/4;
        }
```

Si agregamos más elementos de los que caben, se agregará otra fila que no tendrá el tamaño de nuestro template.  de llaman "grid implícitas" Cuando no caben los elementos en la cuadrícula se pone otra fila o columna en un tamaño distinto al del resto para esto se utiliza. Podemos utilizar "grid-auto-rows:100px;" para definir el nuevo tamaño de las nuevas celdas

```css
.container{
    display: grid; /*iniciar el grid*/
    grid-template-columns: 100px 100px 100px 100px; /*Esto define el número y el tamaño de las columnas*/
    grid-template-rows: 100px 100px 100px;/*Esto define el número y el tamaño de las filas*/

    grid-auto-rows: 150px;
    grid-auto-columns: 200px;
}

```

Para definir si queremos que se agrguen filas nuevas o columnas cuando hay un overflow de bloques con "grid-auto-flow:" que podemos definir en column o row

```css
.container{
    display: grid; /*iniciar el grid*/
    grid-template-columns: 100px 100px 100px 100px; /*Esto define el número y el tamaño de las columnas*/
    grid-template-rows: 100px 100px 100px;/*Esto define el número y el tamaño de las filas*/

    grid-auto-flow: column;
    grid-auto-rows: 150px;
    grid-auto-columns: 200px;
}

```

Las celdas en grid template pueden marcarse en pixeles, porcentajes, em, rem... Pero hay una unidad especial llamado (fr) Fractional Unit. Este valor nos permite fraccionar el tamaño disponible.

Por ejemplo, si tenemos 3 columnas y definimos que la primera sea del tamaño de 1fr, la segunda 2fr y la tercera 1fr. Esto hará que la segunda columna ocupe el doble de espacio de las otras 2. (La de en medio tendrá el doble de ancho)

```css
.container{
    display: grid; 
    grid-template-columns: 1fr 2fr 1fr 50px;
}

```

Existe la propieda minmax() nos permite definir un tamaños mínimo y máximo para columnas y filas:

```css
/**/
.container{
    display: grid; 
    grid-template-columns: minmax(100px, 1fr) minmax(100px, 1fr) 1fr; /*Hay que asegurarse de que minimo tenemos 100px para cada página*/
}

```

Existe otra propiedad llamada repeat() que nos permite repetir un número de veces un tamaño de columna o fila.
```css
/**/
.container{
    display: grid; 
    /*grid-template-columns: 1fr 1fr 1fr 1fr 1fr;*/
    grid-template-columns: repeat (8, 1fr);
    
    }

```css
.container{
    display: grid; 
    /*grid-template-columns: 1fr 1fr 1fr 100px;*/
    grid-template-columns: repeat (3, 1fr) 100px;
    
    }

```

Puedes nombrar las celdas utilizando grid-template-areas" y asignar un nombre a cada celda vacía:
```css
.container{
    display: grid; 
    
    grid-template-columns: repeat (3, 1fr);
    grid-template-rows: repeat (3, 100px);
    grid-gap:10px;
    grid-template-areas:"header header header"
                        "main main main col3"
                        "footer footer footer";
    }

```

y además a cada caja hay que decirle que espacio ocupar:

```css
.item-1{

    grid-area: header;}

.item-2{
    grid-area: main;}

.item-3{
    grid-area: sidebar;}

```

Podemos utilizar las reglas justify-items y aligns-items para alinear los elementos dentro de sus celdas. Sus opciones posibles son start, end, center, strecht.
POR DEFECTO ESTÁN EN STRECHT
```css
.container{
    display: grid; 
    
    grid-template-columns: repeat (3, 1fr);
    grid-template-rows: repeat (3, 100px);
    grid-gap:10px;
    justify-items: start;
    align-items: end;
    }

```

Podemos decirle a un item específico que se alinee de una manera diferente utilizando justify-self y align-self.

```css
.item-1{

        
        justify-self: center;
        align-self:strecht;
            }
```

Por último podemos alinear nuestro grid en base a su contenedor utilizando justify-content y align-content. Sus opciones posibles son: start, end, center,space-around, space-between y space-evenly.

```css
.container{
    display: grid; 
    height: 600px;
    grid-template-columns: repeat (3, 1fr);
    grid-template-rows: repeat (3, 100px);
   
    justify-content:center;
    align-content:center;
    }

```

Recomendable usar GRID para el layout principal y después para cosas específicas usar display flex
