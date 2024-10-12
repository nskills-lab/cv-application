import TitleForm from './heading/TitleForm';
export default function Form({ title, handleTitleChanges }) {
  return (
    <div id="resume-form-container">
      <TitleForm
        name={title.name}
        titlePosition={title.titlePosition}
        onChange={handleTitleChanges}
      ></TitleForm>
      <form data-form="contact-form">
        <fieldset data-fieldset="contact">
          <legend>Contact Info</legend>

          <label htmlFor="phone">Phone </label>
          <input type="phone" id="phone" />

          <label htmlFor="email">Email </label>
          <input type="email" id="email" />
        </fieldset>
      </form>
      <form data-form="education-form">
        <fieldset data-fieldset="education">
          <legend>Educational Background </legend>

          <label htmlFor="degree">Field of Study </label>
          <input type="text" id="degree" />

          <label htmlFor="institution">Institution </label>
          <input type="text" id="institution" />

          <label htmlFor="date-start">Start </label>
          <input type="date" id="date-start" />

          <label htmlFor="date-end">End </label>
          <input type="date" id="date-end" />
          <br />
          <div>
            <button>Add</button>
            <button>Delete</button>
          </div>
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
  );
}
