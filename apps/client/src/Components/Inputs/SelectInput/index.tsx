import React, { FC, Fragment } from 'react';
import { MdArrowDropDownCircle } from 'react-icons/md';
import { useField } from 'formik';

import { Container, Input } from './style';

interface OptionsProps {
  value: string;
  label: string;
}

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  name: string;
  width?: number;
  height?: number;
  inputMask?: string;
  required?: boolean;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;

  options: OptionsProps[];
}

export const SelectInput: FC<InputProps> = ({
  label,
  // placeholder,
  width,
  // value,
  // inputMask,
  height,
  options,
  required,
  ...props
}) => {
  const [inputProps, meta] = useField(props);

  const selected = document.getElementById(props.name) as HTMLSelectElement;
  if (selected !== null && selected.selectedIndex !== 0) {
    selected.style.color = 'white';
  }

  return (
    <Container
      {...props}
      validationError={meta.touched && meta.error ? true : false}
    >
      {label && (
        <div className="labelContainer">
          <div className="labelContent">
            <label htmlFor={props.name}>
              {label} {required && <p className="required"> * </p>}
              {meta.touched && meta.error && (
                <span className="errorMessage">
                  {meta.touched && meta.error}
                </span>
              )}
            </label>
          </div>
        </div>
      )}

      <Input>
        {() => (
          <select
            id={props.name}
            style={{ width: `${width}rem`, height: `${height}rem` }}
            {...inputProps}
          >
            <option value="" label="Selecione">
              Selecione
            </option>
            {options?.map((option, index) => (
              <Fragment key={index}>
                <option value={option.value} label={option.label}>
                  {option.label}
                </option>
              </Fragment>
            ))}
          </select>
        )}
      </Input>
      <MdArrowDropDownCircle />
    </Container>
  );
};
