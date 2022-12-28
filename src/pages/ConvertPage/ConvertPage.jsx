import classnames from "classnames"
import styles from './index.module.css'
import { Currencies } from "../../components/Currencies/Currencies"

export const ConvertPage = () => {

	return (
		<div className={classnames(styles.root)}>
			<section className={classnames(styles.card)}>
				<Currencies />
			</section>
		</div>
	)
}