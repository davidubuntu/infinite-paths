import logo from './assets/images/gif/fluid.gif';
import './App.css';
import CodeBlock from './components/CodeBlock'
const codeString = `{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}`;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Infinite Paths
        </p>
        <a
          className="App-link"
          href="https://medium.com/hackernoon/absolute-imports-with-create-react-app-4c6cfb66c35d"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow the instructions
        </a>
        <CodeBlock >
          {codeString}
        </CodeBlock>
      </header>
    </div>
  );
}

export default App;
