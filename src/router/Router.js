import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import Carrito from "../components/Cart";
import NavBar from "../components/NavBar/NavBar";

const Router = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/" component={ItemListContainer} />
                <Route path="/categoria/:categoriaId" component={ItemListContainer} />
                <Route path="/producto/:productoId" component={ItemDetailContainer} />
                <Route path="/carrito" component={Carrito} />    
            </Switch>
        </BrowserRouter>
    );
};

export default Router;