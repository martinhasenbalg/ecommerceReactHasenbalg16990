import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ defaultValue = false, children }) => {

  const [items, setItems] = useState([]);
  const [cantidades, setCantidades] = useState(0);
  const [importeTotal, setImporteTotal] = useState(0);

  const addItem = (producto, cantidad) => {
    const item = {
      item: producto,
      cantidad: cantidad,
    };
    let duplicado = false;
    items.map(itemCarrito => {
      if (itemCarrito.item.id === item.item.id) {
        itemCarrito.cantidad += item.cantidad;
        duplicado = true;
      }
    });
    if (!duplicado) {
      const newItems = [...items, item];
      setItems(newItems);
    }
    totalizar();
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.item.id !== id);
    setItems(newItems);
    totalizar();
  };

  const removeItemCant = (id,cant) => {
    items.map(itemCarrito => {
      if (itemCarrito.item.id === id) {
        itemCarrito.cantidad -= cant;       
      }
    });
    totalizar();
  };

  const clearAllItems = () => {
    setItems([]);
    totalizar();
  };

  const totalizar = () => {
    let auxcants = 0;
    let auximps = 0;
    items.map(item => {
     auxcants = auxcants + item.cantidad;
     auximps = auximps + (item.cantidad * item.item.price);      
    });
    setCantidades(auxcants);
    setImporteTotal(auximps);
  }

  useEffect(() => {
    totalizar();
  },[items]);

  return (
    <CartContext.Provider value={{ items,cantidades,importeTotal, removeItemCant, addItem, removeItem, clearAllItems }}>
      {children}
    </CartContext.Provider>
  );
};
