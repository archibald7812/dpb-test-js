import classnames from "classnames"
import { useEffect, useState } from "react"
import styles from './index.module.css'

export const ExchangeRate = ({ rate, className }) => {

	const [currRate, setCurrRate] = useState(0)

	useEffect(() => {
		setCurrRate(rate.result)
	}, [rate])

	if (!rate) return null

	return (
		<div className={classnames(styles.root, className)}>
			{rate.result === null || !rate.success ?
				<div className={classnames(styles.price)}>Неверно введены валюты</div> :
				<div className={classnames(styles.price)}>{rate.query.amount} {rate.query.from} = {currRate} {rate.query.to}</div>}
		</div>
	)
}