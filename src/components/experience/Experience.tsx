export type ExperienceType = {
  position: string;
  company: string;
  dates: string;
  roleDesc: string;
};

export default function Experience({
  position,
  company,
  dates,
  roleDesc,
}: ExperienceType) {
  return (
    <div data-exp>
      <div data-exp-position-date>
        <div data-exp-position>{position}</div>
        <div data-exp-date>{dates}</div>
      </div>
      <div data-exp-company>{company}</div>
      <div data-exp-desc>{roleDesc}</div>
    </div>
  );
}
