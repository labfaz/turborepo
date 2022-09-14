import { Text } from 'Components/Typography/Text';
import styled, { css } from 'styled-components';
import { Mobile } from 'Utils/breakpoints';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  ${Mobile(css`
    padding: 0 2rem;
  `)}
`;

export const Paragraph = styled(Text)`
  color: var(--background-pink);
  text-align: center;
  font-weight: bold;
  font-size: var(--font-size-medium);
`;
