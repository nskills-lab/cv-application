import ContactsSection from './contacts/ContactsSection';
import Education from './education/Education';
import EducationSection from './education/EducationSection';
import Experience from './experience/Experience';
import ExperienceSection from './experience/ExperienceSection';
import TitleSection from './heading/TitleSection';
import { ExperienceType, ResumeType } from './types';

export default function Resume({
  title,
  contacts,
  education,
  experiences,
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
        <div id="experience-container">
          <span id="exp-section-title">Experience</span>
          <div className="divider"></div>
          <div id="experience-content">
            {experiences.map((item: ExperienceType) => (
              <Experience
                id={item.id}
                position={item.position}
                company={item.company}
                dateStart={item.dateStart}
                dateEnd={item.dateEnd}
                roleDesc={item.roleDesc}
              ></Experience>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
