// Entrega complmentaria interactuar con HTML

const titulo = document.getElementById('tituloUno');

const tituloPersonalizado = prompt('Ingrese su nombre para que aparezca en pantalla');
const lugar =prompt('Ingrese de que ciudad y pais es usted');
titulo.innerText = tituloPersonalizado;

//crear elemento

const nuevoSection = document.createElement('section');
nuevoSection.innerHTML =`<h2 class="backgroundSubtitulo"> Soy de ${lugar} </h2>`;
document.body.append(nuevoSection);

//lista

const productos =['television', 'computadora', 'tablet', 'celular', 'heladera'];

for (const producto of productos) {
    let lista = document.createElement('li');
    lista.innerHTML = producto;
    document.body.append(lista);
}