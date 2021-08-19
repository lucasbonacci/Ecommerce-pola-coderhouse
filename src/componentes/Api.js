import listaDeProductos from "./ListaDeProductos"

export const taskProductos = new Promise((resolve) => {
    setTimeout(() =>{
        resolve(listaDeProductos)
    },2000)
})



export const taskProductosCategoria = (categoriaId) => 
    new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(listaDeProductos.filter(productos => productos.categoria === categoriaId))
        },2000)
    })


export const taskProductosId = (id) =>
    new Promise(resolve =>{
        setTimeout(() =>{
            resolve(listaDeProductos.filter(productos => productos.id === Number(id)))
        },2000)
    })