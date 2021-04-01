import React from 'react'
import {Button} from 'semantic-ui-react'
import {useAuth0} from '@auth0/auth0-react'




const SignUpButton = () => {

    const {loginWithRedirect} = useAuth0()

    return <Button color="green" onClick={() => loginWithRedirect({screen_hint: "signup"})}>Sign Up</Button>

}

export default SignUpButton

    
    
