import "./App.css";
import LifecycleA from "./Components/lifecycleA";
import Hero from "./Components/hero";
import ErrorBoundary from "./ErrorBoundary";
function App() {
  return (
    <div className="App">
      <LifecycleA />
      <ErrorBoundary>
        <Hero heroname="Batman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroname="Superman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroname="Joker" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
