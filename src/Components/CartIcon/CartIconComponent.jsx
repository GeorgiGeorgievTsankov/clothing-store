import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../Assets/shopping-bag.svg';

import { CartContext } from '../../Contexts/CartContext';

import './CartIconStyle.css';

export const CartIconComponent = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className='cart-icon-container' onClick={ toggleIsCartOpen } >
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};


