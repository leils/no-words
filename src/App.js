import './App.css';
import { useSpeechSynthesis } from 'react-speech-kit';
import Words from './words';

function TalkButton(props) {
  return(
    <button
      type="button"
      className="talkButton"
      onClick={() => {
        if (props.isSpeaking) {
          props.cancelSpeech();
        }
        props.speakFunct({ text: props.word, pitch: 1.2 });
      }}>
      {props.word}
    </button>)
}

function WordBank(props) {
  const { speak, cancel, speaking } = useSpeechSynthesis();
  return(
    <div className="Bank">
      { Words.map((word, index) => <TalkButton
        key={index}
        word={word}
        speakFunct={speak}
        cancelSpeech={cancel}
        isSpeaking={speaking}/>
      ) }
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
