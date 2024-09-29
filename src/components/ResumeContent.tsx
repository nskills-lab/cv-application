import ResumeContentMain from './ResumeContentMain';
import ResumeContentSideBar from './ResumeContentSideBar';

export function ResumeContent() {
  return (
    <div id="resume-container">
      <div id="resume-content">
        <ResumeContentSideBar></ResumeContentSideBar>
        <ResumeContentMain></ResumeContentMain>
      </div>
    </div>
  );
}
