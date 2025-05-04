import style from './LoginPage.module.css'
import logo from '../../assets/fox.png'
import google from '../../assets/google.png'
import facebook from '../../assets/facebook.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import FloatingHintTextBox from '../../components/FloatingHintTextBox/FloatingHintTextBox.'

const clx = classNames.bind(style)

function LoginPage() {
    return (
        <form className={clx('login-container')}>
            <img className={clx('logo')} src={logo} />
            <label className={clx('title')}>LOGIN</label>
            <FloatingHintTextBox hint='Username' />
            <FloatingHintTextBox hint='Password' type='password'/>
            <Link to='/auth/reset-password' className={clx('reset-pw-link')}>Forgot password ?</Link>
            <button type='submit' className={clx('login-btn')}>
                Join the Base
            </button>
            <div className={clx('seperator')}>
                <div></div>
                <label>OR</label>
            </div>
            <div className={clx('third-party-auth-button')}>
                <img src={google} />
                <label>Log in with Google</label>
            </div>
            <div className={clx('third-party-auth-button')}>
                <img src={facebook} />
                <label>Log in with Facebook</label>
            </div>
            <Link className={clx('create-account-link')} to='/auth/signin'>
                <img src={logo} />
                <label>Become a Fox</label>
                <FontAwesomeIcon className={clx('arrow-right-icon')} icon={faArrowRight} />
            </Link>
        </form>
    )
}

export default LoginPage
