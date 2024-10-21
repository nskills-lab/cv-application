import { Children } from '../types';

export default function ExperienceSection(children: Children) {
  return (
    <div id="experience-container">
      <span id="exp-section-title">Experience</span>
      <div className="divider"></div>
      <div id="experience-content">
        <>{children}</>
      </div>
    </div>
  );
}
