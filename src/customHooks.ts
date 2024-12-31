import { useRef, useState } from 'react';

export function useDisplayRef() {
  return useRef([
    { view: 'expanded', toggle: '▼' },
    { view: 'collapsed', toggle: '▲' },
  ]);
}

export function useToggle(initialValue: { view: string; toggle: string }) {
  const [value, setValue] = useState(initialValue);
  const variations = useDisplayRef();
  const handleClick = (e) => {
    e.preventDefault();
    const target = variations.current.find((display) => {
      return display.view !== value.view;
    });
    setValue(target!);
  };

  return {
    value,
    onClick: handleClick,
  };
}
