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
