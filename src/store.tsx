import { configureStore, combineReducers } from '@reduxjs/toolkit';

import pageSlice from './slices/pageSlice';
import idSlice from './slices/idSlice';

const reducer = combineReducers({ page: pageSlice, id: idSlice });

const store = configureStore({
  reducer,
});

export default store;
