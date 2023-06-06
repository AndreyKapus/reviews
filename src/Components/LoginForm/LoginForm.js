import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../Redux/Auth";
import {LoginFormWrapper, LoginFormStyled, SignInBtn, LoginInput} from "./LoginForm.styled"

const LoginForm = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({target: {name, value}}) => {
        switch(name) {
            case 'email': 
                return setEmail(value);
            case 'password': 
                return setPassword(value);
            default: return;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(authOperations.login({email, password}));
        setEmail('');
        setPassword('');
    }
    
    return (
        <LoginFormWrapper>
            <LoginFormStyled onSubmit={handleSubmit}>
                <label>Email
                    <LoginInput type="email" name="email" value={email} onChange={handleChange}/>
                </label>
                <label>Password
                    <LoginInput type="password" name="password" value={password} onChange={handleChange}/>
                </label>
                <SignInBtn type="submit">Sign in</SignInBtn>
            </LoginFormStyled>
        </LoginFormWrapper>
    )
};

export default LoginForm;