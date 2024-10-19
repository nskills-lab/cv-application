import { useState } from 'react';

export function ExperienceForm({ experience, onChange }) {
  return (
    <div data-exp-num={experience.id}>
      <label htmlFor="job-position">Job Position </label>
      <input
        type="text"
        id="job-position"
        data-exp-item="position"
        value={experience.position}
        onChange={onChange}
      />

      <label htmlFor="company">Company</label>
      <input
        type="text"
        id="company"
        data-exp-item="company"
        value={experience.company}
        onChange={onChange}
      />

      <label htmlFor="date-start-exp">Start </label>
      <input
        type="month"
        id="date-start-exp"
        name="date-start-exp"
        data-exp-item="dateStart"
        value={experience.dateStart}
        onChange={onChange}
      />

      <label htmlFor="date-end-exp">End </label>
      <input
        type="month"
        id="date-end-exp"
        name="date-end-exp"
        data-exp-item="dateEnd"
        min="1900-01"
        max="2100-12"
        value={experience.dateEnd}
        onChange={onChange}
      />
      <div id="exp-current-parent">
        <label htmlFor="date-end-exp-current">
          I'm currently working here{' '}
        </label>
        <input type="checkbox" id="date-end-exp-current" onChange={onChange} />
      </div>

      <label htmlFor="job-desc">Responsibilities </label>
      <textarea
        id="job-desc"
        data-exp-item="roleDesc"
        maxLength={500}
        cols={50}
        rows={10}
        value={experience.roleDesc}
        onChange={onChange}
      />
      <br />
      <div>
        {' '}
        <button id="del-exp-btn">Delete</button>
      </div>
      <br />
    </div>
  );
}
