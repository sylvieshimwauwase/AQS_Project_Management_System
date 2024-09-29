import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/Auth/AuthSlice";

const store = configureStore({

    reducer: {
        login: loginReducer,
    },
});

export default store;