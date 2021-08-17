import React from 'react'
import Header from './Header'
import Principal from './Principal'
import CheckOut from './CheckOut'
import './App.css'
import ItemDetailContainer from './ItemDetailContainer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 


const App = () =>{
    return (
        <Router>
            <main>
            <Header/>
                <Switch>
                    <Route path='/carrito'>
                        <CheckOut/>
                    </Route>
                    <Route path='/itemDetail'>
                        <ItemDetailContainer/>
                    </Route>
                    <Route path='/'>
                        <Principal/>
                    </Route>
                </Switch>
    </main>
        </Router>)
}

export default App