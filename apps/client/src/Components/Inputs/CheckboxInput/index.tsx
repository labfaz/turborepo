import React, { FC } from 'react';

import { Container, Input } from './style';

export interface InputProps {
  label?: string;
  placeholder?: string;
  name: string;
  type?: string;
  width?: number;
  height?: number;
  value?: string;
  text?: string;
  inputMask?: string;
  inputRightSide?: boolean;
  children?: React.ReactNode;
}

export const CheckboxInput: FC<InputProps> = ({
  label,
  type,
  value,
  children,
  ...props
}) => {
  return (
    <Container>
      <Input type={type || 'checkbox'} id={value} {...props} value={value} />

      <div className="checkbox_input"></div>

      <label htmlFor={value}>{children ? children : label}</label>
    </Container>
  );
};
