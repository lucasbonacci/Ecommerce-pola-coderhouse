import React from 'react'
import NavBar from './NavBar'
import ItemListContainer from './ItemListContainer'
import Cart from './Cart'
import Footer from './Footer'
import './css/app.css'
import ItemDetailContainer from './ItemDetailContainer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import NotFound from './NotFound'
import FormCheckOut from './FormCheckOut'
import Login from './Login'
import Register from './Register'


const App = () =>{
    return (
        <Router>
            <main>
            <NavBar/>
                <Switch>
                    <Route path='/carrito'>
                        <Cart/>
                    </Route>
                    <Route path='/checkout'>
                        <FormCheckOut/>
                    </Route>
                    <Route path='/itemDetail/:catId'>
                        <ItemDetailContainer/>
                    </Route>
                    <Route path='/category/:categoriaId'>
                        <ItemListContainer/>
                    </Route>
                    <Route exact path='/'>
                        <ItemListContainer/>
                    </Route>
                    <Route path='/login'>
                        <Login/>
                    </Route>
                    <Route path='/register'>
                        <Register/>    
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