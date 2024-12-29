import { useRef, useState } from 'react';

export function useDisplayRef() {
  return useRef([
    { view: 'expanded', toggle: '▼' },
    { view: 'collapsed', toggle: '▲' },
  ]);
}

export function useInputValue(initialValue) {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
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
