import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import loginService from "../../Service/Login.Service";

const initialState = {
    userData: localStorage.getItem("hod_name")
    ? {
        email: localStorage.getItem("email"),
      }
    : null,
  users: [],
  loading: false,
  error: null,
};

export const makeLogin = createAsyncThunk(
    "login/login",
    async ({ email, password }, { rejectWithValue }) => {
      try {
        const response = await loginService.login({ email, password });
        if (response) {
          localStorage.setItem("token", response.data.authorization.token); 
          localStorage.setItem("email", response.data.user.email);
          localStorage.setItem("hod_name", response.data.user.hod_name);
        
        }
        return response.data;
      } catch (error) {
        return rejectWithValue(
          error.response?.data?.error || "Invalid Username or Password"
        );
      }
    }
  );

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(makeLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(makeLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(makeLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    // .addCase(signup.pending, (state) => {
    //   state.loading = true;
    //   state.error = null;
    // })
    // .addCase(signup.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.userData = action.payload;
    // })
    // .addCase(signup.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message;
    // });
  },
});

//selectors
export const selectLogin = (state) => state.login.users;
export const selectLoginError =  (state) => state.login.error;
export const selectLoginLoading = (state) => state.login.loading;
export default loginSlice.reducer;
