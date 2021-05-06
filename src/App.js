import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="app">
        <Router>
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

        </Router>
    </div>
  );
}

export default App;
