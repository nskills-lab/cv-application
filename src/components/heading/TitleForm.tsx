import { Props, Title } from '../types';

export default function TitleForm({ values, onChange }: Props<Title>) {
  return (
    <form data-form="title-form">
      <fieldset data-fieldset="title">
        <legend>Title</legend>
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
      </fieldset>
    </form>
  );
}
