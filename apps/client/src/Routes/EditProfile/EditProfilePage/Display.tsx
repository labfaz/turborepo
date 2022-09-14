import React, { FC } from 'react';
import { EditProfile } from 'Components/EditProfile';
import Wireframe from 'Components/Wireframe';
import { User } from 'Context/LoggedUserToken';
import useMobile from 'Hooks/useMobile';

import { LoginContainer } from './style';

interface DisplayProps {
  button_type: 'submit' | 'button' | 'reset';
  data: User;
  token: string;
}

export const Display: FC<DisplayProps> = ({ button_type, data, token }) => {
  return (
    <>
      {useMobile() ? (
        <>
          <LoginContainer>
            <EditProfile
              button_type={button_type ? button_type : 'submit'}
              data={data}
              token={token}
            />
          </LoginContainer>
        </>
      ) : (
        <Wireframe>
          <LoginContainer>
            <EditProfile
              button_type={button_type ? button_type : 'submit'}
              data={data}
              token={token}
            />
          </LoginContainer>
        </Wireframe>
      )}
    </>
  );
};

export default Display;
