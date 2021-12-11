import React from 'react';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartWidget = ({cant}) => {
    return (
      <div>
        <FontAwesomeIcon icon={faShoppingCart} /> [{cant}]
      </div>
    );
};

export default CartWidget;