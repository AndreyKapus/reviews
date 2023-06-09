import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authOperations } from "../../Redux/Auth";
import {RegFormWrapper, RegFormStyled, RegFormLabel, RegInput, RegBtn} from './RegisterForm.styled'
import authSelectors from "../../Redux/Auth/Selectors";
import { Loader } from "../../Loader/Loader";

const RegisterForm = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isLoading = useSelector(authSelectors.getIsLoading)

    const handleChange = ({target: {name, value}}) => {
        switch(name) {
            case 'name':
                return setName(value);
            case 'email': 
                return setEmail(value);
            case 'password': 
                return setPassword(value);
            default: return;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(authOperations.register({name, email, password}));
        setName('');
        setEmail('');
        setPassword('');
    }
    
    return (
        <RegFormWrapper>
            {isLoading ? <Loader/> :
            <RegFormStyled onSubmit={handleSubmit}>
                <RegFormLabel>Name
                    <RegInput type="text" name='name' value={name} onChange={handleChange}/>
                </RegFormLabel>
                <RegFormLabel>Email
                    <RegInput type="email" name="email" value={email} onChange={handleChange}/>
                </RegFormLabel>
                <RegFormLabel>Password
                    <RegInput type="password" name="password" value={password} onChange={handleChange}/>         
                </RegFormLabel>
                <RegBtn type="submit">Sign up</RegBtn>
            </RegFormStyled>
}
        </RegFormWrapper>
    )
};

export default RegisterForm;