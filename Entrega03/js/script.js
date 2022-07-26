// segunda entrega complementaria

//array

const juegos = [
    {
        id: 5,
        nombre: 'Call of duty',
        lanzamiento: '2010',
        valor: '$60'
    },
    {
        id: 15,
        nombre: 'Minecraft',
        lanzamiento: '2011',
        valor: '$20'
    },
    {
        id: 30,
        nombre: 'Fifa 22',
        lanzamiento: '2021',
        valor: '$50'
    },
    {
        id: 50,
        nombre: 'God of war',
        lanzamiento: '2005',
        valor: '$30'
    },
    {
        id: 70,
        nombre: 'Gta V',
        lanzamiento: '2013',
        valor: '$40'
    }

]
console.log(juegos);

const id = prompt('AGREGAR LA IDENTIDAD DEL JUEGO');
const nombre = prompt('AGREGAR EL NOMBRE DEL JUEGO');
const lanzamiento = prompt('AGREGAR EL LANZAMIENTO DEL JUEGO');
const valor = parseInt(prompt('AGREGAR EL VALOR DEL JUEGO'));

const juegoUsuario = {id,nombre,lanzamiento,valor};
juegos.push(juegoUsuario);

console.log(juegoUsuario)

/* const pago = parseInt(prompt('Ingrese su pago por el prodcuto'));

function verificar(suPago) {
    alert('Su pago es $' + suPago);
}
verificar(pago);

function despedir() {
    alert('Gracias por su pago, Hasta luego.');
}

if (pago <= 0) {
    alert('Ingrese un pago correcto');
}

else if (pago <= 50000) {
    let cuotas = prompt('Con cuantas cuotas quiere pagar el producto?' + '\na) - 3 \nb) - 6 \nc) - 9');
    switch (cuotas) {
        case '3':
            alert('Su pago son 3 cuotas de $' + pago / 3);
            break;
        case '6':
            alert('Su pago son de 6 cuotas de $' + pago / 6);
            break;
        case '9':
            alert('Su pago son de 9 cuotas de $' + pago / 9);
        default:
            alert('No existe esa cantidad de cuotas para el pago');
            break;
    }
} else {
    let cuotas = prompt('Con cuantas cuotas quiere pagar el producto?' + '\na) - 12 \nb) - 24 \nc) - 36');
    switch (cuotas) {
        case '12':
            alert('Su pago son de 12 cuotas de $' + pago / 12);
            break;
        case '24':
            alert('Su pago son de 24 cuotas de $' + pago / 24);
            break;
        case '36':
            alert('Su pago son de 36 cuotas de $' + pago / 36);
            break;
        default:
            alert('No existe esa cantidad de cuotas para el pago');
            break;
    }
}

despedir(); */ 