const LoginForm = () => {
    return (
        <div>
            <form>
                <label>
                    <input type="email" name="email"/>
                    Email
                </label>
                <label>
                    <input type="password" name="password"/>
                    Password
                </label>
                <button type="submit">Sign in</button>
            </form>
        </div>
    )
};

export default LoginForm;