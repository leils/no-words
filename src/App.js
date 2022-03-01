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

function WordBank(props) {
  return(
    <div className="Bank">
      { Words.map((word, index) => <TalkButton key={index} word={word}/>) }
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WordBank/>
      </header>
    </div>
  );
}

export default App;
