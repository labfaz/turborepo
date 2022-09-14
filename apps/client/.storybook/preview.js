import React from 'react';
import Helmet from 'react-helmet';
import { StaticRouter } from 'react-router-dom';
// import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'
import {
  ArgsTable,
  Description,
  DocsContainer,
  Primary,
  Stories,
  Subtitle,
  Title,
} from '@storybook/addon-docs/blocks';
import { createGlobalStyle } from 'styled-components';

import GlobalContext from '../src/Context';
import GlobalStyles from '../src/GlobalStyles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },

  // for stories documentation
  docs: {
    container: DocsContainer,
    page: () => (
      <>
        <Title />
        <Subtitle />
        <Description />
        <Primary />
        <ArgsTable />
        <Stories />
      </>
    ),
  },
};

const BodyStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0 !important;
    min-height: 100vh;
  }
`;

const injectGlobalStylesAndTheme = (Story) => (
  <>
    <GlobalStyles />
    <BodyStyle />
    <Story />
  </>
);

const injectGoogleFonts = (Story) => (
  <>
    <Helmet>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&amp;display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Story />
  </>
);

const injectReactRouter = (Story) => (
  <StaticRouter>
    <Story />
  </StaticRouter>
);

const injectGlobalContext = (Story) => (
  <GlobalContext>
    <Story />
  </GlobalContext>
);

export const decorators = [
  injectGlobalStylesAndTheme,
  injectGoogleFonts,
  injectReactRouter,
  injectGlobalContext,
];
