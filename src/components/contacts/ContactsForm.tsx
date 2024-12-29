import { Contacts, Props } from '../types';

export default function ContactsForm({
  values,
  display,
  onChange,
}: Props<Contacts>) {
  const [phoneOnChange, emailOnChage, displayOnClick] = onChange;
  return (
    <form data-form="contact-form">
      <fieldset data-fieldset="contact">
        <div data-form-header>
          <span data-legend="contact">Contact Info</span>
          <button data-toggle onClick={displayOnClick}>
            {display.toggle}
          </button>
        </div>
        <div data-form-content className={display.view}>
          <label htmlFor="phone">Phone </label>
          <input
            type="phone"
            id="phone"
            value={values.phone}
            onChange={phoneOnChange}
          />

          <label htmlFor="email">Email </label>
          <input
            type="email"
            id="email"
            value={values.email}
            onChange={emailOnChage}
          />
        </div>
      </fieldset>
    </form>
  );
}
