export type EducationType = {
  degree: string;
  institute: string;
  yearsOfStudy: string;
};
export default function Education({
  degree,
  institute,
  yearsOfStudy,
}: EducationType) {
  return (
    <div>
      <div data-edu-degree-name>{degree}</div>
      <div data-edu-institute-name>{institute}</div>
      <div data-edu-years-of-study>{yearsOfStudy}</div>
    </div>
  );
}
