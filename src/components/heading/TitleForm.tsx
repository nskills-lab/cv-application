import { HandleFunction, Title } from '../types';

export default function TitleForm(title: Title, onChange: HandleFunction) {
  return (
    <form data-form="title-form">
      <fieldset data-fieldset="title">
        <legend>Title</legend>
        <label htmlFor="full_name">Full Name </label>
        <input
          type="text"
          id="full_name"
          value={title.name}
          onChange={onChange}
        />

        <label htmlFor="position">Position </label>
        <input
          type="text"
          id="position"
          value={title.titlePosition}
          onChange={onChange}
        />
      </fieldset>
    </form>
  );
}
