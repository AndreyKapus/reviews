import {AuthNavLink} from './AuthNav.styled'

const AuthNav = () => {
    return (
        <div>
            <AuthNavLink to='/login'>Sign in</AuthNavLink>
            <AuthNavLink  to='/register'>Sign up</AuthNavLink>
        </div>
    )
};

export default AuthNav