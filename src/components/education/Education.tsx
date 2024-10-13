export type EducationType = {
  degree: string;
  institute: string;
  dateStart: number | string;
  dateEnd: number;
};
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
