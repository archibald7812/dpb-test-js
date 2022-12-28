import classnames from "classnames"
import { Outlet } from "react-router-dom"
import { Bottom } from "../Bottom/Bottom"
import { Header } from "../Header/Header"
import styles from './index.module.css'

export const Layout = () => {
	return (
		<div className={classnames(styles.root)}>
			<Header />
			<Outlet className={classnames(styles.content)} />
			<Bottom />
		</div>
	)
}