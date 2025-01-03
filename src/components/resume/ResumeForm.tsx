import { useContext } from 'react';
import { ResumeFormContext } from '../../App';
import ContactsForm from '../contacts/ContactsForm';
import EducationForm from '../education/EducationForm';
import { ExperienceForm } from '../experience/ExperienceForm';
import TitleForm from '../heading/TitleForm';
import { ExperienceType } from '../types';

export function ResumeForm() {
  const {
    resumeInputs,
    handleEdit,
    handleAdd,
    handleDelete,
    handleExpEdit,
    titleFormDisplay,
    contactFormDisplay,
    experienceFormDisplay,
    educationFormDisplay,
  } = useContext(ResumeFormContext);

  return (
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
  );
}
