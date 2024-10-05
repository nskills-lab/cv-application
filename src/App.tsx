import './styles/normalize.css';
import './styles/App.css';
import { ResumeContent } from './components/ResumeContent';
import logo from './styles/assets/icons/icons8-resume-48.png';
import { EditResumeButton } from './components/EditResumeButton';

function App() {
  return (
    <>
      <div id="app-name">
        <img src={logo} alt="" />
        <span>cv builder </span>
      </div>
      <ResumeContent></ResumeContent>
      <EditResumeButton></EditResumeButton>
    </>
  );
}

export default App;
