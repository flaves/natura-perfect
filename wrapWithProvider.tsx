import React from 'react';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import reset from './src/styles/reset';
import theme from './src/styles/theme';

interface WrapWithProviderProps {
  element: HTMLElement;
}

const WrapWithProvider = ({ element }: WrapWithProviderProps) => (
  <>
    <Global styles={reset} />
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </>
);

export default WrapWithProvider;
