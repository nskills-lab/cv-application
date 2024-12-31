import { Props, Title } from '../types';

export default function TitleForm({ values, display, onChange }: Props<Title>) {
  const [handleEdit, displayOnClick] = onChange;

  return (
    <form data-form="title-form">
      <fieldset data-fieldset="title">
        <div data-form-header>
          <span data-legend="title">Title</span>
          <button data-toggle onClick={displayOnClick}>
            {display.toggle}
          </button>
        </div>
        <div data-form-content className={display.view}>
          <label htmlFor="name">Full Name </label>
          <input
            type="text"
            id="name"
            value={values.name}
            onChange={handleEdit}
          />
          <label htmlFor="position">Position </label>
          <input
            type="text"
            id="position"
            value={values.position}
            onChange={handleEdit}
          />
        </div>
      </fieldset>
    </form>
  );
}
