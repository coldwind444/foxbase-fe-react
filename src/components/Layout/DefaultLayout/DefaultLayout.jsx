import NavBar from "../../NavBar/NavBar"
import style from './DefaultLayout.module.css'
import classNames from 'classnames/bind'
import { useRef } from "react"

const clx = classNames.bind(style)

function DefaultLayout({ children }) {

    return (
        <div className={clx('container', 'bg-image')}>
            <NavBar className={clx('nav-bar')} isAuthenticated={true} />
            <div>{children}</div>
        </div>
    )
}

export default DefaultLayout
