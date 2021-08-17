import React from 'react'
import Header from './Header'
import Principal from './Principal'
import './App.css'
import ItemDetailContainer from './ItemDetailContainer'


const App = () =>{
    return (<main>
        <Header/>
        <Principal/>
        <hr/>
        <ItemDetailContainer/>
    </main>)
}

export default App