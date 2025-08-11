// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// declaramos un arreglo vacio de amigos
let arregloDeAmigos = [];
let amigoSecreto = 0;

// funcion para obtener elemento html
function asignarTextoHTML(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return elementoHTML
}


// inicio de la funcion par agregar un amigo al arreglo.
function agregarAmigo() {
    // declaramos la entrada de amigos y obtenemos su valor
    let campoTextoAmigos = document.querySelector('#amigo');
    let amigo = campoTextoAmigos.value.trim();

    if (amigo !== '') {
        arregloDeAmigos.push(amigo);
        campoTextoAmigos.value = '';
        mostrarListadoAmigos();
    } else {
        alert('Debes ingresar texto en el campo de texto');
    }

}


// funcion que muestra la lista de amigos en el HTML

function mostrarListadoAmigos() {

    let elementoUlHTML = document.querySelector('#listaAmigos');
    elementoUlHTML.innerHTML = '';

    for (let i = 0; i < arregloDeAmigos.length; i++) {
        let listaHTML = document.createElement('li');
        listaHTML.textContent = arregloDeAmigos[i];
        elementoUlHTML.appendChild(listaHTML);

    }

}

// funcion que genera un numero aleatorio
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * arregloDeAmigos.length);
}

// funcion que muestra el amigo sorteado
function sortearAmigo() {
    // validamos si el arregloAmigos contiene valores
    if (arregloDeAmigos.length !== 0) {
        amigoSecreto = generarNumeroAleatorio();
        console.log(amigoSecreto);
        asignarTextoHTML('#resultado', `El amigo secreto es: ${arregloDeAmigos[amigoSecreto]}`);

    } else {
        alert('No hay amigos para sortear');
    }

}
