import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">

        <Header />
    {/*    Header   */}
        <div className="app__body">
            <Sidebar />
            {/*    Sidebar  */}

            {/*    React router -> Chat screen  */}
        </div>


    </div>
  );
}

export default App;
