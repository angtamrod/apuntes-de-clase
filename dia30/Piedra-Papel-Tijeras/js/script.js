/*--------------------------------------
/*  1. Declaramos Variables
/*--------------------------------------*/
const txtResultado = document.querySelector(".txtResultado");
const txtEstadisticas = document.querySelector(".txtEstadisticas");

const txtGanadas = document.getElementById("ganadas");
const txtPerdidas = document.getElementById("perdidas");
const txtEmpatadas = document.getElementById("empatadas");

// Gráfica de barra
const progressBar  = document.querySelector(".progressBar");
const divGanadas = document.querySelector(".progressBar>div:nth-child(1)");//En css el simbolo de mayor significa (dentro de)
const divPerdidas = document.querySelector(".progressBar>div:nth-child(2)");


const objPuntaje= {
    // Puntaje del juego 
    ganadas: 999,
    perdidas: 999,
    empatadas: 999,
    stats: {//esto tambien es un objeto

        //numero de veces que tira la IA
        ai_piedra: 999,
        ai_papel:999,
        ai_tijera: 999,

        //estadisticas del jugados
        user_piedra:999,
        user_papel:999,
        user_tijera:999,
    }
}

/*objPuntaje.ganadas = 0;
objPuntaje.perdidas = 0;
objPuntaje.empatadas = 0;
objPuntaje.stats.ai_piedra = 0;//Como stats es un objeto dentro de un objeto valdrá 0
objPuntaje.stats.ai_papel = 0;
objPuntaje.stats.ai_papel = 0;*/

/*--------------------------------------
/*  2. Declaramos Funciones
/*--------------------------------------

/**
 * Función que recibe lo que elige el jugador y le indica si gana o pierde
 * 
 * @param {string} jugador  "piedra", "papel", "tijera"
 * @return {void}
 */


function jugar(jugador){
    const jugadorIA=elegirAutomaticamente(); //Tirará automáticamente
    let resultado="";

    if(jugadorIA == jugador){
        resultado = "Empataste";
    }else if (jugador == "piedra"){
        resultado= (jugadorIA =="papel") ? "Perdiste" : "Ganaste";

    }else if(jugador == "papel"){
        resultado= (jugadorIA =="tijera") ? "Perdiste" : "Ganaste";

    }else if(jugador == "tijeras"){
        resultado= (jugadorIA =="piedra") ? "Perdiste" : "Ganaste";

    }

    //actualiza las estadisticas de IA (Cuantas veces tira piedra papel y tijeras)
    if(jugadorIA == "piedra"){objPuntaje.stats.ai_piedra++;}
    if(jugadorIA == "piedra"){objPuntaje.stats.ai_papel++;}
    if(jugadorIA == "piedra"){objPuntaje.stats.ai_tijera++;}
    //actualiza las estadisticas de Jugador (Cuantas veces tiro piedra papel y tijeras)
    if(jugador == "piedra"){objPuntaje.stats.user_piedra++;}
    if(jugador == "piedra"){objPuntaje.stats.user_papel++;}
    if(jugador == "piedra"){objPuntaje.stats.user_tijera++;}

    //actualizar las partidas
    if(resultado=="Perdiste"){
        //objPuntaje.perdidas = objPuntaje.perdidas +1; (Es lo mismo que lo de abajo)
        objPuntaje.perdidas++;
    }
    if(resultado=="Ganaste"){objPuntaje.ganadas++;}
    if(resultado=="Empataste"){objPuntaje.empatadas++;}


    //Imprimir resultado
    txtResultado.innerHTML = `<h1>${resultado}</h1> Tú has tirado <b>${jugador}</b> y la IA ha tirado <b>${jugadorIA}</b>`; //En un principio txtResultado estaba vacío con esto hemos modificado desde js lo que se verá 
    

    mostrarEstadisticas();
    

}
//variable global de intervalo
let intervaloIA;
function IAvsIA(){

    //Intervalo para ejecutar algo muchas veces
    //setInterval("una función", "cada cuanto tiempo lo voy a hacer")
    intervaloIA = setInterval(() => {
        const JugadorAI2= elegirAutomaticamente();
        jugar(JugadorAI2);

    }, 3000); //1seg = 1000 milisengundos

    
}

function elegirAutomaticamente(){
    const opciones = ["piedra", "papel", "tijera"];//Esto me dice cuantas opciones hay en mi lista
    const numero = Math.floor(Math.random() * 3); //El numero esta entre 0 y 3 porque con el Math.Random elige un numero de ente 0 y 1 con decimales y todo, después con (*3) lo mulitplica por 3 y el resultado de esa operación Math.floor lo redondea a la baja así que nunca será mayor de 3.

    return opciones[numero]; //piedra, papel, tijera 
}

function mostrarEstadisticas(){
    //mostrar estadísticas de los jugadores
    txtGanadas.innerText = objPuntaje.ganadas;
    txtPerdidas.innerText = objPuntaje.perdidas;
    txtEmpatadas.innerText = objPuntaje.empatadas;

    //ESTAMOS IMPRIMIENDO UN BLOQUE ENTERO DE HTML
    txtEstadisticas.innerHTML = `<div>
    <h3>Stats IA</h3>
    👊x ${objPuntaje.stats.ai_piedra}✋x ${objPuntaje.stats.ai_papel}✌️x ${objPuntaje.stats.ai_tijera}
    <h3>Stats usuario:</h3>
    👊x ${objPuntaje.stats.user_piedra}✋x ${objPuntaje.stats.user_papel}✌️x${objPuntaje.stats.user_tijera}
    </div>`; //Si lo ponemos como .innerText, escribe el texto que le pongamos literal aparecería como lo que hemos escritos, de esta manera lo lee como código HTML.
    // Esto no se usa mucho porque deja la web expuesta a que se pueda modificar facilmente

    //graficar barra
    graficarBarra();
    
}


function graficarBarra() {
    const total = objPuntaje.ganadas + objPuntaje.perdidas + objPuntaje.empatadas;
    //Aquí estamos declarando una variable para calcular el porcentaje de partidas ganadas, perdidas y empatadas
    let porcentajeGanadas = Math.round((objPuntaje.ganadas/total)*100);
    let porcentajePerdidas = Math.round((objPuntaje.perdidas/total)*100);
    //Aquí estamos modificando el HTML para que en la progres-bar aparezca el porcentaje de ganadas, perdidas y empatadas
    divGanadas.innerHTML = `Ganadas <br> ${porcentajeGanadas}%`;
    divPerdidas.innerHTML = `Perdidas <br> ${porcentajePerdidas}%`;
    
    //Aquí estamos modificando el CSS para que la barra se ensanche según se modifique la cantidad de ganadas, perdidas y empatadas
    divGanadas.style.width=porcentajeGanadas+"%";
    divPerdidas.style.width=porcentajePerdidas+"%";
    
}


//Resetear las estadísticas
function resetStats(){

    //Borro el intervalo de IA
    clearInterval(intervaloIA);

    objPuntaje.ganadas = 0;
    objPuntaje.perdidas = 0;
    objPuntaje.empatadas = 0;
    objPuntaje.stats.ai_piedra = 0;
    objPuntaje.stats.ai_papel = 0;
    objPuntaje.stats.ai_tijera = 0;
    objPuntaje.stats.user_piedra = 0;
    objPuntaje.stats.user_papel = 0;
    objPuntaje.stats.user_tijera = 0;

    // re-imprimir la pantalla
    mostrarEstadisticas();
    

}
/*--------------------------------------
/*  3. Ejecutamos Nuestro código
/*--------------------------------------*/

resetStats(); //aquí reiniciaremos el contador cada vez que empecemos el juegos
