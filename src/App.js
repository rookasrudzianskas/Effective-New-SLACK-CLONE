import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./components/Chat";
import {useState} from "react";
import Login from "./components/Login";

function App() {

    const [user, setUser ] = useState(null);

  return (
    <div className="app">
        <Router>
            {/* if we do not have the user, so show the login page, if we have so redirect to the app*/}
            {!user ? (
                <Login />
            ) : (
                <>
             <Header />
        {/*    Header   */}

        <div className="app__body">
            <Sidebar />
            <Switch>

                <Route path="/room/:roomId">
                    <Chat />
                </Route>

                <Route path="/">
                    <h1>Welcome</h1>
                </Route>

            </Switch>
            {/*    Sidebar  */}

            {/*    React router -> Chat screen  */}
        </div>
                </>
                )}
        </Router>
    </div>
  );
}

export default App;
