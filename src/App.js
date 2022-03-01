import logo from './logo.svg';
import './App.css';
import { useSpeechSynthesis } from 'react-speech-kit';
import Words from './words';

function TalkButton(props) {
  const { speak } = useSpeechSynthesis();
  return(
    <button
      type="button"
      onClick={() => speak({ text: props.word })}>
      {props.word}
    </button>)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { Words.map((word) => <TalkButton word={word}/>)}
        
        <TalkButton word="Talking"/>
      </header>
    </div>
  );
}

export default App;
