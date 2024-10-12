import './styles/normalize.css';
import './styles/App.css';
import AppHeader from './components/AppHeader';
import { createContext, useState } from 'react';
import Form from './components/Form';
import ContactsSection, {
  Contacts,
} from './components/contacts/ContactsSection';
import EducationSection from './components/education/EducationSection';
import Education, { EducationType } from './components/education/Education';
import TitleSection, { Title } from './components/heading/TitleSection';
import ExperienceSection from './components/experience/ExperienceSection';
import Experience, { ExperienceType } from './components/experience/Experience';
import example from './data/example-resume.json';
import Resume from './components/Resume';
import TitleForm from './components/heading/TitleForm';

function App() {
  const [name, setName] = useState(example.title.name);
  const [titlePosition, setTitle] = useState(example.title.position);
  const [degree, setDegree] = useState(example.education.degree);
  const [institute, setInstitue] = useState(example.education.institute);
  const [yearsOfStudy, setYearsOfStudy] = useState(
    example.education.yearsOfStudy
  );

  const [phone, setPhone] = useState(example.contacts.phone);
  const [email, setEmail] = useState(example.contacts.email);

  const [dates, setDates] = useState(example.experience.date);
  const [company, setCompany] = useState(example.experience.company);
  const [position, setPosition] = useState(example.experience.position);
  const [roleDesc, setDesc] = useState(example.experience.desc);

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

  function handleTitleChanges(e) {
    console.log(e.target);
    if (e.target.matches('#full_name')) {
      setName(e.target.value);
      title.name = e.target.value;
    }

    if (e.target.matches('#position')) {
      setTitle(e.target.value);
      title.titlePosition = e.target.value;
    }
  }

  return (
    <>
      <AppHeader></AppHeader>
      <div id="resume-container">
        <Form title={title} handleTitleChanges={handleTitleChanges}></Form>

        <Resume
          title={title}
          contacts={contacts}
          education={education}
          experience={experience}
        >
          {' '}
        </Resume>
      </div>
    </>
  );
}

export default App;
