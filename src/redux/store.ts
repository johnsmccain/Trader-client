import {configureStore, combineReducers} from "@reduxjs/toolkit";
// import {
//     FLUSH, PAUSE, PERSIST, persistReducer, persistStore, 
//     PURGE, REGISTER, REHYDRATE
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { PersistGate } from "redux-persist/integration/react";

import userReducer from "./user";


export const store = configureStore({
    reducer: {
        user: userReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
