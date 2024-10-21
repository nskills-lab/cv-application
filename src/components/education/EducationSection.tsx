import { Children } from '../types';

export default function EducationSection(education: Children) {
  return (
    <div id="education">
      <span id="edu-section-title">Education</span>
      <div className="divider"></div>
      <>{education}</>
    </div>
  );
}
