import React from 'react'
import Header from './Header'
import Principal from './Principal'
import CheckOut from './CheckOut'
import Footer from './Footer'
import './App.css'
import ItemDetailContainer from './ItemDetailContainer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import NotFound from './NotFound'


const App = () =>{
    return (
        <Router>
            <main>
            <Header/>
                <Switch>
                    <Route path='/carrito'>
                        <CheckOut/>
                    </Route>
                    <Route path='/itemDetail/:id'>
                        <ItemDetailContainer/>
                    </Route>
                    <Route path='/category/:categoriaId'>
                        <Principal/>
                    </Route>
                    <Route exact path='/'>
                        <Principal/>
                    </Route>
                    <Route path='*'>
                        <NotFound/>
                    </Route>
                </Switch>
            <Footer/>
    </main>
        </Router>)
}

export default App