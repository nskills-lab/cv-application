import type { Education } from '../types/Model';
export default function EducationSection({
  degree,
  institute,
  yearsOfStudy,
}: Education) {
  return (
    <div id="education">
      <span id="edu-section-title">Education</span>
      <div className="divider"></div>
      <div>
        <div data-edu-degree-name>{degree}</div>
        <div data-edu-institute-name>{institute}</div>
        <div data-edu-years-of-study>{yearsOfStudy}</div>
      </div>
    </div>
  );
}
