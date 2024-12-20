
// array
const cervezas = [
    { nombre: "Corona 710cc", precio: "$3,559.33", cantidad: "710ml" },
    { nombre: "Corona 330cc", precio: "$2,089.99", cantidad: "330ml" },
    { nombre: "Quilmes 473cc", precio: "$960.00", cantidad: "473ml" },
    { nombre: "Mecklenburger 500cc", precio: "$1,350.00", cantidad: "500ml" }
];

// evento contenedor
const container = document.getElementById('contenedor');

// session storage en vez de local para guardar por sesión 
const carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];


const updateSessionStorage = () => {
    sessionStorage.setItem('carrito', JSON.stringify(carrito));
};

// Crear las cards con foreach
cervezas.forEach(cerveza => {
   
    const card = document.createElement('div');
    card.className = 'card';

    // Añadir nombre
    const nombre = document.createElement('h3');
    nombre.textContent = cerveza.nombre;
    card.appendChild(nombre);

    // Añadir precio
    const precio = document.createElement('p');
    precio.textContent = `Precio: ${cerveza.precio}`;
    card.appendChild(precio);

    // Añadir cantidad (contenido)
    const cantidad = document.createElement('p');
    cantidad.textContent = `Cantidad: ${cerveza.cantidad}`;
    card.appendChild(cantidad);

    // Añadir el botón
    const button = document.createElement('button');
    button.textContent = 'Añadir a carrito';
    button.onclick = () => {
        // Pushear al carrito
        carrito.push(cerveza);
        updateSessionStorage();
        alert(`Agregaste: ${cerveza.nombre}, ${cerveza.precio}, ${cerveza.cantidad}`);
    };
    card.appendChild(button);

    // Aplicar el append al container
    container.appendChild(card);
});


