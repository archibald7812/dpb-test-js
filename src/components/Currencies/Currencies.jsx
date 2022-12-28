import classnames from "classnames"
import styles from './index.module.css'
import { useState } from "react"
import { ExchangeRate } from "../ExchangeRate/ExchangeRate"

export const Currencies = () => {

	const [value, setValue] = useState('')
	const [rate, setRate] = useState(0)

	const getRates = () => {
		const params = value.split(' ')
		const amount = params[0]
		const from = params[1].toUpperCase()
		const to = params[3].toUpperCase()
		const url = new URL('https://api.exchangerate.host/convert')
		url.searchParams.set('from', from)
		url.searchParams.set('to', to)
		url.searchParams.set('amount', amount)
		return fetch(url)
	}

	const onGetRates = async (e) => {
		e.preventDefault()
		const result = await getRates()
		const response = await result.json()
		setRate(response)
	}

	const onChange = (e) => {
		e.preventDefault()
		setValue(e.target.value)
	}

	return (
		<div className={classnames(styles.root)}>
			<div className={classnames(styles.title)}>Enter currencies:</div>
			<form className={classnames(styles.form)}>
				<input type='text' onChange={onChange} placeholder='1 btc in usd...' className={classnames(styles.input)}></input>
				<button onClick={onGetRates} className={classnames(styles.button)}>Get rates</button>
			</form>
			<ExchangeRate rate={rate}></ExchangeRate>
		</div>
	)
}