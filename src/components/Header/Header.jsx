import classnames from "classnames"
import { Link } from "react-router-dom"
import styles from './index.module.css'

export const Header = () => {
	return (
		<div className={classnames(styles.root)}>
			<Link to={'/'} className={classnames(styles.link)}><div>Convert</div></Link>
			<Link to={'/rates'} className={classnames(styles.link)}><div>Rates</div></Link>
		</div>
	)
}