export default function ContactsForm({ phone, email, onChange }) {
  return (
    <form data-form="contact-form">
      <fieldset data-fieldset="contact">
        <legend>Contact Info</legend>

        <label htmlFor="phone">Phone </label>
        <input type="phone" id="phone" value={phone} onChange={onChange} />

        <label htmlFor="email">Email </label>
        <input type="email" id="email" value={email} onChange={onChange} />
      </fieldset>
    </form>
  );
}
