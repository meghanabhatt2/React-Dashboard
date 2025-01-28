import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RevenueData {
  month: string;
  revenue: number;
}

interface SalesData {
  month: string;
  target: number;
  actual: number;
}

interface CustomerSegment {
    segment: string;
    percentage: number;
  }
  
  interface KpiData {
    id: string; // Add this property
    title: string;
    value: string;
    description: string;
  }


interface ChartsState {
  revenueTrends: RevenueData[];
  salesComparison: SalesData[];
  customerSegments: CustomerSegment[];
  kpiCards: KpiData[];
}

const initialState: ChartsState = {

    customerSegments: [
        { segment: 'Retail', percentage: 40 },
        { segment: 'Wholesale', percentage: 30 },
        { segment: 'Enterprise', percentage: 20 },
        { segment: 'Other', percentage: 10 },
      ],
      kpiCards: [
        {id:'1', title: 'Total Revenue', value: '$120,000', description: 'Compared to last month' },
        { id:'2',title: 'New Customers', value: '350', description: 'In the last 30 days' },
        {id:'3', title: 'Customer Retention', value: '78%', description: 'Compared to last quarter' },
        {id:'4', title: 'Net Profit', value: '$25,000', description: 'After expenses' },
      ],

  revenueTrends: [
    { month: 'Jan', revenue: 5000 },
    { month: 'Feb', revenue: 7000 },
    { month: 'Mar', revenue: 8000 },
    { month: 'Apr', revenue: 6500 },
    { month: 'May', revenue: 9000 },
    { month: 'Jun', revenue: 8500 },
  ],
  salesComparison: [
    { month: 'Jan', target: 6000, actual: 5000 },
    { month: 'Feb', target: 8000, actual: 7000 },
    { month: 'Mar', target: 9000, actual: 8000 },
    { month: 'Apr', target: 7000, actual: 6500 },
    { month: 'May', target: 10000, actual: 9000 },
    { month: 'Jun', target: 9500, actual: 8500 },
  ],
};

const chartsSlice = createSlice({
  name: 'charts',
  initialState,
  reducers: {
    // Reducer to update the order of KPI Cards
    updateKpiCards(state, action: PayloadAction<KpiData[]>) {
      state.kpiCards = action.payload;
    }
  },
});
export const { updateKpiCards } = chartsSlice.actions;
export default chartsSlice.reducer;
