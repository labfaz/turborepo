import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  /* variables */
  html {
    --color-text-black: #000000;
    --color-text-white: #FFFFFF;
    --color-text-white-gray: #FAFAFA;
    --color-text-beige: #FFEC99;
    --color-text-yellow: #FFEC99;
    --color-text-pink: #FC0061;
    --color-text: var(--color-text-black);
    --color-text-dark-gray: #C4C4C4;

    
    --background-dark-gray: #C4C4C4;
    --background-gray: #E7E7E7;
    --background-light-gray: #C4C4C425;
    --background-white: #FFFFFF;
    --background-black: #000000;
    --background-pink: #FC0061;
    --background-yellow: #FFEC99;
    --background-light-white: #FAFAFA;
    --background-dark-dark-gray: #2a2a2a;
    --background-green: #2daf2f;
    --background-black-gray: #090909;

    --button-color-yellow: #FFEC99;
    --button-color-pink: #FC0061;

    --font-size-title-xxxx-large: 4.5rem;
    --font-size-title-xxx-large: 4rem;
    --font-size-title-xx-large: 3.5rem;
    --font-size-title-x-large: 3rem;
    --font-size-title: 2.1875rem;
    --font-size-title-medium: 1.875rem;
    --font-size-title-small: 1.75rem;
    --font-size-subtitle: 1.5rem;
    --font-size-title-smaller: 1.375rem;
    --font-size-title-short: 1.25rem;
    --font-size-default: 1.125rem;
    --font-size-large: 1rem;
    --font-size-medium: 0.875rem;
    --font-size-short: 0.75rem;
    --font-size-small: 0.625rem;
    
    --line-height-default: 48.72px; 
    --line-height-small: 25px; 
    --line-height-medium: 30px;

    --max-content-width: 100rem;
    --max-content-small: 60rem;
  }

  * {
    box-sizing: border-box;
    font-family: "Cairo", sans-serif;
    font-size: var(--font-size-default);
    color: var(--color-text-white);

    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  a {
    margin: 0;
    text-decoration: none;
  }
`;

export default GlobalStyles;
