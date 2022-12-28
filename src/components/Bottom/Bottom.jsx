import classnames from "classnames"
import styles from './index.module.css'

export const Bottom = () => {
	return (
		<div className={classnames(styles.root)}>
			<h4 className={classnames(styles.title)}>
				Vladislav Rozov
			</h4>
		</div>
	)
}