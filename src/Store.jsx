import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/Auth/AuthSlice";
import signupReducer from "./features/Auth/SignupSlice"; 

const store = configureStore({
    reducer: {
        login: loginReducer,
        signup: signupReducer,
    },
});

export default store;