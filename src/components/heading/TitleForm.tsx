export default function TitleForm({ name, titlePosition, onChange }) {
  return (
    <form data-form="title-form">
      <fieldset data-fieldset="title">
        <legend>Title</legend>
        <label htmlFor="full_name">Full Name </label>
        <input type="text" id="full_name" value={name} onChange={onChange} />

        <label htmlFor="position">Position </label>
        <input
          type="text"
          id="position"
          value={titlePosition}
          onChange={onChange}
        />
      </fieldset>
    </form>
  );
}
