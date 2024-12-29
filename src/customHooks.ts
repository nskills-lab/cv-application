import { useRef, useState } from 'react';

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
  const displayVariationRef = useRef([
    { view: 'expanded', toggle: '▼' },
    { view: 'collapsed', toggle: '▲' },
  ]);
  const [value, setValue] = useState(initialValue);
  const handleClick = (e) => {
    const target = displayVariationRef.current.find((display) => {
      return display.view !== value.view;
    });
    console.log(target);
    setValue(target);
  };

  return {
    value,
    onClick: handleClick,
  };
}
