import React, { FC } from 'react';
import Web from 'Components/SkipNav/Web';
import useMobile from 'Hooks/useMobile';

type TSkipNavProps = {
  setIsContrasted?: (newValue: boolean | undefined) => void;
};

export const SkipNav: FC<TSkipNavProps> = (props) => {
  if (!useMobile())
    return <Web updateParentContrasted={props.setIsContrasted} />;
  else return <></>;
};

export default SkipNav;
