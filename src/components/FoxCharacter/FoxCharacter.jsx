import classNames from 'classnames/bind'
import style from './FoxCharacter.module.css'
import fox from '../../assets/fox_login.png'

const clx = classNames.bind(style)
function FoxCharacter({ context }) {
    return (
        <div className={clx('fox')}>
            <div className={clx('message')}>
                Show me your identity and I'll let you go into our base !
            </div>
            <img src={fox} className={clx('fox-character')} />
            <div className={clx('shadow')} />
        </div>
    )
}

export default FoxCharacter