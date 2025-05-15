import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './WorkPage.module.css'
import classNames from 'classnames/bind'
import { faArrowLeft, faBookOpen, faBoxOpen, faDownload, faEraser, faImage, faLessThan, faPaperclip, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import RateStars from '../../components/RateStars/RateStars'
import { Fragment, useEffect, useRef, useState } from 'react'
import { useAuth } from '../../provider/AuthContext'
import { useLocation } from 'react-router-dom'
import { useBook } from '../../provider/BookContext'

const clx = classNames.bind(style)
export default function WorkPage({ type }) {
    const { loading, userInfo } = useAuth()

    const {
        favorites,
        setFavorites,
        works,
        isEmptyF,
        setIsEmptyF,
        isEmptyW,
        setIsEmptyW,
        fLoading,
        wLoading,
        removeItem
    } = useBook()

    const fileInputRef = useRef()
    const [imgFile, setImgFile] = useState(null)
    const [previewUrl, setPreviewUrl] = useState(null)
    const [fileName, setFileName] = useState('No file chosen')

    const [tab, setTab] = useState(1)
    const [title, setTitle] = useState('')
    const [titleCount, setTitleCount] = useState(0)
    const [descriptionCount, setDescriptionCount] = useState(0)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [genre, setGenre] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const imageInputRef = useRef(null)

    const handleFileChoose = () => {
        fileInputRef.current.click()
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFileName(file ? file.name : "No file chosen");
    }

    const handleImageChoose = () => {
        imageInputRef.current.click()
    }

    const handleImgFileChange = (e) => {
        const file = e.target.files[0];
        setImgFile(file ? file.name : null)

        const objectUrl = URL.createObjectURL(file);
        setPreviewUrl(objectUrl);
    }

    const clearImg = () => {
        setImgFile(null)
        setPreviewUrl(null)
    }

    useEffect(() => {
        setTitleCount(title.length)
    }, [title])

    useEffect(() => {
        setDescriptionCount(description.length)
    }, [description])

    useEffect(() => {
        if (type === 1 && !fLoading) setIsEmptyF(favorites.length === 0)
        if (type === 2 && !wLoading) setIsEmptyW(works.length === 0)
    }, [type])

    if (loading || userInfo === null) return (<div></div>)

    return (
        <div className={clx('wrapper')}>
            <div className={clx('title')}>
                {tab === 2 && type === 2 && <div className={clx('back-btn')} onClick={() => setTab(1)}>
                    <FontAwesomeIcon className={clx('back-icon')} icon={faArrowLeft} />
                </div>}
                <label>{type === 1 ? 'MY COLLECTION' : (tab === 1 ? 'MY WORK' : 'NEW WORK')}</label>
                {type === 2 && tab === 1 && <div className={clx('add-btn')} onClick={() => setTab(2)}>
                    <FontAwesomeIcon className={clx('plus-icon')} icon={faPlus} />
                </div>}
            </div>
            <div className={clx('slider', { 'next': tab === 2 && type === 2 })}>
                <div className={clx('book-list')}>
                    <div className={clx('header-container')}>
                        <div className={clx('table-head')}>
                            <label className={clx('column-label', 'id-space')}>Publish ID</label>
                            <label className={clx('column-label', 'title-space')}>Title</label>
                            <label className={clx('column-label', 'normal-space')}>Genre</label>
                            <label className={clx('column-label', 'normal-space')}>Price</label>
                            <label className={clx('column-label', 'normal-space')}>Rate</label>
                        </div>
                        <div className={clx('seperator')}></div>
                    </div>
                    {!(type === 1 ? isEmptyF : isEmptyW) ?
                        (<div className={clx('list')}>
                            {!(type === 1 ? fLoading : wLoading) && (type === 1 ? favorites : works).map((book, index) => (
                                <Fragment key={index}>
                                    <div className={clx('book-record', { 'expanded': book.isExpanded })} onClick={() => {
                                        setFavorites(prevfavorites =>
                                            prevfavorites.map((b, i) =>
                                                i === index ? { ...b, isExpanded: !b.isExpanded } : b
                                            )
                                        );
                                    }}>
                                        <div className={clx('record-info')}>
                                            <label className={clx('record-label', 'record-id-space')}>{book.bookId}</label>
                                            <label className={clx('record-label', 'record-title-space', 'orange')}>{book.title}</label>
                                            <label className={clx('record-label', 'record-genre-space', 'yellow')}>{book.genre}</label>
                                            <label className={clx('record-label', 'record-normal-space', { 'cross': book.price > 0, 'pink': book.price > 0, 'green': book.price === 0 })}>
                                                {book.price > 0 ? book.price.toLocaleString() + 'đ' : 'FREE'}
                                            </label>
                                            <div className={clx('rate-container', 'record-normal-space')}>
                                                <label className={'record-label'}>{book.averageRating === null ? '0.0' : book.averageRating.toFixed(1)}</label>
                                                <RateStars rate={book.averageRating} />
                                            </div>
                                        </div>
                                        <div className={clx('book-info')}>
                                            <img src={book.imageUrl} className={clx('book-cover')} />
                                            <div className={clx('description-container')}>
                                                <label className={clx('d-title')}>DESCRIPTION</label>
                                                <p className={clx('d-content')}>{book.description}</p>
                                                <div className={clx('actions')}>
                                                    <a className={clx('action')} href={book.contentUrl}>
                                                        <FontAwesomeIcon className={clx('blue', 'scale-icon')} icon={faDownload} />
                                                        <label className={clx('blue')}>Download</label>
                                                    </a>
                                                    <div className={clx('action')}>
                                                        <FontAwesomeIcon className={clx('orange-yellow', 'scale-icon')} icon={faBookOpen} />
                                                        <label className={clx('orange-yellow')}>Read</label>
                                                    </div>
                                                    <div className={clx('action')} onClick={() => removeItem(index, book.bookId)}>
                                                        <FontAwesomeIcon className={clx('red', 'scale-icon')} icon={faEraser} />
                                                        <label className={clx('red')}>Remove</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={clx('record-seperator')}></div>
                                </Fragment>
                            ))}
                        </div>)
                        :
                        (
                            <div className={clx('unfound')}>
                                <FontAwesomeIcon icon={faBoxOpen} />
                                <label>No books found.</label>
                            </div>
                        )
                    }
                </div>
                <div className={clx('publish-page')}>
                    <div className={clx('add-book-cover')} onClick={handleImageChoose}>
                        {imgFile ?
                            (
                                <Fragment>
                                    <img src={previewUrl} />
                                    <div className={clx('clear-btn')} onClick={clearImg}>
                                        <FontAwesomeIcon icon={faXmark} />
                                    </div>
                                </Fragment>
                            ) :
                            (
                                <Fragment>
                                    <FontAwesomeIcon icon={faImage} />
                                    <label>Add a book cover</label>
                                    <input ref={imageInputRef} accept='image/*' onChange={handleImgFileChange} className={clx('hidden')} type="file" />
                                </Fragment>)
                        }
                    </div>
                    <div className={clx('book-form')}>
                        <label className={clx('form-title')}>Book information</label>
                        <div className={clx('form-seperator')} />
                        <form>
                            <div className={clx('input-area')}>
                                <label className={clx('input-title')}>Title:</label>
                                <div className={clx('input-box', 'long')}>
                                    <input id='title-box_asdiw' type='text' placeholder='Give your book a fantastic title !' required
                                        onChange={(e) => setTitle(e.target.value)} />
                                    <label className={clx('textbox-counter', { 'red': titleCount > 80 })} htmlFor="title-box_asdiw">{`${titleCount}/80`}</label>
                                </div>
                            </div>
                            <div className={clx('input-area')}>
                                <label className={clx('input-title')}>File (PDF):</label>
                                <div className={clx('file-input-box', 'long')}>
                                    <div className={clx('open-dialog-btn')} onClick={handleFileChoose}>
                                        <FontAwesomeIcon icon={faPaperclip} />
                                    </div>
                                    <input id='file-box_asd2' type='file' ref={fileInputRef} required hidden
                                        onChange={(e) => handleFileChange(e)} />
                                    <label htmlFor='file-box_asd2'>{fileName}</label>
                                </div>
                            </div>
                            <div className={clx('input-area')}>
                                <label className={clx('input-title')}>Author:</label>
                                <div className={clx('name-input-area')}>
                                    <div className={clx('input-box', 'medium')}>
                                        <input type='text' placeholder='First name' required />
                                    </div>
                                    <div className={clx('input-box', 'medium')}>
                                        <input type='text' placeholder='Last name' required />
                                    </div>
                                </div>
                            </div>
                            <div className={clx('combo-input-area')}>
                                <div className={clx('input-area')}>
                                    <label className={clx('input-title')}>Genre:</label>
                                    <div className={clx('input-box', 'short')}>
                                        <input type='text' placeholder='What is the genre of your book ?' required />
                                    </div>
                                </div>
                                <div className={clx('input-area')}>
                                    <label className={clx('input-title')}>Price:</label>
                                    <div className={clx('input-box', 'very-short')}>
                                        <input type='text' placeholder='Sell it ?' required />
                                    </div>
                                </div>
                                <div className={clx('radio-area')}>
                                    <div className={clx('option')}>
                                        <input type="radio" name='opt' id='free' />
                                        <label htmlFor="free">Free</label>
                                    </div>
                                    <div className={clx('option')}>
                                        <input type="radio" name='opt' id='cost' />
                                        <label htmlFor="cost">Cost</label>
                                    </div>
                                </div>
                            </div>
                            <div className={clx('input-area')}>
                                <label className={clx('input-title')}>Description:</label>
                                <div className={clx('multiline-box', 'long')}>
                                    <textarea required id='textarea_314asd' rows='4' cols='75' placeholder='Write a short description about your book...'
                                        onChange={(e) => setDescription(e.target.value)} />
                                    <label className={clx('textarea-counter', { 'red': titleCount > 300 })} htmlFor="textarea_314asd">{`${descriptionCount}/300`}</label>
                                </div>
                            </div>
                            <button className={clx('publish-btn')} type='submit'>
                                Publish
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}