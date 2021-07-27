import React from 'react'
import {Navbar, Container, Form, FormControl, Button} from 'react-bootstrap'
import logopola from '../assets/pola.jpg'
import { BsSearch } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'

const Menu = () => (
<Navbar fixed="top" className="menu__navbar">
    <Container>
        <Navbar.Brand href="#home">
            <img
                alt="pola accesorios"
                src={logopola}
                className="d-inline-block align-top img__logo"
            />
        </Navbar.Brand>
        <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Buscar producto"
                className="mr-2"
                aria-label="Search"
            />
            <Button className="search__button"><BsSearch/></Button>
        </Form>
        <Button className="menu__botones"> LOG IN</Button>
        <Button className="menu__botones"> <MdShoppingCart/> </Button>
    </Container>
</Navbar>
)


export default Menu