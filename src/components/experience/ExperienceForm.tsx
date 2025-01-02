import { ExperienceType, Props } from '../types';

export function ExperienceForm({
  values,
  display,
  onChange,
}: Props<ExperienceType>) {
  const [experienceOnChange, deleteExperience] = onChange;
  return (
    <div data-exp-num={values.id} data-form-content className={display.view}>
      <label htmlFor="job-position">Job Position </label>
      <input
        type="text"
        id="job-position"
        data-exp-item="position"
        value={values.position}
        onChange={experienceOnChange}
      />

      <label htmlFor="company">Company</label>
      <input
        type="text"
        id="company"
        data-exp-item="company"
        value={values.company}
        onChange={experienceOnChange}
      />

      <label htmlFor="date-start-exp">Start </label>
      <input
        type="month"
        id="date-start-exp"
        name="date-start-exp"
        data-exp-item="dateStart"
        value={values.dateStart}
        onChange={experienceOnChange}
      />

      <label htmlFor="date-end-exp">End </label>
      <input
        type="month"
        id="date-end-exp"
        name="date-end-exp"
        data-exp-item="dateEnd"
        min="1900-01"
        max="2100-12"
        value={values.dateEnd}
        onChange={experienceOnChange}
      />
      <div id="exp-current-parent">
        <label htmlFor="date-end-exp-current">
          I'm currently working here{' '}
        </label>
        <input
          type="checkbox"
          id="date-end-exp-current"
          onChange={experienceOnChange}
        />
      </div>

      <label htmlFor="job-desc">Responsibilities </label>
      <textarea
        id="job-desc"
        data-exp-item="roleDesc"
        maxLength={500}
        cols={50}
        rows={10}
        value={values.roleDesc}
        onChange={experienceOnChange}
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
