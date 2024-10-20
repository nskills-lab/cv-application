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

  const [expItems, setExpItems] = useState<ExperienceType[]>([
    ...example.experience,
  ]);

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

  function handleInputChanges(e) {
    e.preventDefault();
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

    const exp = e.target.closest('div[data-exp-num]');
    console.log(exp);
    const key = e.target.dataset.expItem;
    const expNum = parseInt(exp.dataset.expNum);

    if (e.target.matches('#del-exp-btn')) {
      setExpItems((expItems) => {
        return [...expItems].filter((item) => {
          if (item.id !== expNum) {
            return item;
          }
        });
      });
      console.log(expItems);
    } else {
      setExpItems((expItems) => {
        return [...expItems].map((item) => {
          if (item.id === expNum) {
            if (e.target.matches('#date-end-exp-current')) {
              const isPresent = e.target.checked;

              if (isPresent) {
                item.dateEnd = 'Present';
              }
              document.getElementById('date-end-exp').disabled = isPresent;
            } else {
              item[key] = e.target.value;
            }
          }
          return item;
        });
      });
    }
  }

  function addExperience(e) {
    e.preventDefault();
    const next = expItems.length ? expItems[expItems.length - 1].id + 1 : 0;

    if (next > 2) return;
    const experienceNew: ExperienceType = {
      id: next,
      position: '',
      company: '',
      dateStart: '',
      dateEnd: '',
      roleDesc: '',
    };

    setExpItems((expItems) => expItems.concat(experienceNew));
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
              <legend className="tooltip">
                Experience &#33;
                <span className="tooltiptext">Upto 3 entries max</span>
              </legend>
              {expItems.map((item) => (
                <ExperienceForm
                  experience={item}
                  onChange={handleInputChanges}
                ></ExperienceForm>
              ))}
              <div>
                <button id="add-exp-btn" onClick={addExperience}>
                  + Experience
                </button>
              </div>
            </fieldset>
          </form>
        </div>

        <Resume
          title={title}
          contacts={contacts}
          education={education}
          experience={expItems}
        >
          {' '}
        </Resume>
      </div>
    </>
  );
}

export default App;
