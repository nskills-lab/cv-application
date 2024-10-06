export default function ResumeForm() {
  return (
    <div id="resume-form-container">
      <form id="resume-form">
        <fieldset id="form-title">
          <legend>Title</legend>

          <label htmlFor="first_name">First Name </label>
          <input type="text" id="first_name" />

          <label htmlFor="last_name">Last Name </label>
          <input type="text" id="last_name" />

          <label htmlFor="position">Position </label>
          <input type="text" id="position" />
        </fieldset>

        <fieldset id="form-contact">
          <legend>Contact Info</legend>

          <label htmlFor="phone">Phone </label>
          <input type="phone" id="phone" />

          <label htmlFor="email">Email </label>
          <input type="email" id="email" />
        </fieldset>

        <fieldset id="form-education">
          <legend>Educational Background </legend>

          <label htmlFor="degree">Field of Study </label>
          <input type="text" id="degree" />

          <label htmlFor="institution">Institution </label>
          <input type="text" id="institution" />

          <label htmlFor="date-start">Start </label>
          <input type="date" id="date-start" />

          <label htmlFor="date-end">End </label>
          <input type="date" id="date-end" />
        </fieldset>

        <fieldset id="form-experience">
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
          <textarea id="job-desc" maxLength={500} />
        </fieldset>
      </form>
    </div>
  );
}
