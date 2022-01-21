import logo from './logo.svg';
import './App.css';
import WelcomeHeader from './components/WelcomeHeader';
import LetterHeader from './components/LetterHeader';
import WordList from './components/WordList';

function App() {
  return (
    <div>
      <WelcomeHeader />
      <LetterHeader />
      <WordList />
    </div>
  );
}

export default App;
