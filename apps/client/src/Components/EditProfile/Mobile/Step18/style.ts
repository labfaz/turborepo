import { CheckboxInput } from 'Components/Inputs/CheckboxInput';
import { PasswordInput } from 'Components/Inputs/PasswordInput';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;

  scroll-snap-align: start;
`;

export const Content = styled.div`
  margin-top: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const AvatarInput = styled.div`
  width: 196px;
  height: 196px;
  border-radius: 50%;
  border: 3px solid #fc0061;
  background-color: #a3a3a3;
  margin-bottom: 1.94rem;

  img {
    width: 190px;
    height: 190px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const Input = styled(PasswordInput)`
  margin-bottom: 0;

  input {
    width: 14.5rem;
  }
`;

export const Button = styled.button`
  border: 0;
  background-color: #e5e5e5;
  color: #000000;
  width: 14.5rem;
  height: 2.5rem;
  cursor: pointer;

  font-size: var(--font-size-large);
  font-weight: 700;

  margin-bottom: 2rem;
`;

export const InputCheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;

  width: 14.5rem;

  position: relative;

  label {
    font-weight: 600;
    color: #fafafa;
    font-size: var(--font-size-small);

    line-height: 18px;
  }

  a {
    font-weight: 600;
    font-size: var(--font-size-small);
    color: #ffffff;
  }

  .errorMessage {
    color: red;
    position: absolute;
    left: 2.4rem;
    top: 2.8rem;

    font-size: var(--font-size-small);
  }
`;

export const InputCheckbox = styled(CheckboxInput)``;

export const InputTextContainer = styled.div`
  margin-bottom: 2rem;
`;
