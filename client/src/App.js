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


function App() {
   if(!localStorage.getItem('username')) return(<LoginForm />)
  return (
    <BrowserRouter>
    <div className="container">
      <NavBar />
         <Jumbotron/>
      <Switch>
      <Route exact path={["/", "/cities"]}>
      <Cities />
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
    </BrowserRouter>
  );
}

export default App;
