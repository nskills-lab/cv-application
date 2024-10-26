import { Contacts, Props } from '../types';

export default function ContactsForm({ values, onChange }: Props<Contacts>) {
  return (
    <form data-form="contact-form">
      <fieldset data-fieldset="contact">
        <legend>Contact Info</legend>

        <label htmlFor="phone">Phone </label>
        <input
          type="phone"
          id="phone"
          value={values.phone}
          onChange={onChange}
        />

        <label htmlFor="email">Email </label>
        <input
          type="email"
          id="email"
          value={values.email}
          onChange={onChange}
        />
      </fieldset>
    </form>
  );
}
