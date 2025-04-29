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






