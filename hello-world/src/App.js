import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/Greet";
import ClassComponent from "./components/welcome";
import Hello from "./components/hello";
import Message from "./components/message";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />

        <p>Hello world!</p>

        <Message />

        <Hello />

        <MyComponent name="Ankur" year="3rd year">
          <p>About Me</p>
        </MyComponent>

        <MyComponent name="Deepak" year="4rd year" />

        <MyComponent name="Suraj" year="1st year" />

        {/* props in class components */}
        <ClassComponent name="Bruce" heroname="Batman" />
        <ClassComponent name="Clark" heroname="Superman" />
        <ClassComponent name="Diana" heroname="Wonder Woman" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
