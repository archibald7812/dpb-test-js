import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
	base: '',
	rates: [],
	status: 'idle'
}

export const fetchRates = createAsyncThunk('rates/fetchRates', async (currency) => {

	const url = new URL('https://api.exchangerate.host/latest')
	url.searchParams.set('base', currency)
	const result = await fetch(url)
	const response = await result.json()
	return response
})

export const ratesSlice = createSlice({
	name: 'rates',
	initialState,
	extraReducers(builder) {
		builder
			.addCase(fetchRates.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(fetchRates.fulfilled, (state, action) => {
				state.base = action.payload.base
				state.rates = [...Object.entries(action.payload.rates)]
			})
	}
})