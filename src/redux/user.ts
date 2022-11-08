import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import { store } from "./store";


export interface UserState {
    user: any,
    userId: String,
    loading: Boolean,
    error: Boolean,
}
const initialState: UserState = {
    user: null,
    userId: "",
    loading: false,
    error: false,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        authStart: (state) => {
            state.loading = true;
        },
        authSuccess: (state, action: PayloadAction<any>) =>{
            state.user =  action.payload;
            // localStorage.setItem("token", JSON.stringify(action.payload))
            state.loading = false;
            state.error = false;

        },
        authFailure: (state) => {
            state.user = null;
            state.loading = false;
            state.error = true;
        },
        logout: (state) => {
            state.user = null;
            state.loading = false;
            state.error = false;
        }
    }
})

export const  {authStart, authSuccess, authFailure, logout} = userSlice.actions;

export default userSlice.reducer;

