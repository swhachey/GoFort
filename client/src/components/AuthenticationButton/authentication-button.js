import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import LoginButton from '../LoginButton/login-button'
import LogoutButton from '../LogOutButton/logout-button'


const AuthenticateButton = () => {

    const {isAuthenticated} = useAuth0()

    return isAuthenticated ? <LogoutButton/>: <LoginButton/>

}

export default AuthenticateButton 