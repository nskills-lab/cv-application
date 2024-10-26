import { ReactNode } from 'react';

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

export type Title = {
  name: string;
  titlePosition: string;
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
  onChange: HandleFunction;
};
