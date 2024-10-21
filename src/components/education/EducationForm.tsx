import { EducationType, HandleFunction } from '../types';

export default function EducationForm(
  education: EducationType,
  onChange: HandleFunction
) {
  return (
    <>
      <label htmlFor="degree">Field of Study </label>
      <input
        type="text"
        id="degree"
        value={education.degree}
        onChange={onChange}
      />

      <label htmlFor="institution">Institution </label>
      <input
        type="text"
        id="institution"
        value={education.institute}
        onChange={onChange}
      />

      <label htmlFor="date-start">Start </label>
      <input
        type="number"
        id="date-start"
        min={1900}
        max={2900}
        step={1}
        value={education.dateStart}
        onChange={onChange}
      />

      <label htmlFor="date-end">End </label>
      <input
        type="number"
        id="date-end"
        min={1900}
        max={2900}
        step={1}
        value={education.dateEnd}
        onChange={onChange}
      />
      <br />
    </>
  );
}
