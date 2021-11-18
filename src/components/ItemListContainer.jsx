import React from 'react';
import ItemList from './ItemList';

const ItemListContainer = (props) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{props.saludo}</h1>
            <ItemList />
        </div>
        
    )
}

export default ItemListContainer