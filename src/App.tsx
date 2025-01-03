import './styles/normalize.css';
import './styles/App.css';
import AppHeader from './components/AppHeader';
import { createContext, useReducer } from 'react';
import example from './data/example-resume.json';
import Resume from './components/resume/Resume';
import { ExperienceType, ACTIONS } from './components/types';
import { useDisplayRef, useToggle } from './customHooks';
import { ResumeForm } from './components/resume/ResumeForm';

export const ResumeFormContext = createContext({});

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
        <ResumeFormContext.Provider
          value={{
            resumeInputs,
            handleEdit,
            handleAdd,
            handleDelete,
            handleExpEdit,
            titleFormDisplay,
            contactFormDisplay,
            experienceFormDisplay,
            educationFormDisplay,
          }}
        >
          <ResumeForm></ResumeForm>
        </ResumeFormContext.Provider>
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
