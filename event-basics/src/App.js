import logo from "./logo.svg";
import "./App.css";
import FunctionalClick from "./Components/FunctionalClick";
import Classclick from "./Components/Classclick";
import EventBind from "./Components/EventBind";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World</p>
        <FunctionalClick/>
        <Classclick/>
        <EventBind/>
      </header>
    </div>
  );
}

export default App;
