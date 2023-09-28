import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { connect } from 'react-redux';
import { removeFromCart } from './cart';
import styled from 'styled-components/native';

const Container = styled.view`
flex :1;
padding : 16px;
`;
const CartItemContainer = styled.View`
  border: 1px solid #ddd;
  padding: 16px;
  margin-bottom: 8px;
`;

const CartItemName = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const CartItemQuantity = styled.Text`
  font-size: 16px;
`;

const CartScreen : React.FC = ({ cart, removeFromCart }) => {
  return (
    <Container>
    <View>
      <Text>Your Cart</Text>
      <FlatList 
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CartItemContainer>
           <CartItemName>{item.name}</CartItemName>
           <CartItemQuantity>{item.quantity}</CartItemQuantity>
            <Button title="Remove" onPress={() => removeFromCart(item.id)} />
            </CartItemContainer>
          
        )}
      />
    </View>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);