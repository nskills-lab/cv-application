import { ExperienceType, Props } from '../types';

export function ExperienceForm({
  values,
  display,
  onChange,
}: Props<ExperienceType>) {
  const [handleExpEdit, deleteExperience] = onChange;
  console.log(values);
  return (
    <div data-exp-num={values.id} data-form-content className={display.view}>
      <label htmlFor="jobPosition">Job Position </label>
      <input
        type="text"
        id="jobPosition"
        data-exp-item="jobPosition"
        value={values.jobPosition}
        onChange={handleExpEdit}
      />

      <label htmlFor="company">Company</label>
      <input
        type="text"
        id="company"
        data-exp-item="company"
        value={values.company}
        onChange={handleExpEdit}
      />

      <label htmlFor="dateStartExpp">Start </label>
      <input
        type="month"
        id="dateStartExp"
        name="dateStartExp"
        data-exp-item="dateStartExp"
        value={values.dateStartExp}
        onChange={handleExpEdit}
      />

      <label htmlFor="dateEndExp">End </label>
      <input
        type="month"
        id="dateEndExp"
        name="dateEndExp"
        data-exp-item="dateEndExp"
        min="1900-01"
        max="2100-12"
        value={values.dateEndExp}
        onChange={handleExpEdit}
      />
      <div id="exp-current-parent">
        <label htmlFor="date-end-exp-current">
          I'm currently working here{' '}
        </label>
        <input
          type="checkbox"
          id="date-end-exp-current"
          onChange={handleExpEdit}
        />
      </div>

      <label htmlFor="roleDesc">Responsibilities </label>
      <textarea
        id="roleDesc"
        data-exp-item="roleDesc"
        maxLength={500}
        cols={50}
        rows={10}
        value={values.roleDesc}
        onChange={handleExpEdit}
      />
      <br />
      <div>
        {' '}
        <button id="del-exp-btn" onClick={deleteExperience}>
          Delete
        </button>
      </div>
      <br />
    </div>
  );
}
