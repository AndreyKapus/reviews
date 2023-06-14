import { useState } from "react";
import {RiMailSendLine} from 'react-icons/ri'
import { useDispatch } from "react-redux";
import { authOperations } from "../Redux/Auth";
import {ConfirmationWrapper,
    ConfirmEmail,
    ResendSubtitle,
    ResendForm,
    ResendInput,
    ResendBtn,
    ResendBtnText} from './ResendVerify.styled';

const ResendVerify = () => {
    const [email, setEmail] = useState('');
    const [disabled, setDisabled] = useState(true);
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setEmail(e.target.value)
    };

    

    const resendVerificationCode = (e) => {
        e.preventDefault();
        dispatch(authOperations.verify({email}));
        setEmail('')
    };

    return (
        
        <ConfirmationWrapper>
        <ConfirmEmail>Confirm your email</ConfirmEmail>
        <ResendSubtitle>Didn't receive a confirmation email?</ResendSubtitle>
        <ResendForm onSubmit={resendVerificationCode}>
            <ResendInput placeholder="Your email..." type="email" name="email" value={email} onChange={handleChange}/>
            <ResendBtn type="submit"><ResendBtnText>Resend</ResendBtnText><RiMailSendLine/></ResendBtn>
        </ResendForm>
    </ConfirmationWrapper>
    )
};

export default ResendVerify;