import style from './SigninPage.module.css'
import logo from '../../assets/fox.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCheck, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import classNames from 'classnames/bind'
import FloatingHintTextBox from '../../components/FloatingHintTextBox/FloatingHintTextBox.'
import { useEffect, useState } from 'react'
import PasswordReqList from '../../components/PasswordReqList/PasswordReqList'

const clx = classNames.bind(style)

function SigninPage() {
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [username, setUsername] = useState('')

    return (
        <form className={clx('signin-container')}>
            <img className={clx('logo')} src={logo} />
            <label className={clx('title')}>SIGN UP</label>
            <FloatingHintTextBox hint='Username'/>
            <FloatingHintTextBox hint='Email'/>
            <FloatingHintTextBox hint='Password' type='password' onChange={(e) => setPassword(e.target.value)}/>
            <FloatingHintTextBox hint='Confirm password' type='password' onChange={(e) => setConfirm(e.target.value)}/>
            <PasswordReqList password={password} confirm={confirm}/>
            <button type='submit' className={clx('signup-btn')}>
                Join the Foxes
            </button>
            <Link className={clx('login-link')} to='/auth/login'>
                <FontAwesomeIcon className={clx('login-link-icon')} icon={faArrowLeft} />
                <label>Are you a Fox ? Log in now !</label>
            </Link>
        </form>
    )
}

export default SigninPage
