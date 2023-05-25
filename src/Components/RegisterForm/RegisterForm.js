import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../Redux/Auth";

const RegisterForm = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" name='name' value={name} onChange={handleChange}/>
                    Name
                </label>
                <label>
                    <input type="email" name="email" value={email} onChange={handleChange}/>
                    Email
                </label>
                <label>
                    <input type="password" name="password" value={password} onChange={handleChange}/>
                    Password
                </label>
                <button type="submit">Sign up</button>
            </form>
        </div>
    )
};

export default RegisterForm;