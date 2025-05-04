import classNames from 'classnames/bind'
import style from './ResultPage.module.css'
import Book from '../../components/Book/Book'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const clx = classNames.bind(style)
export default function ResultPage() {
    return (
        <div className={clx('wrapper')}>
            <h1 className={clx('result-label')}>Result for: Harry Potter</h1>
            <div className={clx('book-list')}>
                <Book price='FREE' name='Harry Potter and the Half-Blood Prince' />
                <Book price='FREE' name='Harry Potter and the Half-Blood Prince' />
                <Book price='FREE' name='Harry Potter and the Half-Blood Prince' />
                <Book price='FREE' name='Harry Potter and the Half-Blood Prince' />
                <Book price='FREE' name='Harry Potter and the Half-Blood Prince' />
                <Book price='FREE' name='Harry Potter and the Half-Blood Prince' />
                <Book price='FREE' name='Harry Potter and the Half-Blood Prince' />
                <Book price='FREE' name='Harry Potter and the Half-Blood Prince' />
                <Book price='$20' name='Harry Potter and the Half-Blood Prince' />
                <Book price='$10' name='Harry Potter and the Half-Blood Prince' />
                <Book price='$10' name='Harry Potter and the Half-Blood Prince' />
                <Book price='$10' name='Harry Potter and the Half-Blood Prince' />
                <Book price='$10' name='Harry Potter and the Half-Blood Prince' />
                <Book price='$10' name='Harry Potter and the Half-Blood Prince' />
                <Book price='$10' name='Harry Potter and the Half-Blood Prince' />
                <Book price='$10' name='Harry Potter and the Half-Blood Prince' />
                <Book price='$10' name='Harry Potter and the Half-Blood Prince' />
                <Book price='$10' name='Harry Potter and the Half-Blood Prince' />
                <Book price='FREE' name='Harry Potter and the Half-Blood Prince' />
                <Book price='FREE' name='Harry Potter and the Half-Blood Prince' />
            </div>
            <div className={clx('pagination')}>
                <div className={clx('control-btn')}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                <ul className={clx('page-links')}>
                    <li className={clx('link-item')}>
                        <Link className={clx('link')}>1</Link>
                    </li>
                    <li className={clx('link-item')}>
                        <Link className={clx('link')}>2</Link>
                    </li>
                    <li className={clx('link-item')}>
                        <Link className={clx('link')}>3</Link>
                    </li>
                    <li className={clx('link-item')}>
                        <Link className={clx('link')}>4</Link>
                    </li>
                    <li className={clx('link-item')}>
                        <Link className={clx('link')}>...</Link>
                    </li>
                </ul>
                <div className={clx('control-btn')}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
        </div>
    )
}