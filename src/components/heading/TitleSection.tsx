import { Title } from '../types';

export default function TitleSection({ name, position }: Title) {
  return (
    <div id="title">
      <div id="title-full-name">{name}</div>
      <div id="title-position">{position}</div>
    </div>
  );
}
