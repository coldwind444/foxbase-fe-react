import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Comment from '../../components/Comment/Comment'
import EmojiPicker from 'emoji-picker-react'
import style from './BookDetailPage.module.css'
import classNames from 'classnames/bind'
import { faHeart as faHeartOutlined } from '@fortawesome/free-regular-svg-icons'
import { faFeather, faStar, faClipboardList, faDownload, faHeart as faHearSolid, faBookOpen, faShoppingCart, faArrowRight, faArrowLeft, faFaceSmile, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import zaloPayLogo from '../../assets/zaloPay.png'
import foxBudgetLogo from '../../assets/foxb.png'
import balance from '../../assets/wallet2.png'
import BasicRating from '../../components/BasicRating/BasicRating'

const clx = classNames.bind(style)
function BookDetailPage({ title, author, rate, ratings, abstract, price }) {
    const [marked, setMarked] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [slide, setSlide] = useState(1)
    const [paymentMethod, setPaymentMethod] = useState(1)
    const [emojiOpen, setEmojiOpen] = useState(false)
    const [comment, setComment] = useState('')

    const handleEmojiMenuClick = () => {
        setEmojiOpen(prev => !prev)
    }

    const handleClick = () => {
        setMarked(!marked);
        setClicked(true);
        setTimeout(() => setClicked(false), 300);
    };

    return (
        <div className={clx('detail-wrapper')}>
            <div className={clx('blur-container')}>
                <div className={clx('blur-area', { 'green-blur': price === 'FREE', 'pink-blur': price !== 'FREE' })}></div>
                <div className={clx('blur-area', 'white-blur')}></div>
            </div>
            <div className={clx('book-detail-container')}>
                <div className={clx('book-cover')}></div>
                <div className={clx('detail-container')}>
                    <h1 className={clx('book-title-lb')}>Harry Potter and the Half-Blood Prince</h1>
                    <div className={clx('info-container')}>
                        <div className={clx('sub-info-container')}>
                            <FontAwesomeIcon className={clx('feather-icon', 'blue-violet')} icon={faFeather} />
                            <h3 className={clx('book-author-lb', 'blue-violet')}>J.K Rowling</h3>
                        </div>
                        <div className={clx('sub-info-container')}>
                            <FontAwesomeIcon icon={faStar} className={clx('rate-icon', 'golden')} />
                            <h3 className={clx('golden')}>Rate: 5.0</h3>
                        </div>
                        <div className={clx('sub-info-container')}>
                            <FontAwesomeIcon className={clx('ratings-icon', 'orange')} icon={faClipboardList} />
                            <h3 className={clx('orange')}>150k ratings</h3>
                        </div>
                        <div className={clx({ 'add-to-fav-btn': true, 'clicked': clicked })}
                            onClick={handleClick}>
                            <FontAwesomeIcon className={clx({ 'heart-icon': true, 'red': marked })} icon={marked ? faHearSolid : faHeartOutlined} />
                            <label>Add to favourites</label>
                        </div>
                    </div>
                    <div className={clx('slider', { 'second': slide === 2 })}>
                        <div className={clx('detail-slide')}>
                            <div className={clx('abstract-container')}>
                                <label>Description</label>
                                <div className={clx('seperator')}></div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                            <div className={clx('btn-container')}>
                                <div className={clx({ 'expanded-btn': true, 'blue-theme': price === 'FREE', 'pink-theme': price !== 'FREE' })}
                                    onClick={() => setSlide(2)}>
                                    <FontAwesomeIcon className={clx('btn-icon')} icon={price === 'FREE' ? faDownload : faShoppingCart} />
                                    <label>{price === 'FREE' ? 'Download PDF' : 'Purchase now'}</label>
                                </div>
                                <div className={clx('expanded-btn', 'orange-theme')}>
                                    <FontAwesomeIcon className={clx('btn-icon')} icon={faBookOpen} />
                                    <label>Read on site</label>
                                </div>
                            </div>
                        </div>
                        <div className={clx('payment-slide')}>
                            <label className={clx('gray-text', 'bold')}>Choose a payment method</label>
                            <div className={clx('back-btn')} onClick={() => setSlide(1)}>
                                <FontAwesomeIcon icon={faArrowLeft} />
                                <label>Back</label>
                            </div>
                            <div className={clx('seperator')}></div>
                            <div className={clx('payment-methods')}>
                                <div className={clx('expanded-selection-box', { 'selected': paymentMethod === 1 })}>
                                    <div className={clx('selection-area')}>
                                        <input id='opt1' type='radio' name='option' checked={paymentMethod === 1} onChange={() => setPaymentMethod(1)} />
                                        <label>ZaloPay</label>
                                        <img className={clx('method-logo')} src={zaloPayLogo} />
                                    </div>
                                    <div className={clx('payment-info')}>
                                        <div className={clx('box-seperator')}></div>
                                        <div className={clx('qr-code')}></div>
                                    </div>
                                </div>
                                <div className={clx('expanded-selection-box', { 'selected': paymentMethod === 2 })}>
                                    <div className={clx('selection-area')}>
                                        <input id='opt2' type='radio' name='option' checked={paymentMethod === 2} onChange={() => setPaymentMethod(2)} />
                                        <label>Foxbase budget</label>
                                        <img className={clx('method-logo')} src={foxBudgetLogo} />
                                    </div>
                                    <div className={clx('payment-info')}>
                                        <div className={clx('box-seperator')}></div>
                                        <div className={clx('balance-container')}>
                                            <div className={clx('current-balance')}>
                                                <img className={clx('wallet-icon')} src={balance} />
                                                <label className={clx('white-text')}>Wallet balance:</label>
                                                <label className={clx('green-text', 'bold')}>$100</label>
                                                <label className={clx('right', 'red-text', 'bold')}>-$29.5</label>
                                            </div>
                                            <div className={clx('new-balance-container')}>
                                                <FontAwesomeIcon className={clx('arrow-icon')} icon={faArrowRight} />
                                                <label className={clx('white-text')}>New balance:</label>
                                                <label className={clx('green-text', 'bold')}>$71.5</label>
                                            </div>
                                            <div className={clx('btn-area')}>
                                                <div className={clx('rounded-btn', 'orange-btn')}>
                                                    Purchase
                                                </div>
                                                <div className={clx('rounded-btn', 'green-btn')}>
                                                    Confirm
                                                </div>
                                            </div>
                                        </div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={clx('comment-area')}>
                <div className={clx('user-comment')}>
                    <div className={clx('rate-container')}>
                        <label className={clx('rate-label')}>Rate this book:</label>
                        <BasicRating />
                    </div>
                    <div className={clx('comment-box')}>
                        <div className={clx('first-section')}>
                            <div className={clx('cmt-avatar')}></div>
                            <div className={clx('emoji')} onClick={handleEmojiMenuClick}>
                                <FontAwesomeIcon icon={faFaceSmile} />
                            </div>
                        </div>
                        <div className={clx('input-section')}>
                            <textarea placeholder='Leave your comment here...' rows='5' cols='95'
                                        value={comment} 
                                        onChange={(e) => setComment(e.target.value)}/>
                        </div>
                        <div className={clx('btn-section')}>
                            <div className={clx('submit-btn')}>Submit</div>
                        </div>
                    </div>
                    <div className={clx('emoji-container')}>
                        <EmojiPicker emojiStyle='facebook'
                                     theme='dark' 
                                     lazyLoadEmojis
                                     open={emojiOpen}
                                     onEmojiClick={(obj) => setComment(prev => prev + obj.emoji)}/>
                    </div>
                </div>
                <div className={clx('cmt-seperator')}></div>
                <h3>Ratings</h3>
                <div className={clx('comments')}>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <div className={clx('see-more')}>
                        <label>See more</label>
                        <FontAwesomeIcon icon={faChevronDown}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetailPage