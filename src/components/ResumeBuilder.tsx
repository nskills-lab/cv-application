import Form from './Form';
import { useState } from 'react';
import example from '../data/example-resume.json';
import ContactsSection, { Contacts } from './contacts/ContactsSection';
import EducationSection from './education/EducationSection';
import Education, { EducationType } from './education/Education';
import TitleSection, { Title } from './heading/TitleSection';
import ExperienceSection from './experience/ExperienceSection';
import Experience, { ExperienceType } from './experience/Experience';

export default function ResumeBuilder() {
  const [name, setName] = useState(example.title.name);
  const [titlePosition, setTitle] = useState(example.title.position);
  const [degree, setDegree] = useState(example.education.degree);
  const [institute, setInstitue] = useState(example.education.institute);
  const [yearsOfStudy, setYearsOfStudy] = useState(
    example.education.yearsOfStudy
  );

  const [phone, setPhone] = useState(example.contacts.phone);
  const [email, setEmail] = useState(example.contacts.email);

  const [dates, setDates] = useState(example.experience[0].date);
  const [company, setCompany] = useState(example.experience[0].company);
  const [position, setPosition] = useState(example.experience[0].position);
  const [roleDesc, setDesc] = useState(example.experience[0].desc);

  const title: Title = {
    name: name,
    titlePosition: titlePosition,
  };

  const education: EducationType = {
    degree: degree,
    institute: institute,
    yearsOfStudy: yearsOfStudy,
  };

  const contacts: Contacts = {
    phone: phone,
    email: email,
  };

  const experience: ExperienceType = {
    position: position,
    company: company,
    dates: dates,
    roleDesc: roleDesc,
  };
  return (
    <div id="resume-container">
      <Form></Form>
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
              yearsOfStudy={education.yearsOfStudy}
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
              dates={experience.dates}
              roleDesc={experience.roleDesc}
            ></Experience>
            <br></br>
            <br></br>
            <Experience
              position={experience.position}
              company={experience.company}
              dates={experience.dates}
              roleDesc={experience.roleDesc}
            ></Experience>
          </ExperienceSection>
        </div>
      </div>
    </div>
  );
}
