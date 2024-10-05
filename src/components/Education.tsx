import { useState } from 'react';
export default function Education() {
  const [degree, setDegree] = useState('Masters in Confidence Trickster');
  const [institue, setInstitue] = useState('Betelgeusian University');
  const [yearsOfStudy, setYearsOfStudy] = useState('0000 - 0000');
  return (
    <div id="education">
      <span id="edu-section-title">Education</span>
      <div className="divider"></div>
      <div>
        <div data-edu-degree-name>{degree}</div>
        <div data-edu-institute-name>{institue}</div>
        <div data-edu-years-of-study>{yearsOfStudy}</div>
      </div>
    </div>
  );
}
