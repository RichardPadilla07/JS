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
nombreCompleto.charAt(0) // Obtener el primer caracter
nombreCompleto.includes("Richard") // Verificar si existe un texto


//concatenacion
//console.log(nombreCompleto.length) //longitud  
//console.log(nombreCompleto.trim())

//ES6 - Template String
console.log(`Bienvenido - ${nombreCompleto}`) 

// Numbers
let cuotas = "6"
console.log(cuotas + 3)

// ES6 convertir de string a numeeros
console.log(+cuotas + 3)

// Muestra el tipo de dato
console.log(typeof(cuotas)) 

// Orden de presedencia de los operadores
console.log(4*3**2)  

// Booleanos
let saldoUsuario = 1000
let saldoTarjeta = "1000"

// ES6 - Comparacion estricta
// Comparacion de tipos de datos y valores
console.log(saldoUsuario == saldoTarjeta)      

// Condicionales
// IF

const carritoCompra = []
if (carritoCompra.length === 0) {
    console.log("El carrito de compras esta vacio")
}
else {
    console.log("El carrito de compras tiene productos") 
} 

// ES6 - OPERADOR TERNARIO                               // V                                    // F
const mensaje = carritoCompra.length === 0 ? "El carrito de compras esta vacio" : "El carrito de compras tiene productos"
console.log(mensaje) 

// Summary (resumen)
/*
CLASE #3
PUENTE: 
- PUNTO A
- PUNTO B

INTERNET:
Un puente (TCP-IP) que permite conectar 2 puntos (aplicaciones o dispositivos) para intercambiar información.

TCP-IP:
Protocolo de internet que divide y encamina el recurso.

WEB:
Un puente (HTTP o HTTPS) que permite conectar 2 puntos (aplicaciones o dispositivos) para intercambiar paginas web.

API:
Un puente (HTTP o HTTPS) que permite conectar 2 puntos (aplicaciones o dispositivos) para intercambiar recursos.

JAVASCRIPT:
Es un leguaje de programacion que permite crear paginas web dinamicas.

V8:
Es un motor de JavaScript que permite ejecutar el lenguaje en el navegador.

NODE:
Es una herramienta que permite ejecutar JavaScript en el servidor.

ECMASCRIPT:
Reglas para escribir JavaScript.

JSON:
Estandar abierto para  el intercambio de informacion.

JSON vs Objecto:
Comillas dobles en la clave.

*/


// CLASE #4
//iTERADORES





// OBJETOS: variable tipo compuesto que permite almacenar varios de datos a partir de clave-valor

let user = {
    name:"Richard",
    lastname:"Padilla",
    age: 20,
    email: "richard.padilla@epn.edu.ec",
    address:{
        city: "Quito",
        telephone: "0987654321"  
    },
    password: "1233456",
}


user.image = "avatar.png"

delete user.password // eliminar una propiedad de un objeto

console.log(user)


// ES6 - Destructuracion
//ANTES
console.log(user.name) 
console.log(user.lastname)

// NUEVA
// FORMA DE ACCEDER A CADA VARIABLE DEL OBJETO}

//email: correo esta seccion hace solo cambiar el nombre de la variablee
let {name, lastname, age, email: correo, address, image} = user 

console.log(name)
console.log(lastname)
console.log(correo)
console.log(address.city) // aqui accedemos a la propiedad de un objeto dentro de otro objeto


const friends = {
    status: true,
    friendsList: ["Richard", "Juan", "Pedro"],
    
    //metodo:
    sendEmail(){
        return `Send email to ${friends.friendsList[0]}`
    }

}
console.log(friends.sendEmail()) // aqui llamamos al metodo del objeto friends



// de esta forma poder lo que es unir dos objetos en uno solo
const allinformation = {...user, ...friends}
console.log(allinformation)















