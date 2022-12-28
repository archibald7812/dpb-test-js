import { Table } from "../../components/Table/Table"
import classnames from "classnames"
import styles from './index.module.css'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchCurrenciesList } from "../../store/currencies/actions"
import { selectCurrenciesList } from "../../store/currencies/selectors"
import { fetchRates } from "../../store/rates/ratesSlice"

export const RatesPage = () => {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchCurrenciesList())
	}, [dispatch])

	const currenciesList = useSelector(state => selectCurrenciesList(state))

	const [currency, setCurrency] = useState('AED')

	useEffect(() => {
		dispatch(fetchRates(currency))
	}, [currency])

	const onChange = (e) => {
		e.preventDefault()
		const currentCurrency = currenciesList.find((currency) => currency.code === e.target.value)
		setCurrency(currentCurrency.code)
	}

	return (
		<div className={classnames(styles.root)}>
			<div className={classnames(styles.header)}>
				<h3 className={classnames(styles.title)}>Select currency</h3>
				<select className={classnames(styles.select)} onChange={onChange}>
					{currenciesList.map((currency, index) => {
						return <option key={index} className={classnames(styles.option)}>{currency.code}</option>
					})}
				</select>
			</div>
			<Table />
		</div>
	)
}