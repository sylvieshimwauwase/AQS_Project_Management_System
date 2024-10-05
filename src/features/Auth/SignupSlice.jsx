import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import loginService from '../../Service/Login.Service';

export const signupUser = createAsyncThunk(
  'auth/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await loginService.signup(userData);
      return response.data; // Assuming the API returns the user data or a success message
    } catch (error) {
      return rejectWithValue(error.response.data); // Handle error response
    }
  }
);

const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    resetSignupState: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Store user data if needed
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Handle error message
      });
  },
});

export const { resetSignupState } = signupSlice.actions;

export default signupSlice.reducer;
