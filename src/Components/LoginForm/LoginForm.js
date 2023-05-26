import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../Redux/Auth";

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
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="email" name="email" value={email} onChange={handleChange}/>
                    Email
                </label>
                <label>
                    <input type="password" name="password" value={password} onChange={handleChange}/>
                    Password
                </label>
                <button type="submit">Sign in</button>
            </form>
        </div>
    )
};

export default LoginForm;