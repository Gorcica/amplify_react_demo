// eslint-disable-next-line
import { configureStore } from '@reduxjs/toolkit';
import userInfoReducer from '../components/slicer/userInfoSlice';
import rouletteCountInfoReducer from '../components/slicer/rouletteCountInfoSlice';
import productListFilterReducer from '../components/slicer/productListFilterSlice';

// eslint-disable-next-line
export default configureStore({
  reducer: {
    userInfo: userInfoReducer,
    rouletteCount: rouletteCountInfoReducer,
    productListFilter: productListFilterReducer
  },
});