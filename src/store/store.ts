import { configureStore } from '@reduxjs/toolkit';
import chartsReducer from '../slice/chartSlice';
import drillDownReducer from '../slice/drillDownSlice';
import themeReducer from '../slice/themeSlice';
import userReducer from '../slice/userSlice'; // Path to your slice
const store = configureStore({
  reducer: {
    charts: chartsReducer,
    drillDown: drillDownReducer,
    theme:themeReducer,
    users: userReducer, // Add your user reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
