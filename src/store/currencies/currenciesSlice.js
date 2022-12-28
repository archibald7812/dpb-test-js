import { createSlice } from "@reduxjs/toolkit"
import { fetchCurrenciesList } from "./actions"
console.log(1)
const initialState = {
	currencies: [],
	status: 'idle'
}

export const currenciesSlice = createSlice({
	name: 'currencies',
	initialState,
	extraReducers(builder) {
		builder
			.addCase(fetchCurrenciesList.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(fetchCurrenciesList.fulfilled, (state, action) => {
				state.currencies = [...Object.values(action.payload.symbols)]
			})
	}
})

export default currenciesSlice.reducer