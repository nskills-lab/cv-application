import { useState } from 'react';
import defaultExperience from '../data/default.json';
export default function Experience() {
  const [date, setDates] = useState('Feb 2022 - Present');
  const [company, setCompany] = useState('Janx Spirit');
  const [address, setAddress] = useState(
    '123 Main st, Nowhere, Anywhere 98765'
  );
  const [position, setPosition] = useState('Inventor');
  const [roleDesc, setDesc] = useState(
    'Zaphod Beeblebrox, adventurer, ex-hippie, good-timer (crook? quite possibly), manic self-publicist, terrible bad at personal relationships, often thought to be completely out to lunch.'
  );

  return (
    <div id="experience-container">
      <span id="exp-section-title">Experience</span>
      <div className="divider"></div>
      <div id="experience-content">
        <div data-exp>
          <div data-exp-date>{date}</div>
          <div data-exp-company>
            {company} | {address}
            <div data-exp-position>{position}</div>
          </div>
          <div data-exp-desc>{roleDesc}</div>
        </div>
        <br />
        <br />
        <div data-exp>
          <div data-exp-date>{date}</div>
          <div data-exp-company>
            {company} | {address}
          </div>
          <div data-exp-position>{position}</div>
          <div data-exp-desc>{roleDesc}</div>
        </div>
      </div>
    </div>
  );
}
