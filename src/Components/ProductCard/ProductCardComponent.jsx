import './ProductCardStyles.css';
import { useContext } from 'react';
import { CartContext } from '../../Contexts/CartContext';


import { ButtonComponent } from '../Button/ButtonComponent';

const ProductCardComponent = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart (product);

    

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <ButtonComponent buttonType='inverted' onClick = {addProductToCart} >Add to card</ButtonComponent>
        </div>
    );
};

export default ProductCardComponent;