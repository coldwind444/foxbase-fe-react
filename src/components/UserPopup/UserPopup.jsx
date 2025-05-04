import classNames from 'classnames/bind'
import style from './UserPopup.module.css'
import React, { forwardRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faPen, faKey, faMoneyCheckDollar, faRightFromBracket, faArrowLeft  } from '@fortawesome/free-solid-svg-icons'
import book from '../../assets/book.png'
import wallet from '../../assets/wallet.png'


const clx = classNames.bind(style)
const UserPopup = forwardRef(function UserPopup({ state, userInfo }, ref) {
    const [next, setNext] = useState(false)

    return (
        <div ref={ref} className={clx('popup', { 'show': state, 'hidden': !state })}>
            <div className={clx('header')}>
                <div className={clx('header-avatar')}>
                    <div className={clx('avatar-edit')}>
                        <FontAwesomeIcon className={clx('pen-icon')} icon={faPen} />
                    </div>
                </div>
                <label className={clx('username-label')}>tannguyen</label>
            </div>
            <div className={clx('popup-content')}>
                <div className={clx('info-area')}>
                    <div className={clx('stats-item')}>
                        <img className={clx('item-icon')} src={wallet} />
                        <label className={clx('green-text', 'item-text')}>$100</label>
                    </div>
                    <div className={clx('stats-item')}>
                        <img className={clx('item-icon')} src={book} />
                        <label className={clx('blue-text', 'item-text')}>20</label>
                    </div>
                </div>
                <div className={clx('action-area')}>
                    <div className={clx('action-title')}>
                        <label className={clx('action-label')}>Actions</label>
                        <div className={clx('line')} />
                    </div>
                    <div className={clx('slider', { 'next': next })}>
                        <div className={clx('actions')}>
                            <Link className={clx('action')} to='/auth/reset-password'>
                                <FontAwesomeIcon className={clx('key-icon')} icon={faKey} />
                                <label className={clx('action-name')}>Reset password</label>
                            </Link>
                            <div className={clx('action')} onClick={() => setNext(true)}>
                                <FontAwesomeIcon className={clx('money-icon')} icon={faMoneyCheckDollar} />
                                <label className={clx('action-name')}>Purchase</label>
                            </div>
                            <div className={clx('action')}>
                                <FontAwesomeIcon className={clx('out-icon')} icon={faRightFromBracket} />
                                <label className={clx('action-name')}>Log out</label>
                            </div>
                        </div>
                        <div className={clx('purchase')}>
                            <label className={clx('black-text', 'bold', 'left-space', 'small-text')}>Purchase to Foxbase Budget</label>
                            <div className={clx('textbox')}>
                                <input type="text" placeholder='Enter amount...' />
                                <FontAwesomeIcon className={clx('check-icon')} icon={faCheckCircle} />
                            </div>
                            <div className={clx('btn-container')}>
                                <div className={clx('back-btn')} onClick={() => setNext(false)}>
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                    <label className={clx('bold')}>Back</label>
                                </div>
                                <div className={clx('confirm-btn')}>
                                    Confirm
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default UserPopup