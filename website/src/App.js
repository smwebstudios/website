import logo from './smlogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <b>New Website almost complete.</b>
        </p>
        <p>To get a quote for Web Development or Games Development work please email</p>
    <p>
        <a
          className="App-link"
          href="mailto:info@shield-maiden-studios.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          info@shield-maiden-studios.com
        </a></p>
      </header>
    </div>
  );
}

export default App;
