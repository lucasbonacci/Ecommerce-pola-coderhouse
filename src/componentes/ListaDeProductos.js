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
import collarMarron from '../assets/collarMarron.png'
import collarMarron2 from '../assets/collarMarron2.png'
import collarNashe from '../assets/collarNashe.png'
import collarRosa from '../assets/collarRosa.png'

const listaDeProductos =[
    {
        categoria: 'cartera',
        id: 1,
        nombre: 'Cartera de cuero',
        precio: 950,
        img: cartera1,
        stock:10,
        min:1, 
        descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.'
    },
    {
        categoria: 'cartera',
        id: 2,
        nombre: 'Cartera azul',
        precio: 700,
        img: cartera2,
        stock:1,
        min:1,
        descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
    },
    {
        categoria: 'joyas',
        id: 3,
        nombre: 'aros de plata',
        precio: 1500,
        img: aros,
        stock:7,
        min:1, 
        descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
    },
    {
        categoria: 'joyas',
        id: 4,
        nombre: 'Aros Amarillos',
        precio: 1500,
        img: arosAmarillos,
        stock:7,
        min:1, 
        descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
    },
    {
        categoria: 'joyas',
        id: 5,
        nombre: 'Aros en Espiral',
        precio: 1500,
        img: arosEnEspiral,
        stock:7,
        min:1, 
        descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
    },
    {
        categoria: 'joyas',
        id: 6,
        nombre: 'Aros Escarapela',
        precio: 1500,
        img: arosEscapela,
        stock:7,
        min:1, 
        descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
    },
    {
        categoria: 'joyas',
        id: 7,
        nombre: 'Aros Largos',
        precio: 1500,
        img: arosLargos,
        stock:7,
        min:1, 
        descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
    },
    {
        categoria: 'joyas',
        id: 8,
        nombre: 'Aros Redondos',
        precio: 1500,
        img: arosRedondos,
        stock:7,
        min:1, 
        descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
    },
    {
        categoria: 'cartera',
        id: 9,
        nombre: 'cartera blanca',
        precio: 1500,
        img: carteraBlanca,
        stock:7,
        min:1, 
        descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
    },
    {
        categoria: 'cartera',
        id: 10,
        nombre: 'cartera Marron',
        precio: 1500,
        img: carteraMarron,
        stock:7,
        min:1, 
        descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
    },
    {
        categoria: 'collar',
        id: 13,
        nombre: 'collar marron',
        precio: 1500,
        img: collarMarron,
        stock:7,
        min:1, 
        descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
    },
    {
        categoria: 'collar',
        id: 14,
        nombre: 'collar lirico',
        precio: 1500,
        img: collarMarron2,
        stock:7,
        min:1, 
        descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
    },
    {
        categoria: 'collar',
        id: 15,
        nombre: 'Collar hibrido',
        precio: 1500,
        img: collarNashe,
        stock:7,
        min:1, 
        descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
    },
    {
        categoria: 'collar',
        id: 16,
        nombre: 'collar rosa',
        precio: 1500,
        img: collarRosa,
        stock:7,
        min:1, 
        descripcion: 'Lorem ipsum dolor sit amet, nam ne veri aeterno. Eos alia discere an, sed ne sale nobis. Quo mediocrem dissentias cu, everti accusamus vix ad, ne quot epicurei neglegentur mel. An latine sapientem forensibus quo. Placerat platonem pertinacia sed ne.' 
    },

]

export default listaDeProductos






