import './App.css';
import NavBar from "./components/Nav/nav"
import Cities from "./pages/Cities"
import Info from "./pages/Info"
import Traveled from "./pages/Traveled"
import NoMatch from "./pages/NoMatch"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Jumbotron from './components/Jumbotron/jumbotron';
import{ChatEngine} from 'react-chat-engine';
import './App.css'
import LoginForm from './components/Chat/LoginForm'
import ChatFeed from './components/Chat/ChatFeed';
import LoginButton from './components/LoginButton/login-button'
import {Auth0Provider} from '@auth0/auth0-react'
import LogoutButton from './components/LogOutButton/logout-button'


function App() {
   if(!localStorage.getItem('username')) return(<LoginForm />)
  return (
    <BrowserRouter>
    <Auth0Provider
      domain = "dev-ptqzlmfp.us.auth0.com"
      clientId = "WBj49Gh0QmpT2PnBcCJPCGOw51ksdgOE"
      redirectUri = {window.location.origin}
    >
    <div className="container">
      <NavBar />
         <Jumbotron/>
      <Switch>
      <Route exact path={["/", "/cities"]}>
      <Cities />
      </Route>

      <Route exact path={"/login"}>
        <LoginButton/>
      </Route>
      <Route exact path={"/logout"}>
        <LogoutButton/>
      </Route>

      <Route path={"/cities/:id"}>
        <Info/>
        </Route>

      <Route path={"/traveled"}>
        <Traveled/>
        </Route>

      <Route path={"/chat"}>
          <ChatEngine
            height="100vh"
            projectID="030e731c-6b20-4d9c-91d4-a1db8eac6c36"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>} 
        />
        </Route>

      <Route path={"*"}>
      <NoMatch/>
      </Route>
     
    </Switch>
    </div>
    </Auth0Provider>
    </BrowserRouter>
  );
}

export default App;
