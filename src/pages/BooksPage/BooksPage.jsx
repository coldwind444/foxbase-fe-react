import classNames from 'classnames/bind'
import style from './BooksPage.module.css'
import Book from '../../components/Book/Book'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

const clx = classNames.bind(style)
function BooksPage(){
    return (
        <div className={clx('wrapper')}>
            <div className={clx('book-list', 'top-space')}>
                <label className={clx('header-title')}>FREE BOOKS</label>
                <div className={clx('list')}>
                    <Book price='FREE' name='Harry Potter and the Half-Blood Prince'/>
                    <Book price='FREE' name='Harry Potter and the Half-Blood Prince'/>
                    <Book price='FREE' name='Harry Potter and the Half-Blood Prince'/>
                    <Book price='FREE' name='Harry Potter and the Half-Blood Prince'/>
                    <Book price='FREE' name='Harry Potter and the Half-Blood Prince'/>
                    <Book price='FREE' name='Harry Potter and the Half-Blood Prince'/>
                    <div className={clx('see-more-btn')}>
                        <label>See more</label>
                        <FontAwesomeIcon icon={faCaretRight}/>
                    </div>
                </div>
            </div>
            <div className={clx('book-list')}>
                <label className={clx('header-title')}>COST BOOKS</label>
                <div className={clx('list')}>
                    <Book price='$20' name='Harry Potter and the Half-Blood Prince'/>
                    <Book price='$20' name='Harry Potter and the Half-Blood Prince'/>
                    <Book price='$20' name='Harry Potter and the Half-Blood Prince'/>
                    <Book price='$20' name='Harry Potter and the Half-Blood Prince'/>
                    <Book price='$20' name='Harry Potter and the Half-Blood Prince'/>
                    <Book price='$20' name='Harry Potter and the Half-Blood Prince'/>
                    <div className={clx('see-more-btn')}>
                        <label>See more</label>
                        <FontAwesomeIcon icon={faCaretRight}/>
                    </div>
                </div>
            </div>
            <div className={clx('book-list')}>
                <label className={clx('header-title')}>COMMUNITY WRITERS</label>
                <div className={clx('list')}>
                    <Book price='FREE' name='Harry Potter and the Half-Blood Prince'/>
                    <Book price='FREE' name='Harry Potter and the Half-Blood Prince'/>
                    <Book price='FREE' name='Harry Potter and the Half-Blood Prince'/>
                    <Book price='FREE' name='Harry Potter and the Half-Blood Prince'/>
                    <Book price='FREE' name='Harry Potter and the Half-Blood Prince'/>
                    <Book price='FREE' name='Harry Potter and the Half-Blood Prince'/>
                    <div className={clx('see-more-btn')}>
                        <label>See more</label>
                        <FontAwesomeIcon icon={faCaretRight}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BooksPage