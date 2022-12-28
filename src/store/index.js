import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { currenciesSlice } from "./currencies/currenciesSlice";

const RootReducer = combineReducers({
	currencies: currenciesSlice.reducer,
})

export const store = configureStore({
	reducer: RootReducer
})