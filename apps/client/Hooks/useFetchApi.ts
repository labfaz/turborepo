import { QueryFunction, useQuery, UseQueryOptions } from 'react-query';
import { ErrorObject } from 'Api';
import { AxiosError } from 'axios';

type erroredFetch<T> = {
  error: T;
  data: undefined;
  isLoading: false;
  status: 'error';
};

type loadingFetch = {
  error: null;
  data: undefined;
  isLoading: true;
  status: 'loading';
};

type successfulFetch<T> = {
  error: null;
  data: T;
  isLoading: false;
  status: 'success';
};

export type fetchHookReturn<D, E> =
  | erroredFetch<E>
  | loadingFetch
  | successfulFetch<D>;
type DefaultError = AxiosError<ErrorObject>;

export function useFetchApi<D, E = DefaultError>(
  key: string,
  fetcher: QueryFunction<D, string>,
  options?: UseQueryOptions<D, E, D, typeof key>
) {
  return useQuery<D, E, D, typeof key>(
    key,
    fetcher,
    options
  ) as fetchHookReturn<D, E>;
}

export default useFetchApi;
