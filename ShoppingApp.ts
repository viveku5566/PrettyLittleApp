import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import axios from 'axios';
import { Product } from './types';

const ShoppingApp: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/benirvingplt/products/products') 
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.imageUrl }} />
            <Text>{item.name}</Text>
            <Text>${item.price.toFixed(2)}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ShoppingApp;