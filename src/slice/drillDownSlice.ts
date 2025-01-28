import { createSlice } from '@reduxjs/toolkit';

interface DrillDownState {
  highLevelData: { category: string; value: number }[];
  detailedData: Record<string, { label: string; value: number }[]>;
  selectedCategory: string | null;
}

const initialState: DrillDownState = {
  highLevelData: [
    { category: 'North America', value: 150 },
    { category: 'Europe', value: 120 },
    { category: 'Asia', value: 200 },
    { category: 'South America', value: 80 },
  ],
  detailedData: {
    'North America': [
      { label: 'USA', value: 90 },
      { label: 'Canada', value: 40 },
      { label: 'Mexico', value: 20 },
    ],
    Europe: [
      { label: 'Germany', value: 50 },
      { label: 'UK', value: 40 },
      { label: 'France', value: 30 },
    ],
    Asia: [
      { label: 'China', value: 100 },
      { label: 'India', value: 60 },
      { label: 'Japan', value: 40 },
    ],
    'South America': [
      { label: 'Brazil', value: 50 },
      { label: 'Argentina', value: 30 },
    ],
  },
  selectedCategory: null,
};

const drillDownSlice = createSlice({
  name: 'drillDown',
  initialState,
  reducers: {
    selectCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    resetSelection(state) {
      state.selectedCategory = null;
    },
  },
});

export const { selectCategory, resetSelection } = drillDownSlice.actions;
export default drillDownSlice.reducer;
