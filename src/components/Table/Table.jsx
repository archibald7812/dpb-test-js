import { useSelector } from "react-redux"
import styles from './index.module.css'
import classnames from "classnames"

export const Table = () => {

	const base = useSelector(state => state.rates.base)
	const rates = useSelector(state => state.rates.rates)

	const header = [
		{
			title: "Currency"
		},
		{
			title: "Rate"
		},
	]

	return (
		<section className={classnames(styles.root)}>
			<table className={classnames(styles.table)}>
				<thead className={classnames(styles.tableHead)}>
					<tr className={classnames(styles.titleRow)}>
						{header.map((item, index) => {
							return <th key={index} className={classnames(styles.titleColumn)}>{item.title}</th>
						})}
					</tr>
				</thead>
				<tbody>
					{rates.map((rate, index) => {
						if (rate[0] === base) return null
						let fixedRate = 0
						if ((1 / rate[1]) % 1 !== 0) fixedRate = (1 / rate[1]).toFixed(5)
						else fixedRate = (1 / rate[1])
						return <tr key={index}>
							<td className={classnames(styles.bodyColumn)}>1 {rate[0]}</td>
							<td className={classnames(styles.bodyColumn)}>{fixedRate} {base}</td>
						</tr>
					})}
				</tbody>
			</table>
		</section>
	)
}