import phoneIcon from '../../styles/assets/icons/icons8-phone-24.png';
import emailIcon from '../../styles/assets/icons/icons8-email-24.png';
import { Contacts } from '../types';

export default function ContactsSection({ phone, email }: Contacts) {
  return (
    <div id="contact-info">
      <ul>
        <li id="phone">
          <img src={phoneIcon} alt="" />
          {phone}
        </li>
        <li id="email">
          <img src={emailIcon} alt="" />
          {email}
        </li>
      </ul>
    </div>
  );
}
