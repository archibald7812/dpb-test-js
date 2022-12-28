import { createAsyncThunk } from "@reduxjs/toolkit"
import { store } from ".."

export const fetchCurrenciesList = createAsyncThunk('currencies/fetchCurrenciesList', async () => {

	const currencies = store.getState().currencies.currencies

	if (currencies.length) return

	const url = new URL('https://api.exchangerate.host/symbols')
	const result = await fetch(url)
	const response = await result.json()
	return response
})
