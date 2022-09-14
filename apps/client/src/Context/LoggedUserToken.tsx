/* eslint-disable @cspell/spellchecker */
import React, { createContext, FC, useContext, useMemo } from 'react';
import { useCurrentUser } from 'Api/Profile';
import useLocalStorage from 'Hooks/useLocalStorage';
import { debug } from 'Utils/debugger';

export interface IAddress {
  cep: string;
  city: string;
  complement: string;
  neighborhood: string;
  number: number;
  residency: string;
  state: string;
}

export interface IContact {
  facebook: string;
  instagram: string;
  linkedin: string;
  tiktok: string;
  twitter: string;
  whatsapp: string;
  youtube: string;
}

export interface ITechnicalIdioms {
  name: string;
}

export interface ITechnical {
  ceac: string;
  cnpj: string;
  cnpj_type: string;
  drt: string;
  is_ceac: boolean;
  is_cnpj: boolean;
  is_drt: boolean;
  name_enterprise: string;
  profession: string;
  formation: string;
  idiom: ITechnicalIdioms[];
  area: ITechnicalArea[];
}

export interface ITechnicalAreaCertificate {
  name: string;
}
export interface ITechnicalArea {
  describe: string;
  name: string;
  started_year: string;
  technical_formation: string;
  certificate: ITechnicalAreaCertificate[];
}

export enum GenderSpecific {
  CIS = 'cisgênero',
  TRANS = 'transgênero',
  NBIN = 'não-binário',
  NONE = 'prefiro não responder',
}

export interface IArtist {
  name: string;
  artistic_name: string;
  social_name: string;
  show_name: string;
  birthday: Date;
  photo_url: string;
  curriculum: string;
  cpf: string;
  rg: string;
  sexual_orientation: string;
  gender: string;
  race: string;
  gender_specifics?: GenderSpecific;
  expedition_department: string;
  address: IAddress;
  contact: IContact;
  technical: ITechnical;
  medicalReport?: string;
  accessibility_resources_description?: string;
}

export interface IDeficiency {
  name: string;
}

export interface User {
  id: string;
  email: string;
  isVerified: boolean;
  banned: boolean;
  active: boolean;
  updated_at: Date;
  created_at: Date;
  artist: IArtist;
  deficiencies: IDeficiency[];
}

type notLoggedIn = {
  setToken: (t?: string) => void;
  token: undefined;
  isLoggedIn: false;
};

type loggedIn = {
  setToken: (t?: string) => void;
  token: string;
  isLoggedIn: true;
};

type TCurrentUserProvider = { children?: React.ReactNode };

export type CurrentUserToken = notLoggedIn | loggedIn;

export const CurrentUserTokenContext = createContext<CurrentUserToken>(
  {} as CurrentUserToken
);
export const useCurrentUserToken = () => useContext(CurrentUserTokenContext);

export const CurrentUserProvider: FC<TCurrentUserProvider> = ({ children }) => {
  const [token, setToken] = useLocalStorage<string | undefined>(
    'token',
    undefined
  );

  const currentUserValue = useMemo<CurrentUserToken>(() => {
    // console.log("updating")
    return {
      token,
      setToken,
      isLoggedIn: !!token,
    } as CurrentUserToken;
  }, [token, setToken]);

  if (process.env.NODE_ENV === 'development')
    debug('Logged User Token', 'user context.' + currentUserValue);

  return (
    <CurrentUserTokenContext.Provider value={currentUserValue}>
      {!token ? (
        children
      ) : (
        <UserUpdateChecker token={token}>{children}</UserUpdateChecker>
      )}
    </CurrentUserTokenContext.Provider>
  );
};

export const UserUpdateChecker: FC<{
  token: string;
  children: React.ReactNode;
}> = ({ token: contextToken, children }) => {
  // call API
  const currentlyLoggedUser = useCurrentUser(contextToken);
  const { setToken } = useCurrentUserToken();

  if (currentlyLoggedUser.error?.response?.data.code === 401) {
    // console.log("user no longer logged. removing token")
    setToken(undefined);
  }

  return <>{children}</>;
};
