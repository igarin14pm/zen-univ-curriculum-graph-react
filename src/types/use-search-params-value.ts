import type { SetURLSearchParams } from 'react-router';

export type UseSearchParamsValue = [
  searchParams: URLSearchParams,
  setSearchParams: SetURLSearchParams
];
