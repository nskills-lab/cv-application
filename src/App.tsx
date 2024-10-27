import './styles/normalize.css';
import './styles/App.css';
import AppHeader from './components/AppHeader';
import { useState } from 'react';
import example from './data/example-resume.json';
import Resume from './components/Resume';
import TitleForm from './components/heading/TitleForm';
import ContactsForm from './components/contacts/ContactsForm';
import EducationForm from './components/education/EducationForm';
import { ExperienceForm } from './components/experience/ExperienceForm';
import {
  Contacts,
  EducationType,
  ExperienceType,
  Title,
} from './components/types';

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
  const toggleVariation = [
    { view: 'expanded', toggle: '▼' },
    { view: 'collapsed', toggle: '▲' },
  ];

  const [display, setDisplay] = useState({
    'title-form': toggleVariation[0],
    'contact-form': toggleVariation[0],
    'education-form': toggleVariation[0],
    'experience-form': toggleVariation[0],
  });

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

    // Display toggle changes
    if (e.target.matches('[data-toggle]')) {
      const subForm = e.target.closest('[data-form]').dataset.form;
      const current = display[subForm];
      const target = toggleVariation.find((value) => {
        return value.view !== current.view;
      });

      setDisplay({
        ...display,
        [subForm]: target,
      });
      return;
    }
    // Title changes
    if (e.target.matches('#full_name')) {
      setName(e.target.value);
      return;
    }

    if (e.target.matches('#position')) {
      setTitle(e.target.value);
      return;
    }

    // Contacts changes
    if (e.target.matches('#phone')) {
      setPhone(e.target.value);
      return;
    }

    if (e.target.matches('#email')) {
      setEmail(e.target.value);
      return;
    }

    // Education changes
    if (e.target.matches('#degree')) {
      setDegree(e.target.value);
      return;
    }

    if (e.target.matches('#institution')) {
      setInstitue(e.target.value);
      return;
    }

    if (e.target.matches('#date-start')) {
      setEduStartDate(e.target.value);
      return;
    }

    if (e.target.matches('#date-end')) {
      setEduEndDate(e.target.value);
      return;
    }

    // Experience changes
    const exp = e.target.closest('div[data-exp-num]');
    const expNum = parseInt(exp.dataset.expNum);

    if (e.target.matches('#del-exp-btn')) {
      setExpItems((expItems) => {
        return [...expItems].filter((item) => {
          if (item.id !== expNum) {
            return item;
          }
        });
      });
    } else {
      const key: keyof ExperienceType = e.target.dataset.expItem;
      setExpItems((expItems) => {
        return [...expItems].map((item: ExperienceType) => {
          if (item.id === expNum) {
            if (e.target.matches('#date-end-exp-current')) {
              const isPresent = e.target.checked;
              if (isPresent) {
                item.dateEnd = 'Present';
              }
              const checkboxEl = document.getElementById(
                'date-end-exp'
              ) as HTMLInputElement;
              checkboxEl.disabled = isPresent;
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
            values={title}
            display={display['title-form']}
            onChange={handleInputChanges}
          ></TitleForm>
          <ContactsForm
            values={contacts}
            display={display['contact-form']}
            onChange={handleInputChanges}
          ></ContactsForm>
          <form data-form="education-form">
            <fieldset data-fieldset="education">
              <div data-form-header>
                <span data-legend="edu">Educational Background</span>
                <button data-toggle onClick={handleInputChanges}>
                  {display['education-form'].toggle}
                </button>
              </div>
              <EducationForm
                values={education}
                display={display['education-form']}
                onChange={handleInputChanges}
              ></EducationForm>
            </fieldset>
          </form>
          <form data-form="experience-form">
            <fieldset data-fieldset="experience">
              <div data-form-header>
                <span data-legend="edu" className="tooltip">
                  Experience &#33;
                  <span className="tooltiptext">Upto 3 entries max</span>
                </span>
                <button data-toggle onClick={handleInputChanges}>
                  {display['experience-form'].toggle}
                </button>
              </div>
              {expItems.map((item) => (
                <ExperienceForm
                  display={display['experience-form']}
                  values={item}
                  onChange={handleInputChanges}
                ></ExperienceForm>
              ))}
              <div>
                <button
                  id="add-exp-btn"
                  onClick={addExperience}
                  data-form-content
                  className={display['experience-form'].view}
                >
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
          experiences={expItems}
        ></Resume>
      </div>
    </>
  );
}

export default App;
