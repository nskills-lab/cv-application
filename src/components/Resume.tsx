import ContactInfo from './ContactInfo';
import Education from './Education';
import Title from './Title';
import Experience from './Experience';
export default function Resume() {
  return (
    <div id="resume-content">
      <div id="rc-sidebar">
        <ContactInfo></ContactInfo>
        <Education></Education>
      </div>
      <div id="rc-main">
        <Title></Title>
        <Experience></Experience>
      </div>
    </div>
  );
}
