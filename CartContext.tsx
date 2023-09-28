import React, { createContext, useContext, useReducer } from 'react';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
}

type CartAction = { type: 'ADD_TO_CART'; payload: CartItem } | { type: 'REMOVE_FROM_CART'; payload: number };

const initialState: CartState = {
  cart: [],
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.cart.findIndex((item) => item.product.id === action.payload.product.id);

      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, cart: updatedCart };
      } else {
        return { ...state, cart: [...state.cart, action.payload] };
      }

    case 'REMOVE_FROM_CART':
      const updatedCart = state.cart.filter((item) => item.product.id !== action.payload);
      return { ...state, cart: updatedCart };

    default:
      return state;
  }
};

export const CartProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};