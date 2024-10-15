import './styles/normalize.css';
import './styles/App.css';
import AppHeader from './components/AppHeader';
import { useState } from 'react';
import { Contacts } from './components/contacts/ContactsSection';
import { EducationType } from './components/education/Education';
import { Title } from './components/heading/TitleSection';
import { ExperienceType } from './components/experience/Experience';
import example from './data/example-resume.json';
import Resume from './components/Resume';
import TitleForm from './components/heading/TitleForm';
import ContactsForm from './components/contacts/ContactsForm';
import EducationForm from './components/education/EducationForm';
import { ExperienceForm } from './components/experience/ExperienceForm';
import { dateFormat } from './utility/helpers';

function App() {
  const [name, setName] = useState(example.title.name);
  const [titlePosition, setTitle] = useState(example.title.position);
  const [degree, setDegree] = useState(example.education.degree);
  const [institute, setInstitue] = useState(example.education.institute);
  const [dateStart, setEduStartDate] = useState(example.education.dateStart);
  const [dateEnd, setEduEndDate] = useState(example.education.dateEnd);

  const [phone, setPhone] = useState(example.contacts.phone);
  const [email, setEmail] = useState(example.contacts.email);

  const [expDateStart, setExpDateStart] = useState(
    example.experience.dateStart
  );
  const [expDateEnd, setExpDateEnd] = useState(example.experience.dateEnd);
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
    dateStart: dateStart,
    dateEnd: dateEnd,
  };

  const contacts: Contacts = {
    phone: phone,
    email: email,
  };

  const experience: ExperienceType = {
    position: position,
    company: company,
    dateStart: expDateStart,
    dateEnd: expDateEnd,
    roleDesc: roleDesc,
  };

  function handleInputChanges(e) {
    // Title changes
    if (e.target.matches('#full_name')) {
      setName(e.target.value);
    }

    if (e.target.matches('#position')) {
      setTitle(e.target.value);
    }

    // Contacts changes
    if (e.target.matches('#phone')) {
      setPhone(e.target.value);
    }
    if (e.target.matches('#email')) {
      setEmail(e.target.value);
    }

    // Education changes
    if (e.target.matches('#degree')) {
      setDegree(e.target.value);
    }

    if (e.target.matches('#institution')) {
      setInstitue(e.target.value);
    }

    if (e.target.matches('#date-start')) {
      setEduStartDate(e.target.value);
    }

    if (e.target.matches('#date-end')) {
      setEduEndDate(e.target.value);
    }

    // Experience changes
    if (e.target.matches('#job-position')) {
      setPosition(e.target.value);
    }

    if (e.target.matches('#company')) {
      setCompany(e.target.value);
    }

    if (e.target.matches('#date-start-exp')) {
      setExpDateStart(e.target.value);
    }

    if (e.target.matches('#date-end-exp')) {
      const value = dateFormat(e.target.value);
      setExpDateEnd(value);
    }

    if (e.target.matches('#date-end-exp-current')) {
      const isPresent = e.target.checked;
      if (isPresent) {
        setExpDateEnd('Present');
        document.getElementById('date-end-exp').disabled = true;
      } else {
        document.getElementById('date-end-exp').disabled = false;
      }
    }

    if (e.target.matches('#job-desc')) {
      setDesc(e.target.value);
    }
  }

  return (
    <>
      <AppHeader></AppHeader>
      <div id="resume-container">
        <div id="resume-form-container">
          <TitleForm
            name={title.name}
            titlePosition={title.titlePosition}
            onChange={handleInputChanges}
          ></TitleForm>
          <ContactsForm
            phone={contacts.phone}
            email={contacts.email}
            onChange={handleInputChanges}
          ></ContactsForm>
          <form data-form="education-form">
            <fieldset data-fieldset="education">
              <legend>Educational Background </legend>
              <EducationForm
                degree={education.degree}
                institution={education.institute}
                dateStart={education.dateStart}
                dateEnd={education.dateEnd}
                onChange={handleInputChanges}
              ></EducationForm>
            </fieldset>
          </form>
          <form data-form="experience-form">
            <fieldset data-fieldset="experience">
              <legend>Experience </legend>
              <ExperienceForm
                experience={experience}
                onChange={handleInputChanges}
              ></ExperienceForm>
              <br />
              <div>
                <button>+ Experience</button>
                <button>Delete</button>
              </div>
            </fieldset>
          </form>
        </div>

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
