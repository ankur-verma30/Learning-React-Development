// import logo from './logo.svg';
import './App.css';
import ClickCount from './Component/ClickCount';
import HoverCounter from './Component/hoverCounter';

function App() {
  return (
    <div className="App">
      <ClickCount name='Ankur'/>
      <HoverCounter/>
    </div>
  );
}

export default App;
