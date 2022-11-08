import {configureStore, combineReducers} from "@reduxjs/toolkit";
// import {
//     FLUSH, PAUSE, PERSIST, persistReducer, persistStore, 
//     PURGE, REGISTER, REHYDRATE
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { PersistGate } from "redux-persist/integration/react";

import userReducer from "./user";

// const persistConfig = {
//     key: "root",
//     version: 1,
//     storage,
// }

// const rootReducer =  combineReducers({user: userReducer});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
    // reducer: persistedReducer,
    // middleware: (getDefaultMiddleware) => {
    //     getDefaultMiddleware({
    //         serializableCheck:{
    //             ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //         }
    //     })
    // },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
// export const persistor = persistStore(store);