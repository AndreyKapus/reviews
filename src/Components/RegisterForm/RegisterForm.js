const RegisterForm = () => {
    return (
        <div>
            <form>
                <label>
                    <input type="text"/>
                    Name
                </label>
                <label>
                    <input type="text"/>
                    Email
                </label>
                <label>
                    <input type="text"/>
                    Password
                </label>
                <button type="submit">Sign up</button>
            </form>
        </div>
    )
};

export default RegisterForm;