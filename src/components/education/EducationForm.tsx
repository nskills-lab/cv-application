export default function EducationForm({
  degree,
  institution,
  dateStart,
  dateEnd,
  onChange,
}) {
  return (
    <>
      <label htmlFor="degree">Field of Study </label>
      <input type="text" id="degree" value={degree} onChange={onChange} />

      <label htmlFor="institution">Institution </label>
      <input
        type="text"
        id="institution"
        value={institution}
        onChange={onChange}
      />

      <label htmlFor="date-start">Start </label>
      <input
        type="number"
        id="date-start"
        min={1900}
        max={2900}
        step={1}
        value={dateStart}
        onChange={onChange}
      />

      <label htmlFor="date-end">End </label>
      <input
        type="number"
        id="date-end"
        min={1900}
        max={2900}
        step={1}
        value={dateEnd}
        onChange={onChange}
      />
      <br />
    </>
  );
}
