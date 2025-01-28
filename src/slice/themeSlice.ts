
import { createSlice } from '@reduxjs/toolkit';
const themeSlice = createSlice({
    name: 'theme',
    initialState: 'dark',
    reducers: {
      toggleTheme: (state) => (state === 'dark' ? 'light' : 'dark'),
    },
  });
  export const { toggleTheme } = themeSlice.actions;
  export default themeSlice.reducer;
  