import React, { FC, useState } from 'react';
import { IoMdCloudUpload } from 'react-icons/io';
import { useField, useFormikContext } from 'formik';

import { Container, Input, InputFileText } from './style';

interface OptionsProps {
  value: string;
  label: string;
}

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  name: string;
  width?: number;
  height?: number;
  inputMask?: string;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;

  options?: OptionsProps[];
  accept?: string;
}

export const FileInput: FC<InputProps> = ({
  label,
  // placeholder,
  // width,
  value,
  // inputMask,
  // height,
  // options,
  accept,
  ...props
}) => {
  const [, meta] = useField(props);
  const { setFieldValue } = useFormikContext();
  const [fileName, setFile] = useState('');

  const updateLabel = () => {
    const fileInput = document.getElementById('file') as HTMLInputElement;
    if (fileInput && fileInput.files && fileInput.files[0]) {
      setFile(fileInput.files[0].name);
    }
  };
  return (
    <Container
      {...props}
      validationError={meta.touched && meta.error ? true : false}
    >
      <Input>
        {() => (
          <>
            <input
              id="file"
              type="file"
              accept={accept || 'image/*'}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                updateLabel();
                setFieldValue(
                  `${value}`,
                  event.currentTarget.files
                    ? event.currentTarget.files[0]
                    : null
                );
              }}
            />
            <label htmlFor="file" className="fileContent">
              <InputFileText>{fileName || label}</InputFileText>
              {/* <div></div> */}
              <IoMdCloudUpload />
            </label>
          </>
        )}
      </Input>

      {meta.touched && meta.error && <p className="error">{meta.error}</p>}
    </Container>
  );
};
