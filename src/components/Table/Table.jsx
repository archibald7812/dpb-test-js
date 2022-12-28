import { useSelector } from "react-redux"
import styles from './index.module.css'
import classnames from "classnames"

export const Table = () => {

	const header = [
		{
			title: "Side"
		},
		{
			title: "Price"
		},
		{
			title: "Instrument"
		},
		{
			title: "Volume"
		},
		{
			title: "Timestamp"
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
				</tbody>
			</table>
		</section>
	)
}