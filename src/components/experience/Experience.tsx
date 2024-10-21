import { ExperienceType } from '../types';

export default function Experience({
  position,
  company,
  dateStart,
  dateEnd,
  roleDesc,
}: ExperienceType) {
  return (
    <div data-exp>
      <div data-exp-position-date>
        <div data-exp-position>{position}</div>
        <div data-exp-date>
          {dateStart}- {dateEnd}
        </div>
      </div>
      <div data-exp-company>{company}</div>
      <div data-exp-desc>{roleDesc}</div>
    </div>
  );
}
