// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

//Se limpia la pantalla de entrada de nombre
function limpiarEntrada()
{
    document.querySelector("#amigo").value = "";
}

//Agregamos funcionalidad al boton de agregar amigo
function agregarAmigo()
{
    let nombre = document.getElementById("amigo").value;
    
    if (nombre == "")
    {
        alert("Por favor, ingrese un nombre.");
    }

    else 
    {
        //agregamos el nombre a la lista de amigos
        amigos.push(nombre);
        //limpiamos la pantalla de entrada
        limpiarEntrada(); 
        //Mostramos la lista de amigos
        mostrarAmigos();
    }
}

//Función que recorra el array de amigos y muestre en pantalla
function mostrarAmigos()
{
    //Obtenemos el elemento listaAmigos que ya esta en el HTML
    let listaAmigos = document.getElementById("listaAmigos");
    //Limpiamos la lista de amigos
    listaAmigos.innerHTML = "";

    //Recorremos el array de amigos
    for (let lista = 0; lista < amigos.length; lista++)
    {
        //Agregamos el nombre a la lista de amigos
        listaAmigos.innerHTML = listaAmigos.innerHTML + "<li>" + amigos[lista] + "</li>";
    }
}

function borrarAmigosPantalla()
{
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
}


function sortearAmigo()
{
    //Si no hay amigos en la lista, no se puede sortear
    if (amigos.length == 0)
    {
        alert("Por favor, ingrese al menos un amigo.");
    }
    else
    {  
        //Se limpia la pantalla de amigos
        borrarAmigosPantalla();

        let sorteo = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[sorteo];

        let resultadoSorteo = document.getElementById("resultado");
        resultadoSorteo.innerHTML = amigoSorteado;
    }    
}

