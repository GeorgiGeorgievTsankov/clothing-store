import './ProductCardStyles.css';

import {ButtonComponent} from '../Button/ButtonComponent';

const ProductCardComponent = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <ButtonComponent buttonType='inverted'>Add to card</ButtonComponent>
    </div>
  );
};

export default ProductCardComponent;
