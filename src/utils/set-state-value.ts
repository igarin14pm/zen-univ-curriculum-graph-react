import { type Dispatch, type SetStateAction } from 'react';

export type SetStateValue<T> = [
  state: T,
  setState: Dispatch<SetStateAction<T>>
];
