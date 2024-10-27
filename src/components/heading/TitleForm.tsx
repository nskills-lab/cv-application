import { Props, Title } from '../types';

export default function TitleForm({ values, display, onChange }: Props<Title>) {
  return (
    <form data-form="title-form">
      <fieldset data-fieldset="title">
        <div data-form-header>
          <span data-legend="title">Title</span>
          <button data-toggle onClick={onChange}>
            {display.toggle}
          </button>
        </div>
        <div data-form-content className={display.view}>
          <label htmlFor="full_name">Full Name </label>
          <input
            type="text"
            id="full_name"
            value={values.name}
            onChange={onChange}
          />
          <label htmlFor="position">Position </label>
          <input
            type="text"
            id="position"
            value={values.titlePosition}
            onChange={onChange}
          />
        </div>
      </fieldset>
    </form>
  );
}
