import './App.css';
import NavBar from "./components/Nav/nav"
import Cities from "./pages/Cities"
import Info from "./pages/Info"
import Chat from "./pages/Chat"
import Traveled from "./pages/Traveled"
import NoMatch from "./pages/NoMatch"
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <NavBar />
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
        <Chat/>
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
