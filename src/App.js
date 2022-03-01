import logo from './logo.svg';
import './App.css';
import { useSpeechSynthesis } from 'react-speech-kit';

function TalkButton(props) {
  const { speak } = useSpeechSynthesis();
  return(
    <button
      type="button"
      onClick={() => speak({ text: "Talking" })}>
      Talk?
    </button>)
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
