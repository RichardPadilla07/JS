// Variable: contenedor (caja) de informacion.
// ES6

// let - const
// var (no usaremos) - hosting

// Tipo de datos primitivos
let numOrden = 127 //int
let modulo = "Mis ordenes" //string
let status = true //booleano
let ordenes = ["Balon", "Camiseta", "Zapatos"] //array
let tipoPago = "E" //char
let precioFinal = 155.99 //float
const CI = 1753078839 //int - inmutable

// Tipo de datos compuestos 
let ordenes2 = ["Blaon", "Camiseta", "Zapatos"] //array
let detalleOrden2 = {
    id: 127,
    estado: "Activo",
    precio: 155.99,
    items: ["Balon", "Camiseta", "Zapatos"]
} //object

// TAREA desafio: json vs objecto
let ordenes3 = ["Blaon", "Camiseta", "Zapatos"] //array
let detalleOrden3 = {
    "id": 127,
    "estado": "Activo",
    "precio": 155.99,
    "items": ["Balon", "Camiseta", "Zapatos"]
} //object


// Strings
let nombreCompleto = "Richard Padilla"
nombreCompleto.length //longitud
nombreCompleto.toUpperCase() // Mayusculas
nombreCompleto.toLowerCase() // Minusculas
nombreCompleto.trim() // Eliminar espacios en blanco
