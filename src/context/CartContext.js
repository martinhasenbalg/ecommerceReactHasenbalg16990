import React, { createContext, useEffect, useState } from "react";
import { getFirestore } from "../firebase/firebase";

export const CartContext = createContext([]);

export const CartProvider = ({ defaultValue = false, children }) => {
  const [items, setItems] = useState([]);
  const [cantidades, setCantidades] = useState(0);
  const [importeTotal, setImporteTotal] = useState(0);
  const [orderCreatedId, setOrderCreatedId] = useState(null);
  const [comprador, setComprador] = useState(null);

  const addItem = (producto, cantidad) => {
    let respuesta = {
      title: `Producto Agregado`,
      text: `Se agregaron ${cantidad} unid. de ${producto.title} a su carrito`,
      icon: `success`
    };
    const item = {
      item: producto,
      cantidad: cantidad,
    };
    let duplicado = false;
    items.forEach(itemCarrito => {
      if (itemCarrito.item.id === item.item.id) {
        //ahora veridico que el agregado que hace cliente con lo que ya tenia en el carrito no supere el stock
        //si lo supera le asigno el stock
        if(itemCarrito.item.stock - (itemCarrito.cantidad + item.cantidad) < 0){
          itemCarrito.cantidad = itemCarrito.item.stock;
          respuesta = {
            title: `Límite de Stock alcanzado`,
            text: `Ha alcanzado la cantidad maxima que tenemos disponible. Disculpe las molestias`,
            icon: `info`
          };
        }else{
          itemCarrito.cantidad += item.cantidad;
        }        
        duplicado = true;
        localStorage.setItem("carrito",JSON.stringify(items));
      }
    });
    
    if (!duplicado) {
      const newItems = [...items, item];
      setItems(newItems);
      localStorage.setItem("carrito",JSON.stringify(newItems));          
    }

      
    totalizar();
    return(respuesta);   
    
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.item.id !== id);
    setItems(newItems);
    localStorage.setItem("carrito",JSON.stringify(newItems));
    totalizar();
  };

  const removeItemCant = (id,cant) => {
    items.forEach(itemCarrito => {
      if (itemCarrito.item.id === id) {
        itemCarrito.cantidad -= cant;       
      }
    });
    totalizar();
  };

  const clearAllItems = () => {
    setItems([]);
    localStorage.removeItem("carrito");
    totalizar();
  };

  const totalizar = () => {
    let auxcants = 0;
    let auximps = 0;
    items.forEach(item => {
     auxcants = auxcants + item.cantidad;
     auximps = auximps + (item.cantidad * item.item.price);      
    });
    setCantidades(auxcants);
    setImporteTotal(auximps);
  }

  const getCarritoStorage = () => {
    if(localStorage.getItem("carrito")){
      const newItems = JSON.parse(localStorage.getItem("carrito"));
      setItems(newItems);
    }
  }

  const finalizarCompra = () => {
    let buyer = {};
    if(localStorage.getItem("usuario")){
      const user = JSON.parse(localStorage.getItem("usuario"));
      buyer = {
        nombre: user.displayName,
        telefono: user.phoneNumber,
        email: user.email
      }
      console.log('comprador1: ',buyer);
    }else{
      alert('Debe estar registrado e iniciar sesión');
      window.open('/registrarse','_self');
      return false;
    }
  
    const itemsOrder = items.map((item)=>{
        return {
          id: item.item.id,
          title: item.item.title,
          cant: item.cantidad,
          price: item.item.price
        }
    })
    const orden = {
      date: new Date(),
      buyer: buyer,
      items: itemsOrder,
      total: importeTotal
    };
    console.log(orden);
    const db = getFirestore();
    const orders = db.collection("orders");
    const batch = db.batch();
    orders.add(orden)
    .then(({id}) => {
      setOrderCreatedId(id);
        items.forEach((item) => {
          const docRef = db.collection("items").doc(item.item.id);
          batch.update(docRef, { stock: (item.item.stock - item.cantidad) });
        });
        batch.commit();
        clearAllItems();
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const buscarComprador = (email) => {
    const db = getFirestore();
    const itemCollection = db.collection("buyers");
    const buyers = itemCollection.where("email", "==", email);
      buyers.get().then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No se encontro el comprador");          
        }
        var doc = querySnapshot.docs[0].data();
        setComprador({
          nombre:doc.nombre,
          email:doc.email,
          telefono:doc.telefono
        });        
      })
      .catch((error) => console.log(error))
      .finally(() => console.log(comprador));
  }//fin buscar comprador

  useEffect(() => {
    totalizar();
  },[items]);


  return (
    <CartContext.Provider value={{ items,cantidades,importeTotal,orderCreatedId,comprador,
                removeItemCant, 
                addItem, 
                removeItem, 
                clearAllItems, 
                finalizarCompra, 
                buscarComprador, 
                setComprador,
                getCarritoStorage}}>
      {children}
    </CartContext.Provider>
  );
};
