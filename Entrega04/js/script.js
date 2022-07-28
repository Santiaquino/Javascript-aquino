// 1er Entrega proyecto final (CARRITO)

const pago = parseInt(prompt('Ingrese su pago por el prodcuto (el precio del producto)' + '\n-television samsung ($40000)' + '\n-playstation 4 pro ($45000)' + '\n-notebook hp ($90000)' + '\n-mouse logitech ($5000)' + '\n-auriculares logitech ($10000)'));

const productosNuevos = [];

const productos = [{
    id: 201,
    nombre: 'television samsung',
    precio: 40000,
},
{
    id: 189,
    nombre: 'playstation 4 pro',
    precio: 45000,
},
{
    id: 88,
    nombre: 'notebook hp',
    precio: 90000,
},
{
    id: 56,
    nombre: 'mouse logitech',
    precio: 5000,
},
{
    id: 24,
    nombre: 'auriculares logitech',
    precio: 10000,
}
];

console.log(productos);

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

const filtrados = productos.filter((producto) => producto.precio <= 10000);
console.log(filtrados);

const agregarProducto = alert('Agregue un producto nuevo en nuestra tienda, asi podremos mejorar nuestro servicio');

const id = prompt('Ingrese un id para el producto');
const nombre = prompt('Ingrese un nombre para el producto');
const precio = prompt('Ingrese un precio para el producto');

const productoUsuario = {id,nombre,precio};
productosNuevos.push(productoUsuario);
console.log(productosNuevos); 

despedir();