import ExploreNavBar from '../../ExploreNavBar/ExploreNavBar'
import style from './ExploreLayout.module.css'
import classNames from 'classnames/bind'

const clx = classNames.bind(style)
export default function ExploreLayout({ children, hasSearchBox }) {

    return (
        <div className={clx('container')}>
            <ExploreNavBar className={clx('nav-bar')} isAuthenticated={false} hasSearchBox={hasSearchBox}/>
            <div className={clx('content')}>{children}</div>
        </div>
    )
}
