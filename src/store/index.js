import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { currenciesSlice } from './currencies/currenciesSlice'
import { ratesSlice } from "./rates/ratesSlice";

const RootReducer = combineReducers({
	currencies: currenciesSlice.reducer,
	rates: ratesSlice.reducer
})

export const store = configureStore({
	reducer: RootReducer
})