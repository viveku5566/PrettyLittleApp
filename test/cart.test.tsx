import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import store from './store'; 



import ProductItem from './ProductItem';

describe('Add to Cart Functionality', () => {
  it('should add a product to the cart when "Add to Cart" button is pressed', () => {
    const product = { id: 1, name: 'Test Product', price: 10.99, description: 'A test product' };

    const { getByText } = render(
      <Provider store={store}>
        <ProductItem product={product} addToCart={addToCart} />
      </Provider>
    );

    const addToCartButton = getByText('Add to Cart');
    fireEvent.press(addToCartButton);

    
    const state = store.getState(); 
    expect(state.cart.cartItems).toContainEqual(product);
  });
});