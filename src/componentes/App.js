import React from 'react'
import NavBar from './NavBar'
import ItemListContainer from './ItemListContainer'
import Cart from './Cart'
import Footer from './Footer'
import './css/app.css'
import ItemDetailContainer from './ItemDetailContainer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import NotFound from './NotFound'
import Login from './Login'
import Register from './Register'
import CheckOut from './CheckOut'

const App = () =>{
    return (
        <Router>
            <main>
            <NavBar/>
                <Switch>
                    <Route path='/carrito' component={Cart}/>
                    <Route path='/checkout' component={CheckOut}/>
                    <Route path='/itemDetail/:catId' component={ItemDetailContainer}/>
                    <Route path='/category/:categoryId' component={ItemListContainer}/>
                    <Route exact path='/' component={ItemListContainer}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route path='*' component={NotFound}/>
                </Switch>
            <Footer/>
            </main>
        </Router>)
}

export default App