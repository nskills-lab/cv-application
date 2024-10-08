export default function ExperienceSection({ children }) {
  return (
    <div id="experience-container">
      <span id="exp-section-title">Experience</span>
      <div className="divider"></div>
      <div id="experience-content">
        <>{children}</>
        <br />
        <br />
      </div>
    </div>
  );
}
