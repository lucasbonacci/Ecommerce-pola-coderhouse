import cartera1 from '../assets/cartera1.png'
import cartera2 from '../assets/cartera2.png'
import aros from '../assets/aros.png'

const listaDeProductos =[
    {
        id: 1,
        nombre: 'Cartera de cuero',
        precio: 950,
        img: cartera1,
        stock:10,
        min:1, 
        descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.'
    },
    {
        id: 2,
        nombre: 'Cartera azul',
        precio: 700,
        img: cartera2,
        stock:1,
        min:1,
        descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
    },
    {
        id: 3,
        nombre: 'aros de plata',
        precio: 1500,
        img: aros,
        stock:7,
        min:1, 
        descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
        },
        {
            id: 11,
            nombre: 'Cartera de cuero',
            precio: 950,
            img: cartera1,
            stock:10,
            min:1, 
            descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
        },
        {
            id: 21,
            nombre: 'Cartera azul',
            precio: 700,
            img: cartera2,
            stock:1,
            min:1, 
            descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
        },
        {
            id: 31,
            nombre: 'aros de plata',
            precio: 1500,
            img: aros,
            stock:7,
            min:1, 
            descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
            },
            {
                id: 12,
                nombre: 'Cartera de cuero',
                precio: 950,
                img: cartera1,
                stock:10,
                min:1, 
                descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
            },
            {
                id: 22,
                nombre: 'Cartera azul',
                precio: 700,
                img: cartera2,
                stock:1,
                min:1, 
                descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
            },
            {
                id: 32,
                nombre: 'aros de plata',
                precio: 1500,
                img: aros,
                stock:7,
                min:1, 
                descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
                },
                {
                    id: 13,
                    nombre: 'Cartera de cuero',
                    precio: 950,
                    img: cartera1,
                    stock:10,
                    min:1, 
                    descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
                },
                {
                    id: 23,
                    nombre: 'Cartera azul',
                    precio: 700,
                    img: cartera2,
                    stock:1,
                    min:1, 
                    descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
                },
                {
                    id: 33,
                    nombre: 'aros de plata',
                    precio: 1500,
                    img: aros,
                    stock:7,
                    min:1, 
                    descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
                    },
]




const  taskProductos = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve(listaDeProductos)
    },2000)
})

export default taskProductos


