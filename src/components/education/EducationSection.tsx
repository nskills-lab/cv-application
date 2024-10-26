import { Children } from '../types';

export default function EducationSection({ children }: Children) {
  return (
    <div id="education">
      <span id="edu-section-title">Education</span>
      <div className="divider"></div>
      <>{children}</>
    </div>
  );
}
