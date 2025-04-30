// asyn y await: Son palabras clave que permiten trabajar con promesas de manera más sencilla y legible.
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


    

// Funcion async - await
async function conexionBDDExternaMySQL(){
    try {
        const response = await conexionBDDExterna(true)
        console.log("------->",response)

    } catch (error) {
        console.log(error)
    }
}

conexionBDDExternaMySQL()


// usar asyn - await para obtener datos de una API
async function obtenerProductosAPITemu(){
    try {
        const request = await fetch("https://fakestoreapi.com/products")
        const response = await request.json()
        console.log(`${response[0].title} - ${response[0].price}`) 
        
    } catch (error) {
        console.log(error)
    }
} 

obtenerProductosAPITemu()


// LOCAL STORAGE
fetch("https://jsonplaceholder.typicode.com/users/1") // API de prueba

    .then(r => r.json())
    .then(data =>{
        let user = { // Objeto que contiene la información del usuario
            name:data.name,
            email:data.email
        }
        guardarLocalStorage(user) // Llama a la función para guardar el objeto en el localStorage

    })
    .catch(e => console.log(e))


// Gurada la infromacion en esa base de datos local del navegador
const guardarLocalStorage = (data) => { 
    localStorage.setItem(`user`, JSON.stringify(data)) // convierte el valor de JS a JSON
}


























