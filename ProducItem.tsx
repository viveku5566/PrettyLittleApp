import React from 'react';
import { View, Text, Button } from 'react-native';
import { Product } from './types';
import { useCart } from './CartContext';
import {connect} from 'react-redux';

interface ProductProps {
  product: Product;
}

const ProductItem: React.FC<ProductProps> = ({ product,addtoCart }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    addtoCart(product);
  }

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, quantity: 1 } });
  };

  const removeFromCart = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product.id });
  };

  return (
    <View>
      <Text>{product.name}</Text>
      <Text>${product.price.toFixed(2)}</Text>
      <Text>{product.description}</Text>
      <Button title="Add to Cart" onPress={handleAddToCart} />
      <Button title="Remove from Cart" onPress={removeFromCart} />
    </View>
  );
};

const mapDispatchToProps={
    addToCart,
},

export default connect (null,mapDispatchToProps)(ProductItem);