import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import Carrito from "../components/Cart";
import NotFound from "../components/NotFound";
import NavBar from "../components/NavBar/NavBar";
// import { Contactus } from "../components/Contactus";
import Register from "../components/Register";
import PedidosList from "../components/PedidosList";

const Router = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/" component={ItemListContainer} />
                <Route path="/categoria/:categoriaId" component={ItemListContainer} />
                <Route path="/producto/:productoId" component={ItemDetailContainer} />
                <Route path="/carrito" component={Carrito} />
                {/* <Route path="/contacto" component={Contactus} /> */}
                <Route path="/registrarse" component={Register} />
                <Route path="/mispedidos" component={PedidosList} />
                <Route path="*" component={NotFound} />          
            </Switch>
        </BrowserRouter>
    );
};

export default Router;