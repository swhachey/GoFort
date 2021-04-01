import React from 'react'
import {Button} from 'semantic-ui-react'
import {useAuth0} from '@auth0/auth0-react'




const LoginButton = () => {

    const {loginWithRedirect} = useAuth0()

    return <Button color="blue" onClick={() => loginWithRedirect()}>Log In</Button>

}

export default LoginButton

    
    
