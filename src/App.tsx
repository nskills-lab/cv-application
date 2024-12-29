import './styles/normalize.css';
import './styles/App.css';
import AppHeader from './components/AppHeader';
import { useRef, useState } from 'react';
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
  setValue,
  Title,
} from './components/types';
import { useInputValue, useToggle } from './customHooks';

function App() {
  const displayVariationRef = useRef([
    { view: 'expanded', toggle: '▼' },
    { view: 'collapsed', toggle: '▲' },
  ]);
  const nameInput = useInputValue(example.title.name);
  const titlePositionInput = useInputValue(example.title.position);
  const titleFormDisplay = useToggle(displayVariationRef.current[0]);
  const phoneInput = useInputValue(example.contacts.phone);
  const emailInput = useInputValue(example.contacts.email);
  const contactFormDisplay = useToggle(displayVariationRef.current[0]);
  const degreeInput = useInputValue(example.education.degree);
  const instituteInput = useInputValue(example.education.institute);
  const eduDateStartInput = useInputValue(example.education.dateStart);
  const eduDateEndInput = useInputValue(example.education.dateEnd);
  const educationFormDisplay = useToggle(displayVariationRef.current[0]);
  const experienceFormDisplay = useToggle(displayVariationRef.current[0]);

  const [expItems, setExpItems] = useState<ExperienceType[]>([
    ...example.experience,
  ]);

  const title: Title = {
    name: nameInput.value,
    titlePosition: titlePositionInput.value,
  };

  const contacts: Contacts = {
    phone: phoneInput.value,
    email: emailInput.value,
  };

  const education: EducationType = {
    degree: degreeInput.value,
    institute: instituteInput.value,
    dateStart: eduDateStartInput.value,
    dateEnd: eduDateEndInput.value,
  };

  function addExperience(e: React.SyntheticEvent) {
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

  function handleExperienceInputChanges(e) {
    e.preventDefault();
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
              const key: keyof ExperienceType = e.target.dataset.expItem;
              setValue(item, key, e.target.value);
            }
          }
          return item;
        });
      });
    }
  }

  return (
    <>
      <AppHeader></AppHeader>
      <div id="resume-container">
        <div id="resume-form-container">
          <TitleForm
            values={title}
            display={titleFormDisplay.value}
            onChange={[
              nameInput.onChange,
              titlePositionInput.onChange,
              titleFormDisplay.onClick,
            ]}
          ></TitleForm>
          <ContactsForm
            values={contacts}
            display={contactFormDisplay.value}
            onChange={[
              phoneInput.onChange,
              emailInput.onChange,
              contactFormDisplay.onClick,
            ]}
          ></ContactsForm>
          <form data-form="education-form">
            <fieldset data-fieldset="education">
              <div data-form-header>
                <span data-legend="edu">Educational Background</span>
                <button data-toggle onClick={educationFormDisplay.onClick}>
                  {educationFormDisplay.value.toggle}
                </button>
              </div>
              <EducationForm
                values={education}
                display={educationFormDisplay.value}
                onChange={[
                  degreeInput.onChange,
                  instituteInput.onChange,
                  eduDateStartInput.onChange,
                  eduDateEndInput.onChange,
                ]}
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
                <button data-toggle onClick={experienceFormDisplay.onClick}>
                  {experienceFormDisplay.value.toggle}
                </button>
              </div>
              {expItems.map((item) => (
                <ExperienceForm
                  display={experienceFormDisplay.value}
                  values={item}
                  onChange={[handleExperienceInputChanges]}
                ></ExperienceForm>
              ))}
              <div>
                <button
                  id="add-exp-btn"
                  onClick={addExperience}
                  data-form-content
                  className={experienceFormDisplay.value.view}
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
