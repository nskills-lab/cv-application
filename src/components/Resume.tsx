import ContactInfo from './ContactInfo';
import EducationSection from './EducationSection';
import Experience from './Experience';
import TitleSection from './TitleSection';
export default function Resume() {
  return (
    <div id="resume-content">
      <div id="rc-sidebar">
        <ContactInfo></ContactInfo>
        <EducationSection></EducationSection>
      </div>
      <div id="rc-main">
        <TitleSection></TitleSection>
        <Experience></Experience>
      </div>
    </div>
  );
}
