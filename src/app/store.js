import { configureStore } from '@reduxjs/toolkit';
import restroReducer from '../features/counter/restroSlice';
import userReducer from '../features/counter/userSlice';

export const store = configureStore({
  reducer: {
    restros: restroReducer,
    user: userReducer
  },
});
