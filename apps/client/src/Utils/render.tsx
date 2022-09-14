import React, { FC, HTMLAttributes, ReactElement } from 'react';
import { render } from 'react-dom';
import { StaticRouter } from 'react-router-dom';
import { getQueriesForElement } from '@testing-library/dom';
import GlobalContext from 'Context';

type WrapperType = {
  children?: React.ReactNode;
};

// wrap component with necessary context
const Wrapper: FC<WrapperType> = ({ children }) => {
  return (
    <GlobalContext>
      <StaticRouter>{children}</StaticRouter>
    </GlobalContext>
  );
};

// utility function to render component
const renderComponent = <T extends Element, P extends HTMLAttributes<T>>(
  component: ReactElement<P, string>
) => {
  const root = document.createElement('div');
  render(<Wrapper>{component}</Wrapper>, root);
  return getQueriesForElement(root);
};

export default renderComponent;
