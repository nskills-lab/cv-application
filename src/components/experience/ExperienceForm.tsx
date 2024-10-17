import { useState } from 'react';

export function ExperienceForm({ keyValue, experience, onChange }) {
  return (
    <>
      <label htmlFor="job-position" key={keyValue}>
        Job Position{' '}
      </label>
      <input
        type="text"
        id="job-position"
        value={experience.position}
        onChange={onChange}
      />

      <label htmlFor="company">Company</label>
      <input
        type="text"
        id="company"
        value={experience.company}
        onChange={onChange}
      />

      <label htmlFor="date-start-exp">Start </label>
      <input
        type="month"
        id="date-start-exp"
        name="date-start-exp"
        value={experience.dateStart}
        onChange={onChange}
      />

      <label htmlFor="date-end-exp">End </label>
      <input
        type="month"
        id="date-end-exp"
        name="date-end-exp"
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
    </>
  );
}
