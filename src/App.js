// import logo from './logo.svg';
import './App.css';

import Hello from './naresh.js';
import Hiii from'./naresh1.js';
import Venkatesh from'./venkatesh.js';



function App() {
  return (
    <div className="App">
      HELLO NARESH
      {/* <Hiii/> */}


      <Hello />

      <Venkatesh location='guntur' state='AP'/>

      <Venkatesh location='vijaywada' state='AP'/>

      <Venkatesh location='hyderabad' state='TS'/>
      
      <Venkatesh location='Delhi' state='India'/>





      <Hiii/>
    </div>
  );
}



export default App;



/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      // </header> */