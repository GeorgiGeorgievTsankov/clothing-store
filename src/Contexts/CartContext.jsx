import { useEffect } from 'react';
import { createContext, useState } from 'react';

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};


const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

    if(existingCartItem.quantity === 1){
      return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

   
      return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
          ? { ...cartItem, quantity: cartItem.quantity -1 }
          : cartItem
      );

}



export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => { },
  cartItems: [],
  addItemToCart: () => { },
  removeItemFromCart: () => { },
  clearItemFromCart: ()=>{},
  cartItemCount: 0,
  cartTotalPrice:0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartItemCount(count);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotalPrice(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  }

  const clearItemFromCart = (cartItemToDelete) => {
    setCartItems(cartItems.filter(cartItem => cartItem.id !== cartItemToDelete.id));
  }

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartItemCount, removeItemToCart, clearItemFromCart, cartTotalPrice };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};