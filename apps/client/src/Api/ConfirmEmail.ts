import { useMutation } from 'react-query';
import { api, ErrorObject } from 'Api';
import { AxiosResponse } from 'axios';

interface ConfirmationReturn {
  message: string;
}

export const ConfirmEmail = (userId: string) =>
  api.post<ConfirmationReturn>(`/sessions/auth/account-verification/${userId}`);

export const useConfirmEmail = (userId: string) =>
  useMutation<AxiosResponse<ConfirmationReturn>, ErrorObject>(
    `/sessions/auth/account-verification/${userId}`,
    () => ConfirmEmail(userId)
  );
