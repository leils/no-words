import logo from './logo.svg';
import './App.css';

function TalkButton(props) {
  return <button type="button">Talk?</button>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TalkButton/>
      </header>
    </div>
  );
}

export default App;
