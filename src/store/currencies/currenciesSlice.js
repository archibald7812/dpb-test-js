import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { store } from ".."
//import { fetchCurrenciesList } from './actions'

const initialState = {
	currencies: [],
	status: 'idle'
}

export const fetchCurrenciesList = createAsyncThunk('currencies/fetchCurrenciesList', async () => {

	const currencies = store.getState().currencies.currencies

	if (currencies.length) return

	const url = new URL('https://api.exchangerate.host/symbols')
	const result = await fetch(url)
	const response = await result.json()
	return response
})

export const currenciesSlice = createSlice({
	name: 'currencies',
	initialState,
	extraReducers(builder) {
		builder
			.addCase(fetchCurrenciesList.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(fetchCurrenciesList.fulfilled, (state, action) => {
				if (!action.payload) return
				state.currencies = [...Object.values(action.payload.symbols)]
			})
	}
})