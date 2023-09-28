import { takeLatest, put } from 'redux-saga/effects';
import { ADD_TO_CART } from './cart';

function* addToCartSaga(action) {
  try {
    
  } catch (error) {
    
  }
}

export default function* rootSaga() {
  yield takeLatest(ADD_TO_CART, addToCartSaga);
}