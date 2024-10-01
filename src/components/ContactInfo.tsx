import { useState } from 'react';
import phoneIcon from '../styles/assets/icons/icons8-phone-24.png';
import emailIcon from '../styles/assets/icons/icons8-email-24.png';
export default function ContactInfo() {
  const [phone, setPhone] = useState('+000 - 000 - 0000');
  const [email, setEmail] = useState('president@galaxy.universe');

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
