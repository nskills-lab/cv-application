import { EducationType, Props } from '../types';

export default function EducationForm({
  values,
  display,
  onChange,
}: Props<EducationType>) {
  const [handleEdit, formDisplayOnClick] = onChange;
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
            onChange={handleEdit}
          />

          <label htmlFor="institute">Institution </label>
          <input
            type="text"
            id="institute"
            value={values.institute}
            onChange={handleEdit}
          />

          <label htmlFor="dateStart">Start </label>
          <input
            type="number"
            id="dateStart"
            min={1900}
            max={2900}
            step={1}
            value={values.dateStart}
            onChange={handleEdit}
          />

          <label htmlFor="dateEnd">End </label>
          <input
            type="number"
            id="dateEnd"
            min={1900}
            max={2900}
            step={1}
            value={values.dateEnd}
            onChange={handleEdit}
          />
          <br />
        </div>
      </fieldset>
    </form>
  );
}
