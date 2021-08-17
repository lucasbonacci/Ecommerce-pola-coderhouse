import cartera1 from '../assets/cartera1.png'
import cartera2 from '../assets/cartera2.png'
import aros from '../assets/aros.png'
import arosAmarillos from '../assets/arosAmari.png'
import arosEnEspiral from '../assets/arosEnEspiral.png'
import arosEscapela from '../assets/arosEscarapela.png'
import arosLargos from '../assets/arosLargos.png'
import arosRedondos from '../assets/arosRedondos.png'
import carteraBlanca from '../assets/carterablanca.png'
import carteraMarron from '../assets/carteraMarron.png'
import carteraNashe from '../assets/collarNashe.png'
import carteraRosa from '../assets/collarRosa.png'


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
        id: 4,
        nombre: 'Aros Amarillos',
        precio: 1500,
        img: arosAmarillos,
        stock:7,
        min:1, 
        descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
    },
    {
        id: 5,
        nombre: 'Aros en Espiral',
        precio: 1500,
        img: arosEnEspiral,
        stock:7,
        min:1, 
        descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
    },
    {
        id: 6,
        nombre: 'Aros Escarapela',
        precio: 1500,
        img: arosEscapela,
        stock:7,
        min:1, 
        descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
    },
    {
        id: 7,
        nombre: 'Aros Largos',
        precio: 1500,
        img: arosLargos,
        stock:7,
        min:1, 
        descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
    },
    {
        id: 8,
        nombre: 'Aros Redondos',
        precio: 1500,
        img: arosRedondos,
        stock:7,
        min:1, 
        descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
    },
    {
        id: 9,
        nombre: 'cartera blanca',
        precio: 1500,
        img: carteraBlanca,
        stock:7,
        min:1, 
        descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
    },
    {
        id: 10,
        nombre: 'cartera Marron',
        precio: 1500,
        img: carteraMarron,
        stock:7,
        min:1, 
        descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
    },
    {
        id: 11,
        nombre: 'cartera nashe',
        precio: 1500,
        img: carteraNashe,
        stock:7,
        min:1, 
        descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
    },
    {
        id: 12,
        nombre: 'cartera Rosa',
        precio: 1500,
        img: carteraRosa,
        stock:7,
        min:1, 
        descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
    }    
]




const  taskProductos = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve(listaDeProductos)
    },2000)
})

export default taskProductos


