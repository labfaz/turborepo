import React, { FC } from 'react';
import { IoMdInformationCircle } from 'react-icons/io';
import InputMask from 'react-input-mask';
import { useField } from 'formik';

import { Container, Input } from './style';

export interface InputProps {
  label?: string;
  placeholder?: string;
  name: string;
  width?: number;
  height?: number;
  inputMask?: string;
  informationText?: string;
  required?: boolean;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

export const TextInput: FC<InputProps> = ({
  label,
  placeholder,
  width,
  inputMask,
  height,
  required,
  informationText,
  // children,
  ...props
}) => {
  const [inputProps, meta] = useField(props);

  return (
    <Container
      {...props}
      validationError={meta.touched && meta.error ? true : false}
    >
      <label>
        <div className="labelContainer">
          <div className="labelContent">
            {label && (
              <>
                {label}

                {required && <p className="required"> * </p>}

                {informationText && (
                  <>
                    <div className="svgContainer">
                      <IoMdInformationCircle />
                      <p className="information">{informationText}</p>
                    </div>
                  </>
                )}
              </>
            )}
            {meta.touched && meta.error && <span>{meta.error}</span>}
          </div>
        </div>

        <Input>
          {() => (
            <InputMask
              mask={inputMask ? inputMask : ''}
              id={props.name}
              style={{ width: `${width}rem`, height: `${height}rem` }}
              type="text"
              placeholder={placeholder}
              {...inputProps}
            />
          )}
        </Input>
      </label>
    </Container>
  );
};
