import './styles/normalize.css';
import './styles/App.css';
import ResumeBuilder from './components/ResumeBuilder';
import AppHeader from './components/AppHeader';

function App() {
  return (
    <>
      <AppHeader></AppHeader>
      <ResumeBuilder></ResumeBuilder>
    </>
  );
}

export default App;
