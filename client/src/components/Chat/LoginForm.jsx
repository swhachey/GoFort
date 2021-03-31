import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
    const[username, setUsername]=useState('');
    const[password, setPassword]=useState('');
    const[error, setError] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const authObject = {'Project-ID':"030e731c-6b20-4d9c-91d4-a1db8eac6c36", "User-Name": username, "User-Secret":password}

    try{
       await axios.get('https://api.chatengine.io/chats', {headers:authObject});
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        window.location.reload();
        setError('')
     }catch (error) {
        setError('Wrong Credentials')
     }
    }

    return (
        <div className="wrapper">
            <div className="form">
        <h1 className="tittle">Chat Feature</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            value={username} onChange={(e) => setUsername(e.target.value)} 
            className="input" 
            placeholder="Username"
            required/>

             <input type="password" 
            value={password} onChange={(e) => setPassword(e.target.value)} 
            className="input" 
            placeholder="password"
            required/>
            <div align="center">
                <button type="submit" className="button">
                    <span>Log in to join our community!</span>
                </button>   
            </div>
        </form>
         <h1 className="error">{error}</h1>
            </div>
        </div>
    )
}

export default LoginForm;
