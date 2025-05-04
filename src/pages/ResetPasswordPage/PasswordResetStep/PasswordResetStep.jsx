import RoundedTextBox from '../../../components/RoundedTextBox/RoundedTextBox'
import style from './PasswordResetStep.module.css'
import classNames from 'classnames/bind'
import PasswordReqList from '../../../components/PasswordReqList/PasswordReqList'
import { useState } from 'react'

const clx = classNames.bind(style)
function PasswordResetStep({ setStep, setBars }){
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    return (
        <div className={clx('reset-container')}>
            <h1>Create new password</h1>
            <div className={clx("input-area")}>
                <label className={clx('textbox-label')}>New password</label>
                <RoundedTextBox type='password' hint='Password' onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className={clx("input-area")}>
                <label className={clx('textbox-label')}>Confirm password</label>
                <RoundedTextBox type='password' hint='Confirm password' onChange={(e) => setConfirm(e.target.value)}/>
            </div>
            <PasswordReqList password={password} confirm={confirm}/>
            <div className={clx('btn-area')}>
                <div className={clx('btn', 'cancel')}>Cancel</div>
                <div className={clx('btn', 'reset')}>Set new password</div>
            </div>
        </div>
    )
}

export default PasswordResetStep