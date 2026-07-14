import { type Dispatch, type SetStateAction } from 'react';

export type UseStateValue<T> = [
  state: T,
  setState: Dispatch<SetStateAction<T>>
];
