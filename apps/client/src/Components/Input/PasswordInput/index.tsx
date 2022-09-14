import React, { FC } from 'react';
import { useField } from 'formik';

import { Container } from './style';

export interface InputProps {
  label?: string;
  placeholder?: string;
  name: string;
  width?: number;
  height?: number;
  value?: string;
  text?: string;
  inputMask?: string;
  required?: boolean;
}

export const PasswordInput: FC<InputProps> = ({
  label,
  placeholder,
  width,
  // value,
  // inputMask,
  // text,
  height,
  required,
  ...props
}) => {
  const [inputProps, meta] = useField(props);

  return (
    <Container
      {...props}
      validationError={meta.touched && meta.error ? true : false}
    >
      <div className="labelContainer">
        <div className="labelContent">
          <label htmlFor={props.name}>
            {label} {required && <p className="required"> *</p>}
          </label>

          {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
      </div>

      <input
        id={props.name}
        style={{ width: `${width}rem`, height: `${height}rem` }}
        type="password"
        placeholder={placeholder}
        {...inputProps}
      />
    </Container>
  );
};
