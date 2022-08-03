// Desafio Incorporar eventos

const productos = [{
  id: 10,
  nombre: 'Televisor Samsung',
  precio: 150000,
},
{
  id: 4,
  nombre: 'Heladera Phillips',
  precio: 120000,
},
{
  id: 80,
  nombre: 'Notebook Hp',
  precio: 80000,
},
{
  id: 35,
  nombre: 'Jostick ps5',
  precio: 20000,
},
]

const boton = document.getElementById('boton');
const botonDos = document.getElementById('botonDos');
const botonTres = document.getElementById('botonTres');
const botonCuatro = document.getElementById('botonCuatro');
const carta = document.querySelector('.card');


function mostrar(nombre) {
  let div = document.createElement('div');
  div.innerHTML = `<p class="card">Se agrego su producto ${nombre}</p>`;
  document.body.append(div);
}

boton.addEventListener('click', () => {
  mostrar('Televisor Samsung');
})

botonDos.addEventListener('click', () => {
  mostrar('Heladera Phillips');
})

botonTres.addEventListener('click', () => {
  mostrar('Notebook Hp');
})

botonCuatro.addEventListener('click', () => {
  mostrar('Jostick ps5');
})
