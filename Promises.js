// Promises: Son objetos que representan la finalización o el fracaso de una operación asíncrona.

const conexionBDDExterna = (datosConexion) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            datosConexion ? resolve("Conexión OK") : reject("Error")

        }, 3000)
    })
}

conexionBDDExterna(true)

// .then(): Se ejecuta cuando la promesa se resuelve correctamente.
    .then((respuesta)=> console.log(respuesta)) 

// .catch(): Se ejecuta cuando la promesa se rechaza.
    .catch((error)=> console.log(error))


    // Async/Await: Es una forma de trabajar con promesas que permite escribir código asíncrono de manera más legible y estructurada.
const obtenerProductos = fetch("https://fakestoreapi.com/products")

obtenerProductos
    .then(respuesta => respuesta.json()) // Esto convierte la respuesta en un objeto JSON
    .then(respuesta => console.log(`${respuesta[0].title} - ${respuesta[0].price}`))  // Esto imprime el título y el precio del primer producto
    .catch(error => console.log(error)) // Esto maneja cualquier error que ocurra durante la solicitud

















