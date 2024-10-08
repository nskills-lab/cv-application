export default function EducationSection({ children }) {
  return (
    <div id="education">
      <span id="edu-section-title">Education</span>
      <div className="divider"></div>
      <>{children}</>
    </div>
  );
}
