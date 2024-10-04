import './styles/normalize.css';
import './styles/App.css';
import ResumeForm from './components/ResumeForm';
import { ResumeContent } from './components/ResumeContent';
import CVGenerator from './components/CVGenerator';

function App() {
  return (
    <>
      <ResumeForm></ResumeForm>
      <ResumeContent></ResumeContent>
    </>
  );
}

export default App;
