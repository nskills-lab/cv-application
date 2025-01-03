import { ExperienceType } from '../types';

export default function Experience({
  id,
  jobPosition,
  company,
  dateStartExp,
  dateEndExp,
  roleDesc,
}: ExperienceType) {
  console.log(id);
  return (
    <div data-exp={id}>
      <div data-exp-position-date>
        <div data-exp-position>{jobPosition}</div>
        <div data-exp-date>
          {dateStartExp}- {dateEndExp}
        </div>
      </div>
      <div data-exp-company>{company}</div>
      <div data-exp-desc>{roleDesc}</div>
    </div>
  );
}
