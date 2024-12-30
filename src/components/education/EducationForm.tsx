import { EducationType, Props } from '../types';

export default function EducationForm({
  values,
  display,
  onChange,
}: Props<EducationType>) {
  const [
    degreeOnChange,
    instituteOnChange,
    dateStartOnChange,
    dateEndOnChange,
    formDisplayOnClick,
  ] = onChange;
  return (
    <form data-form="education-form">
      <fieldset data-fieldset="education">
        <div data-form-header>
          <span data-legend="edu">Educational Background</span>
          <button data-toggle onClick={formDisplayOnClick}>
            {display.toggle}
          </button>
        </div>
        <div data-form-content className={display.view}>
          <label htmlFor="degree">Field of Study </label>
          <input
            type="text"
            id="degree"
            value={values.degree}
            onChange={degreeOnChange}
          />

          <label htmlFor="institution">Institution </label>
          <input
            type="text"
            id="institution"
            value={values.institute}
            onChange={instituteOnChange}
          />

          <label htmlFor="date-start">Start </label>
          <input
            type="number"
            id="date-start"
            min={1900}
            max={2900}
            step={1}
            value={values.dateStart}
            onChange={dateStartOnChange}
          />

          <label htmlFor="date-end">End </label>
          <input
            type="number"
            id="date-end"
            min={1900}
            max={2900}
            step={1}
            value={values.dateEnd}
            onChange={dateEndOnChange}
          />
          <br />
        </div>
      </fieldset>
    </form>
  );
}
