import { Text } from 'Components/Typography/Text';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import { DesktopSmall } from 'Utils/breakpoints';

export const ListsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  margin: auto;
`;

export const Container = styled.div`
  width: 100%;
  background-color: var(--background-green);
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 450px;
  background-color: var(--background-green);
  padding: 50px 97px 0 16px;
  border-radius: 21px 21px 0 0;

  ${DesktopSmall(css`
    height: 400px;
    padding: 50px 57px 0 17px;
  `)}
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 400px;
  border-radius: 21px 21px 0 0;
  filter: drop-shadow(0 0 5px rgba(9, 9, 9, 1));
  object-fit: cover;
  object-position: center;

  ${DesktopSmall(css`
    height: 350px;
  `)}
`;

export const TextContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: var(--background-black);
  padding: 0 80px 0 0;

  ${DesktopSmall(css`
    padding: 0 40px 0 0;
  `)}
`;

export const TextSubContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: var(--background-green);
  padding: 0 15px 15px 15px;
  border-radius: 0 0 15px 15px;
`;

export const TextBackground = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  border-radius: 0 0 15px 15px;
  filter: drop-shadow(0 0 3px rgba(250, 250, 250, 1));
  border: 2px solid var(--background-green);
  border-top: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 0.8em;
`;

export const SubscribeText = styled(Text)`
  font-size: var(--font-size-title-short);
  font-weight: bold;
  margin: 1.2em 0;
  text-align: center;

  ${DesktopSmall(css`
    font-size: var(--font-size-large);
    /* margin-bottom: 35px; */
  `)}
`;

export const ActivityContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 40px 30px 0 30px;

  &:last-child {
    padding-bottom: 80px;
  }

  ${DesktopSmall(css`
    padding: 20px 15px 0 15px;
  `)}
`;

export const ActivityTitle = styled(Text)`
  font-size: var(--font-size-title-short);
  margin-bottom: 15px;
  text-align: left;
  font-weight: 600;

  ${DesktopSmall(css`
    font-size: var(--font-size-large);
  `)}
`;

export const ActivityItem = styled.li`
  font-size: var(--font-size-large);
  margin: 0 0 0 15px;
  text-align: left;
  list-style-type: square;
  line-height: 2;

  ${DesktopSmall(css`
    font-size: var(--font-size-medium);
  `)}
`;
