export type Title = {
  name: string;
  titlePosition: string;
};
export default function TitleSection({ name, titlePosition }: Title) {
  return (
    <div id="title">
      <div id="title-full-name">{name}</div>
      <div id="title-position">{titlePosition}</div>
    </div>
  );
}
