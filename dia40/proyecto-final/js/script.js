/* Se suele llamar script.js main.js proyecto.js*/


/*-------------------------------------------------------------------------------------------
*                       Componentes generales
*-------------------------------------------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", function(){

  const bodyId= document.body.id;

    switch(bodyId){   //Switch es como elseif
        case "home":
            console.log("Estoy en Home");
            iniHome();
            break;
        case "galeria":
            console.log("Estoy en Galería");
            iniGaleria();
            break;
        case "contacto":
            console.log("Estoy en Contacto");
            iniContacto();
            break;

    }

});

function iniHome(){
    console.log("Estoy dentro de home");
}

async function iniGaleria(){ //Esta función como tiene un async dentro tiene que ser async también
    console.log("Estoy dentro de galería");

    //Parte 1: Declarar variables y datos
    const galeriaContainer = document.querySelector(".galeria-container");
    let listaGaleria = [];
    //Traer datos de mis usuarios

    //Parte 2: Declarar nuestras funciones

    async function traerUsuarios(){
        try{
            let response = await fetch("https://jsonplaceholder.typicode.com/users");

            //convertir mi sting json a objeto JS
            const listaUsuarios = await response.json();//Esta versión hace lo mismo que el parse pero como es asíncrono esto lo hace una vez llegue esa información
            return listaUsuarios;

            //return lista de usuarios 
        }catch (error) {
            console.error("Tuvimos un error al obtener datos: ", error);
            return [];
        }
    }

    function imprimirUsuarios(){
        console.log("Mis usuarios son: ", listaGaleria);

       const nuevaLista = listaGaleria.map(usuario => {
            return `
                    <div<div class="userCard">
                        <h3>${usuario.name}</h3>
                        <a href="mailto:${usuario.email}" target="_blank">${usuario.email}</a>
                    </div>
                    `;
        });
        const miGaleriaHTML = nuevaLista.join(""); //Para separar las cajas 
        galeriaContainer.innerHTML = miGaleriaHTML;
    }
    
    //Parte 3: Ejecutar nuestro código
    //Imprimirlos en pantalla
    listaGaleria = await traerUsuarios();
    imprimirUsuarios();
}


function iniContacto(){
    console.log("Estoy dentro de Contacto");
}


// Código JS de home

//