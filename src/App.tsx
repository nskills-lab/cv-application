import './styles/normalize.css';
import './styles/App.css';
import AppHeader from './components/AppHeader';
import { useReducer } from 'react';
import example from './data/example-resume.json';
import Resume from './components/Resume';
import TitleForm from './components/heading/TitleForm';
import ContactsForm from './components/contacts/ContactsForm';
import EducationForm from './components/education/EducationForm';
import { ExperienceForm } from './components/experience/ExperienceForm';
import { ExperienceType, ACTIONS } from './components/types';
import { useDisplayRef, useToggle } from './customHooks';

function resumeInputsReducer(state, action) {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case ACTIONS.EDIT: {
      return {
        ...state,
        ...{
          [action.key]: { ...state[action.key], ...action.payload },
        },
      };
    }

    case ACTIONS.DELETE: {
      return {
        ...state,
        ...{
          [action.key]: state[action.key].filter(
            (item: ExperienceType) => item.id !== action.payload.id
          ),
        },
      };
    }

    case ACTIONS.ADD: {
      return {
        ...state,
        ...{
          [action.key]: [...state[action.key], ...action.payload],
        },
      };
    }

    case ACTIONS.EXP_EDIT: {
      const updated = state[action.key].map((item: ExperienceType) => {
        if (item.id === action.id) {
          const updatedObj = { ...item, ...action.payload };
          console.log(updatedObj);
          return updatedObj;
        }
        return item;
      });

      const newPayload = {
        ...state,
        ...{
          [action.key]: updated,
        },
      };

      console.log(newPayload);
      return newPayload;
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

  function handleEdit(e) {
    const form = e.target.form[0].dataset.fieldset;
    dispatch({
      type: ACTIONS.EDIT,
      key: [form],
      payload: {
        [e.target.id]: e.target.value,
      },
    });
  }

  function handleAdd(e) {
    e.preventDefault();
    const form = e.target.form[0].dataset.fieldset;
    console.log(resumeInputs.experience[resumeInputs.experience.length - 1]);
    const next = resumeInputs.experience.length
      ? resumeInputs.experience[resumeInputs.experience.length - 1].id + 1
      : 0;

    if (next > 2) return;
    const experienceNew: ExperienceType = {
      id: next,
      jobPosition: '',
      company: '',
      dateStartExp: '',
      dateEndExp: '',
      roleDesc: '',
    };
    dispatch({
      type: ACTIONS.ADD,
      key: [form],
      payload: [experienceNew],
    });
  }

  function handleDelete(e) {
    e.preventDefault();
    const form = e.target.form[0].dataset.fieldset;
    const targetExp = e.target.closest('div[data-exp-num]');
    const targetExperienceId = parseInt(targetExp.dataset.expNum);
    dispatch({
      type: ACTIONS.DELETE,
      key: [form],
      payload: {
        id: targetExperienceId,
      },
    });
  }

  function handleExpEdit(e) {
    e.preventDefault();
    const form = e.target.form[0].dataset.fieldset;
    const targetExp = e.target.closest('div[data-exp-num]');
    console.log(targetExp);
    const targetExperienceId = parseInt(targetExp.dataset.expNum);
    console.log(e.target);

    dispatch({
      type: ACTIONS.EXP_EDIT,
      key: [form],
      id: targetExperienceId,
      payload: {
        [e.target.id]: e.target.value,
      },
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
              {resumeInputs.experience.map((item: ExperienceType) => (
                <ExperienceForm
                  key={item.id}
                  display={experienceFormDisplay.value}
                  values={item}
                  onChange={[handleExpEdit, handleDelete]}
                ></ExperienceForm>
              ))}
              <div>
                <button
                  id="add-exp-btn"
                  onClick={handleAdd}
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
          experiences={resumeInputs.experience}
        ></Resume>
      </div>
    </>
  );
}

export default App;
