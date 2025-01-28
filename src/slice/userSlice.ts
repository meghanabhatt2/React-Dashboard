import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define initial state
interface UserState {
  data: any[]; // Replace `any[]` with the appropriate type for user data
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: [],
  loading: false,
  error: null,
};

// Async thunk to fetch user data
export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return await response.json();
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

// Slice definition
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}, // Add synchronous reducers here if needed
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default userSlice.reducer;
