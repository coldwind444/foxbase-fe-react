import './NavBar.module.css'
import logo from '../../assets/fox.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCaretDown, } from '@fortawesome/free-solid-svg-icons'
import { Fragment, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from './NavBar.module.css'
import classNames from 'classnames/bind'
import UserPopup from '../UserPopup/UserPopup'

const clx = classNames.bind(style)

function NavBar({ isAuthenticated, userInfo}) {
    const [popupState, setPopupState] = useState(false)
    const [scrolled, setScrolled] = useState(false);

    const userPopupRef = useRef(null)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (userPopupRef.current && !userPopupRef.current.contains(e.target)) {
                setPopupState(false)
            }
        }

        if (popupState) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [popupState])


    const handlePopupClick = () => {
        setPopupState(prev => !prev)
    }

    return (
        <div className={clx({ 'nav-bar': true, 'black-bg': scrolled })}>
            <div className={clx('logo-area')}>
                <img src={logo} className={clx('web-logo')} />
                <label className={clx('logo-label')}>Foxbase</label>
            </div>
            <div className={clx('nav-area')}>
                <ul className={clx('nav-list')}>
                    <li className={clx('item')}><Link to='/' className={clx('link')}>Home</Link></li>
                    <li className={clx('item')}><Link to='/explore' className={clx('link')}>Explore</Link></li>
                    <li className={clx('item')}><Link to='/dashboard' className={clx('link')}>Dashboard</Link></li>
                </ul>
            </div>
            <div className={clx('search-box')}>
                <input type='text' placeholder='Search...' />
                <span className={clx('search-btn')}>
                    <FontAwesomeIcon className={clx('search-icon')} icon={faSearch} />
                </span>
            </div>
            <div className={clx('auth-area')} ref={userPopupRef}>
                {isAuthenticated ? (
                    <Fragment>
                        <div className={clx('avatar')} />
                        <div className={clx('expand-btn')} onClick={handlePopupClick}>
                            <FontAwesomeIcon
                                className={clx('spin-icon', { up: popupState })}
                                icon={faCaretDown}
                            />
                        </div>
                        <UserPopup userInfo={userInfo} state={popupState}/>
                    </Fragment>
                ) : (
                    <Fragment>
                        <Link className={clx('home-login-btn')} to='/auth/login'>Log in</Link>
                        <Link className={clx('home-signin-btn')} to="/auth/signin">Sign in</Link>
                    </Fragment>
                )}
            </div>
        </div>
    )
}

export default NavBar
