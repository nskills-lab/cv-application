import ContactsSection, { Contacts } from './contacts/ContactsSection';
import Education, { EducationType } from './education/Education';
import EducationSection from './education/EducationSection';
import Experience, { ExperienceType } from './experience/Experience';
import ExperienceSection from './experience/ExperienceSection';
import TitleSection, { Title } from './heading/TitleSection';

export type ResumeType = Title | Contacts | EducationType | ExperienceType;

export default function Resume({
  contacts,
  education,
  title,
  experience,
}: ResumeType) {
  return (
    <div id="resume-content">
      <div id="rc-sidebar">
        <ContactsSection
          phone={contacts.phone}
          email={contacts.email}
        ></ContactsSection>
        <EducationSection>
          <Education
            degree={education.degree}
            institute={education.institute}
            dateStart={education.dateStart}
            dateEnd={education.dateEnd}
          ></Education>
        </EducationSection>
      </div>
      <div id="rc-main">
        <TitleSection
          name={title.name}
          titlePosition={title.titlePosition}
        ></TitleSection>
        <ExperienceSection>
          <Experience
            position={experience.position}
            company={experience.company}
            dateStart={experience.dateStart}
            dateEnd={experience.dateEnd}
            roleDesc={experience.roleDesc}
          ></Experience>
          <br></br>
          <br></br>
          <Experience
            position={experience.position}
            company={experience.company}
            dateStart={experience.dateStart}
            dateEnd={experience.dateEnd}
            roleDesc={experience.roleDesc}
          ></Experience>
        </ExperienceSection>
      </div>
    </div>
  );
}
