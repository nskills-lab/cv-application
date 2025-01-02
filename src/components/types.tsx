import { ReactNode } from 'react';

export type Title = {
  name: string;
  position: string;
};

export type Contacts = {
  phone: string;
  email: string;
};

export type EducationType = {
  degree: string;
  institute: string;
  dateStart: number | string;
  dateEnd: number;
};

export type ExperienceType = {
  id: number;
  position: string;
  company: string;
  dateStart: string;
  dateEnd: string;
  roleDesc: string;
};

export type Children = {
  children: ReactNode;
};

export type Events =
  | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  | React.MouseEvent<HTMLButtonElement | MouseEvent>
  | React.FormEvent<HTMLInputElement>
  | EventTarget
  | null;

export type HandleFunction = (e: Events) => void;

export type ResumeType = {
  title: Title;
  contacts: Contacts;
  education: EducationType;
  experiences: ExperienceType[];
};

export type Props<T> = {
  values: T;
  display: {
    view: string;
    toggle: string;
  };
  onChange: Array<HandleFunction>;
};

export function getValue<T>(obj: T, key: keyof T) {
  return obj[key];
}

export function setValue<T, K extends keyof T>(items: T, key: K, value: T[K]) {
  items[key] = value;
}

export const ACTIONS = {
  EDIT: 'EDIT',
};
