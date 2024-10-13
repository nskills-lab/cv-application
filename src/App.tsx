import './styles/normalize.css';
import './styles/App.css';
import AppHeader from './components/AppHeader';
import { useState } from 'react';
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
import ContactsForm from './components/contacts/ContactsForm';
import EducationForm from './components/education/EducationForm';

function App() {
  const [name, setName] = useState(example.title.name);
  const [titlePosition, setTitle] = useState(example.title.position);
  const [degree, setDegree] = useState(example.education.degree);
  const [institute, setInstitue] = useState(example.education.institute);
  const [dateStart, setEduStartDate] = useState(example.education.dateStart);
  const [dateEnd, setEduEndDate] = useState(example.education.dateEnd);

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
    dates: dates,
    roleDesc: roleDesc,
  };

  function handleInputChanges(e) {
    if (e.target.matches('#full_name')) {
      setName(e.target.value);
      title.name = e.target.value;
    }

    if (e.target.matches('#position')) {
      setTitle(e.target.value);
      title.titlePosition = e.target.value;
    }

    if (e.target.matches('#phone')) {
      setPhone(e.target.value);
      contacts.phone = e.target.value;
    }
    if (e.target.matches('#email')) {
      setEmail(e.target.value);
      contacts.email = e.target.value;
    }

    if (e.target.matches('#degree')) {
      setDegree(e.target.value);
      education.degree = e.target.value;
    }

    if (e.target.matches('#institution')) {
      setInstitue(e.target.value);
      education.institute = e.target.value;
    }

    if (e.target.matches('#date-start')) {
      setEduStartDate(e.target.value);
      education.dateStart = e.target.value;
    }

    if (e.target.matches('#date-end')) {
      setEduEndDate(e.target.value);
      education.dateEnd = e.target.value;
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

              <label htmlFor="job-position">Job Position </label>
              <input type="text" id="job-position" />

              <label htmlFor="company">Company</label>
              <input type="text" id="company" />

              <label htmlFor="date-start-exp">Start </label>
              <input type="date" id="date-start-exp" />

              <label htmlFor="date-end-exp">End </label>
              <input type="date" id="date-end-exp" />

              <label htmlFor="job-desc">Responsibilities </label>
              <textarea id="job-desc" maxLength={500} cols={50} rows={10} />
              <br />
              <div>
                <button>Add</button>
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
