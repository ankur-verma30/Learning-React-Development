// import logo from './logo.svg';
import './App.css';
import Stylesheet from './components/stylesheet';
import Inline from './components/inline';
import './appStyles.css'
import styles from './appStyles.module.css';

function App() {
  return (
    <div className="App">
     <Stylesheet primary={true}/>
     <Inline/>
     <h2 className='error'>Error </h2>
     <h2 className={styles.wait}>Waiting</h2>
     <h2 className={styles.success}>Success</h2>
    </div>
  );
}

export default App;
