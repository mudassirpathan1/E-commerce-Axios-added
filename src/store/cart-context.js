import React from 'react';

const CartContext = React.createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
    crudlist: (items) => {},
    cruditems: [],
});

export default CartContext;