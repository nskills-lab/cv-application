import { useState } from 'react';
export default function Education() {
  const [degree, setDegree] = useState('Masters in Confidence Trickster');
  const [institue, setInstitue] = useState('Betelgeusian University');
  const [yearsOfStudy, setYearsOfStudy] = useState('0000 - 0000');
  return (
    <div id="education">
      <span id="edu-section-title">Education</span>
      <div className="divider"></div>
      <div id="degree-name">{degree}</div>
      <div id="institute-name">{institue}</div>
      <div id="years-of-study">{yearsOfStudy}</div>
    </div>
  );
}
