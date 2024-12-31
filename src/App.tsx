import './styles/normalize.css';
import './styles/App.css';
import AppHeader from './components/AppHeader';
import { useState, useReducer } from 'react';
import example from './data/example-resume.json';
import Resume from './components/Resume';
import TitleForm from './components/heading/TitleForm';
import ContactsForm from './components/contacts/ContactsForm';
import EducationForm from './components/education/EducationForm';
import { ExperienceForm } from './components/experience/ExperienceForm';
import { ExperienceType, setValue, ACTIONS } from './components/types';
import { useDisplayRef, useToggle } from './customHooks';

function resumeInputsReducer(state, action) {
  switch (action.type) {
    case ACTIONS.EDIT: {
      return {
        ...state,
        ...{
          [action.key]: { ...state[action.key], ...action.payload },
        },
      };
    }

    default:
      return state;
  }
}

function App() {
  const [resumeInputs, dispatch] = useReducer(resumeInputsReducer, example);
  const expandedView = useDisplayRef().current[0];
  const titleFormDisplay = useToggle(expandedView);
  const contactFormDisplay = useToggle(expandedView);
  const educationFormDisplay = useToggle(expandedView);
  const experienceFormDisplay = useToggle(expandedView);
  const [expItems, setExpItems] = useState<ExperienceType[]>([
    ...example.experience,
  ]);

  function handleEdit(e) {
    const form = e.target.form[0].dataset.fieldset;
    dispatch({
      type: 'EDIT',
      key: [form],
      payload: {
        [e.target.id]: e.target.value,
      },
    });
  }

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
    const targetExp = e.target.closest('div[data-exp-num]');
    const targetExperienceId = parseInt(targetExp.dataset.expNum);

    // Update target experience end date
    if (e.target.matches('#date-end-exp-current')) {
      const updatedExp = [...expItems].map((item: ExperienceType) => {
        if (item.id === targetExperienceId) {
          const isPresent = e.target.checked;
          const checkboxEl = targetExp.querySelector(
            '#date-end-exp'
          ) as HTMLInputElement;

          if (isPresent) {
            item.dateEnd = 'Present';
          }
          checkboxEl.disabled = isPresent;
        }
        return item;
      });
      setExpItems(updatedExp);

      return;
    }
    e.preventDefault();

    // Delete target experience
    if (e.target.matches('#del-exp-btn')) {
      const updatedExp = expItems.filter(
        (item: ExperienceType) => item.id !== targetExperienceId
      );
      setExpItems(updatedExp);
      return;
    }

    // Update target experience
    setExpItems((expItems) => {
      return [...expItems].map((item: ExperienceType) => {
        if (item.id === targetExperienceId) {
          const key: keyof ExperienceType = e.target.dataset.expItem;
          setValue(item, key, e.target.value);
        }

        return item;
      });
    });
  }

  return (
    <>
      <AppHeader></AppHeader>
      <div id="resume-container">
        <div id="resume-form-container">
          <TitleForm
            values={resumeInputs.title}
            display={titleFormDisplay.value}
            onChange={[handleEdit, titleFormDisplay.onClick]}
          ></TitleForm>
          <ContactsForm
            values={resumeInputs.contacts}
            display={contactFormDisplay.value}
            onChange={[handleEdit, contactFormDisplay.onClick]}
          ></ContactsForm>
          <EducationForm
            values={resumeInputs.education}
            display={educationFormDisplay.value}
            onChange={[handleEdit, educationFormDisplay.onClick]}
          ></EducationForm>
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
                  key={item.id}
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
          title={resumeInputs.title}
          contacts={resumeInputs.contacts}
          education={resumeInputs.education}
          experiences={expItems}
        ></Resume>
      </div>
    </>
  );
}

export default App;
