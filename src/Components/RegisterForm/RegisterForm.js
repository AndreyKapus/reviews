const RegisterForm = () => {
    
    return (
        <div>
            <form>
                <label>
                    <input type="text" name='name'/>
                    Name
                </label>
                <label>
                    <input type="email" name="email"/>
                    Email
                </label>
                <label>
                    <input type="password" name="password"/>
                    Password
                </label>
                <button type="submit">Sign up</button>
            </form>
        </div>
    )
};

export default RegisterForm;