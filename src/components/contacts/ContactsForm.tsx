import { Contacts, Props } from '../types';

export default function ContactsForm({
  values,
  display,
  onChange,
}: Props<Contacts>) {
  return (
    <form data-form="contact-form">
      <fieldset data-fieldset="contact">
        <div data-form-header>
          <span data-legend="contact">Contact Info</span>
          <button data-toggle onClick={onChange}>
            {display.toggle}
          </button>
        </div>
        <div data-form-content className={display.view}>
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
        </div>
      </fieldset>
    </form>
  );
}
