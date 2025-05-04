import style from './OTPStep.module.css'
import classNames from 'classnames/bind'
import OTPBox from '../../../components/OTPBox/OTPBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark, faRotateRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

const clx = classNames.bind(style)
function OTPStep({ setStep, setBars }){
    const [code, setCode] = useState('')
    const [verified, setVerified] = useState(false)

    const handleNext = () => {
        setVerified(true)
        setStep(3)
        setBars([true, true, true])
    }

    useEffect(() => {
        if (code.length == 6) handleNext()
    }, [code])

    return (
        <div className={clx('reset-password-container')}>
            <h1 className={clx('reset-title')}>OTP Verification</h1>
            <p className={clx('reset-message')}>
                We've sent a 6-digits security code to your email minht*******@gmai.com. 
                Please enter the code to reset your password.
            </p>
            <OTPBox className={clx('otp')} onChange={(value) => setCode(value)}/>
            <div className={clx('action-area')}>
                <div className={clx('resend-btn')}>
                    <FontAwesomeIcon icon={faRotateRight} className={clx('rotate-icon')}/>
                    <label>Re-send OTP</label>
                </div>
                <label className={clx('expire-label')}>Expired in 05:00</label>
            </div>
            <div className={clx('ann')}>
                <FontAwesomeIcon icon={verified ? faCheck : faXmark} className={clx({'verify-icon': true, 'verified': verified})}/>
                <label className={clx({'verify-lb': true, 'verified': verified})}>Code verified</label>
            </div>
        </div>
    )
}

export default OTPStep