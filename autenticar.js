
const login = (username, password) => {
    console.log(`Welcome - ${username}`)
}

// commonjs
// module.exports = login 

// ESMODULES
// export default login 


// Varias cosas - para exportar muchas mas cosas como funciones, metodos, etc
export {
    login,
    LIKES
}