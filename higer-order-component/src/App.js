// import logo from './logo.svg';
import "./App.css";
import ClickCounterTwo from "./Component/ClickCounterTwo";
import HoverCounterTwo from "./Component/HoverCounterTwo";
// import ClickCount from './Component/ClickCount';
// import HoverCounter from './Component/hoverCounter';
// import User from './Component/User';
import Counter from "./Component/Counter";

function App() {
  return (
    <div className="App">
      {/* <ClickCount name='Ankur'/> */}
      {/* <HoverCounter/> */}
      {/* <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User render={(isLoggedIn)=> isLoggedIn?"Ankur":"Guest"} /> */}
      <Counter
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />

      <Counter
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
    </div>
  );
}

export default App;
