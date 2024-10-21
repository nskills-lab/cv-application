import ContactsSection from './contacts/ContactsSection';
import Education from './education/Education';
import EducationSection from './education/EducationSection';
import Experience from './experience/Experience';
import ExperienceSection from './experience/ExperienceSection';
import TitleSection from './heading/TitleSection';
import { Contacts, EducationType, ExperienceType, Title } from './types';

export default function Resume(
  contacts: Contacts,
  education: EducationType,
  title: Title,
  experience: ExperienceType[]
) {
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
          {experience.map((item: ExperienceType) => (
            <Experience
              position={item.position}
              company={item.company}
              dateStart={item.dateStart}
              dateEnd={item.dateEnd}
              roleDesc={item.roleDesc}
            ></Experience>
          ))}
        </ExperienceSection>
      </div>
    </div>
  );
}
