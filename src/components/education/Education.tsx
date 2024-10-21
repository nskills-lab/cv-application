import { EducationType } from '../types';

export default function Education({
  degree,
  institute,
  dateStart,
  dateEnd,
}: EducationType) {
  return (
    <div data-edu="1">
      <div data-edu-degree-name>{degree}</div>
      <div data-edu-institute-name>{institute}</div>
      <div data-edu-years-of-study>
        {dateStart} - {dateEnd}
      </div>
    </div>
  );
}
