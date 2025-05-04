import classNames from 'classnames/bind'
import style from './ExploreNavBar.module.css'
import UserPopup from '../UserPopup/UserPopup'
import { useState, useEffect, useRef } from 'react'
import logo from '../../assets/fox.png'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faChevronDown, faLayerGroup, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons'

const clx = classNames.bind(style)
export default function ExploreNavBar({ isAuthenticated, userInfo, hasSearchBox }) {
    const [popupState, setPopupState] = useState(false)
    const [scrolled, setScrolled] = useState(false);
    const [search, setSearch] = useState('')
    const [clearable, setClearable] = useState(false)
    const [selection, setSelection] = useState('All')
    const [categoryPopupState, setCategoryPopupState] = useState(false)

    const filterRef = useRef(null)
    const userPopupRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (filterRef.current && !filterRef.current.contains(e.target)) {
                setCategoryPopupState(false)
            }
        }

        if (categoryPopupState) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [categoryPopupState])

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

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setClearable(search.length > 0)
    }, [search])

    const handlePopupClick = () => {
        setPopupState(prev => !prev)
    }

    const handleCategoryPopupClick = () => {
        setCategoryPopupState(prev => !prev)
    }

    const handleSelection = (value) => {
        setCategoryPopupState(false)
        setSelection(value)
    }

    return (
        <div className={clx({ 'nav-bar': true, 'black-bg': scrolled })}>
            <div className={clx('logo-area')}>
                <img src={logo} className={clx('web-logo')} />
                <label className={clx('logo-label')}>Foxbase</label>
            </div>
           {hasSearchBox && <div className={clx('search-area')}>
               <div className={clx('search-box')}>
                    <input type='text' placeholder='What are you looking for ?' onChange={(e) => setSearch(e.target.value)} value={search} />
                    <span className={clx('clear-btn', { visible: clearable })} onClick={() => setSearch('')}>
                        <FontAwesomeIcon icon={faXmark} />
                    </span>
                    <span className={clx('search-btn')}>
                        <FontAwesomeIcon className={clx('search-icon')} icon={faSearch} />
                    </span>
                </div>
                <div className={clx('filter')} ref={filterRef}>
                    <label>{selection}</label>
                    <FontAwesomeIcon icon={faLayerGroup} />
                    <span className={clx('filter-expand-btn')} onClick={handleCategoryPopupClick} >
                        <FontAwesomeIcon className={clx('spin-icon', { up: categoryPopupState })} icon={faChevronDown} />
                    </span>
                    <div className={clx('option-popup', { open: categoryPopupState })}>
                        <span className={clx('option')} onClick={() => handleSelection('All')}>All</span>
                        <span className={clx('option')} onClick={() => handleSelection('Genre')}>Genre</span>
                        <span className={clx('option')} onClick={() => handleSelection('Price')}>Price</span>
                        <span className={clx('option')} onClick={() => handleSelection('Author')}>Author</span>
                    </div>
                </div>
           </div>}
            <div className={clx('nav-area')}>
                <ul className={clx('nav-list')}>
                    <li className={clx('item')}><Link to='/' className={clx('link')}>Home</Link></li>
                    <li className={clx('item')}><Link to='/' className={clx('link')}>Explore</Link></li>
                    <li className={clx('item')}><Link to='/dashboard' className={clx('link')}>Dashboard</Link></li>
                </ul>
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
                        <UserPopup userInfo={userInfo} state={popupState} />
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