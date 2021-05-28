import logo from './assets/images/gif/fluid.gif';
import './App.css';
import { Home } from './pages'



const App=()=> {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>INFINITE PATHS</h1>
        <a
          className="App-link"
          href="https://medium.com/hackernoon/absolute-imports-with-create-react-app-4c6cfb66c35d"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link God
        </a>
       <Home/>
       {/*<img src={logo} className="App-logo" alt="logo" />*/}
      </header>
    </div>
  );
}

export default App;
