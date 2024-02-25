import "./App.css";
import FragmentDemo from "./Components/fragment_demo";
// import Table from './Components/table';
// import PureComp from './Components/pureComp';
import ParentComp from "./Components/ParentComp";
// import RefsDemo from './Components/RefsDemo';
// import FocusInput from './Components/FocusInput';
import ForwardRefParentInput from "./Components/forwardRefParentInput";
import PortalDemo from "./Components/portalDemo";

function App() {
  return (
    <div className="App">
      <FragmentDemo />
      {/* <Table/> */}
      <ParentComp />
      {/* <RefsDemo/> */}
      {/* <FocusInput/> */}
      <ForwardRefParentInput />
      <PortalDemo/>
    </div>
  );
}

export default App;
