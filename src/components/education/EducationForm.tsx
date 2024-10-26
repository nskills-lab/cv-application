import { EducationType, Props } from '../types';

export default function EducationForm({
  values,
  onChange,
}: Props<EducationType>) {
  return (
    <>
      <label htmlFor="degree">Field of Study </label>
      <input
        type="text"
        id="degree"
        value={values.degree}
        onChange={onChange}
      />

      <label htmlFor="institution">Institution </label>
      <input
        type="text"
        id="institution"
        value={values.institute}
        onChange={onChange}
      />

      <label htmlFor="date-start">Start </label>
      <input
        type="number"
        id="date-start"
        min={1900}
        max={2900}
        step={1}
        value={values.dateStart}
        onChange={onChange}
      />

      <label htmlFor="date-end">End </label>
      <input
        type="number"
        id="date-end"
        min={1900}
        max={2900}
        step={1}
        value={values.dateEnd}
        onChange={onChange}
      />
      <br />
    </>
  );
}
