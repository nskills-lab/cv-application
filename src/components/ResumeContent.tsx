import ResumeContentMain from './ResumeContentMain';
import ResumeContentSideBar from './ResumeContentSideBar';
import ResumeForm from './ResumeForm';

export default function ResumeContent() {
  return (
    <div id="resume-container">
      <ResumeForm></ResumeForm>
      <div id="resume-content">
        <ResumeContentSideBar></ResumeContentSideBar>
        <ResumeContentMain></ResumeContentMain>
      </div>
    </div>
  );
}
