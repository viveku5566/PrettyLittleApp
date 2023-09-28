import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './store';
import ProductItem from './ProductItem';
import CartScreen from './CartScreen';
import { CartProvider } from './CartContext'; 
import ShoppingApp from './ShoppingApp';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CartProvider> 
        <NavigationContainer>
          <Stack.Navigator initialRouteName="ProductList">
            <Stack.Screen name="ProductList" component={ProductItem} options={{ title: 'Product List' }} />
            <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Cart' }} />
            <Stack.Screen name="ShoppingApp" component={ShoppingApp}/>
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </Provider>
  );
};

export default App;