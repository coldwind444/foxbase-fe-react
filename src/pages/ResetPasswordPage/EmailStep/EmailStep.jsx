import style from './EmailStep.module.css'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import RoundedTextBox from '../../../components/RoundedTextBox/RoundedTextBox'

const clx = classNames.bind(style)
function EmailStep({ setStep, setBars }){
    const handleNext = () => {
        setStep(2)
        setBars([true, true, false])
    }

    return (
        <div className={clx('email-container')}>
            <h1 className={clx('email-title')}>Enter your email</h1>
            <RoundedTextBox type='text' hint='Email'/>
            <div className={clx('send-code-btn')} onClick={handleNext}>
                <FontAwesomeIcon className={clx('plane')} icon={faPaperPlane}/>
                <label>Send code</label>
            </div>
        </div>
    )
}

export default EmailStep