import { useState } from 'react';
export default function Title() {
  const [name, setName] = useState('Zaphod Beeblebrox');
  const [title, setTitle] = useState('Ex-Galactic President');

  return (
    <div id="title">
      <div id="title-full-name">{name}</div>
      <div id="title-position">{title}</div>
    </div>
  );
}
