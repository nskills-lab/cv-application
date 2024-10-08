import Form from './Form';
import Resume from './Resume';
import { useState } from 'react';
import example from '../data/example-resume.json';
import ContactInfo from './ContactInfo';
import EducationSection from './EducationSection';
import TitleSection from './TitleSection';
import Experience from './Experience';
import { Education, Title } from '../types/Model';

export default function ResumeBuilder() {
  const [name, setName] = useState(example.title.name);
  const [position, setTitle] = useState(example.title.position);
  const [degree, setDegree] = useState(example.education.degree);
  const [institute, setInstitue] = useState(example.education.institute);
  const [yearsOfStudy, setYearsOfStudy] = useState(
    example.education.yearsOfStudy
  );
  const title: Title = {
    name: name,
    position: position,
  };

  const education: Education = {
    degree: degree,
    institute: institute,
    yearsOfStudy: yearsOfStudy,
  };
  return (
    <div id="resume-container">
      <Form></Form>
      <div id="resume-content">
        <div id="rc-sidebar">
          <ContactInfo></ContactInfo>
          <EducationSection
            degree={education.degree}
            institute={education.institute}
            yearsOfStudy={education.yearsOfStudy}
          ></EducationSection>
        </div>
        <div id="rc-main">
          <TitleSection
            name={title.name}
            position={title.position}
          ></TitleSection>
          <Experience></Experience>
        </div>
      </div>
    </div>
  );
}
