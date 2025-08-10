// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// declaramos un arreglo vacio de amigos
let arregloDeAmigos = [];

function agregarAmigo() {
    // declaramos la entrada de amigos y obtenemos su valor
    let campoTextoAmigos = document.querySelector('#amigo');
    let amigo = campoTextoAmigos.value.trim();

    if (amigo !== "") {
        arregloDeAmigos.push(amigo);
        campoTextoAmigos.value = "";
        mostrarListadoAmigos();
    }

}

function mostrarListadoAmigos() {

    let elementoUlHTML = document.querySelector('#listaAmigos');
    elementoUlHTML.innerHTML = '';

    for (let i = 0; i < arregloDeAmigos.length; i++) {
        let listaHTML = document.createElement('li');
        listaHTML.textContent = arregloDeAmigos[i];
        elementoUlHTML.appendChild(listaHTML);

    }

}


