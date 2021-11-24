import React from 'react';


import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-buttom/custom-button.components';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <div className='custom-button '>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
      </div>
    </div>
  );
};


const mapDispatchToPrps = dispatch => ({
    addItem: item => dispatch(addItem(item))

})
export default connect(null, mapDispatchToPrps)(CollectionItem);