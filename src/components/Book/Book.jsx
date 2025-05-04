import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './Book.module.css'
import classNames from 'classnames/bind'
import { faGift, faCartShopping, faBookOpen, faHeart as faHearSolid } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartOutlined } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'

const clx = classNames.bind(style)
function Book({name, price}){
    return (
        <div className={clx('wrapper')}>
            <div className={clx('cover')}>
                <div className={clx('stamp')}>
                    <div className={clx({'stamp-type' : true, 'free': price === 'FREE', 'cost' : price !== 'FREE'})}>{price}</div>
                    <div className={clx('stamp-icon-container')}>
                        <FontAwesomeIcon className={clx({'stamp-icon' : true, 'free-lb': price === 'FREE', 'cost-lb' : price !== 'FREE'})}
                                         icon={price === 'FREE' ? faGift : faCartShopping}/>
                    </div>
                </div>
                <div className={clx('overlay')}>
                    <div className={clx({'read-btn' : true, 'free-read': price === 'FREE', 'cost-read': price !== 'FREE'})}>
                        <FontAwesomeIcon className={clx('read-btn-icon')} icon={price === 'FREE' ? faBookOpen : faCartShopping}/>
                        <label>{price === 'FREE' ? 'Read' : 'Buy'}</label>
                    </div>
                </div>
            </div>
            <label className={clx('book-title')}>{name}</label>
        </div>
    )
}

export default Book