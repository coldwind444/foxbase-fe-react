import classNames from 'classnames/bind'
import style from './ResetPasswordPage.module.css'
import OTPStep from './OTPStep/OTPStep'
import EmailStep from './EmailStep/EmailStep'
import PasswordResetStep from './PasswordResetStep/PasswordResetStep'
import { useState } from 'react'

const clx = classNames.bind(style)
function ResetPasswordPage({userInfo}){
    const [step, setStep] = useState(1)
    const [bars, setBars] = useState([true, false, false])

    return (
        <div className={clx('slide-container')}>
            <div className={clx('process')}>
                {bars.map((isActive, index) => (
                    <div key={index} className={clx({'step-bar' : true, 'active' : isActive, 'unactive' : !isActive})}></div>
                ))}
            </div>
            <div className={clx({'slider': true, 'first': step === 1, 'second': step === 2, 'third': step === 3})}>
                <EmailStep setBars={setBars} setStep={setStep}/>
                <OTPStep setBars={setBars} setStep={setStep}/>
                <PasswordResetStep setBars={setBars} setStep={setStep}/>
            </div>
        </div>
    )
}

export default ResetPasswordPage