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

