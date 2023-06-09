import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authOperations } from "../../Redux/Auth";
import {LoginFormWrapper, LoginFormStyled, SignInBtn, LoginInput, LoginFormLabel} from "./LoginForm.styled"
import authSelectors from "../../Redux/Auth/Selectors";
import { Loader } from "../../Loader/Loader";

const LoginForm = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isLoading = useSelector(authSelectors.getIsLoading)

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
             {isLoading ? <Loader/> :
            <LoginFormStyled onSubmit={handleSubmit}>
                <LoginFormLabel>Email
                    <LoginInput type="email" name="email" value={email} onChange={handleChange}/>
                </LoginFormLabel>
                <LoginFormLabel>Password
                    <LoginInput type="password" name="password" value={password} onChange={handleChange}/>
                </LoginFormLabel>
                <SignInBtn type="submit">Sign in</SignInBtn>
            </LoginFormStyled>
}
        </LoginFormWrapper>
        
    )
};

export default LoginForm;