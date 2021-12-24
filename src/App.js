import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './router/Router';
import { CartProvider } from './context/CartContext';
import { LoginProvider } from './context/LoginContext';
import './estilo.css'


const App = () => {
  return (
    <div className="div-img-datos">
      <LoginProvider>
      <CartProvider>
        <Router />    
      </CartProvider>
      </LoginProvider>        
    </div>
  );
}

export default App;
