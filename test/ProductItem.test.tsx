import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ProductItem from './ProductItem'; 
import { Provider } from 'react-redux'; 
import configureStore from 'redux-mock-store'; 


const mockStore = configureStore([]);

describe('ProductItem Component', () => {
  it('renders correctly', () => {
    const product = {
      id: 1,
      name: 'Test Product',
      price: 9.99,
      description: 'A test product',
    };

    const store = mockStore({}); 
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <ProductItem product={product} />
      </Provider>
    );

    
    expect(getByText('Test Product')).toBeTruthy();
    expect(getByText('$9.99')).toBeTruthy();
    expect(getByText('A test product')).toBeTruthy();

    
  });

  it('handles the "Add to Cart" button click', () => {
    const product = {
      id: 2,
      name: 'Another Product',
      price: 19.99,
      description: 'Another test product',
    };

    const store = mockStore({}); 
    const { getByText } = render(
      <Provider store={store}>
        <ProductItem product={product} />
      </Provider>
    );

    const addToCartButton = getByText('Add to Cart');
    fireEvent.press(addToCartButton);

    
    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'ADD_TO_CART', payload: product }]);
  });
});