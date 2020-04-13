import React from 'react';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { Provider as ReduxProvider } from 'react-redux';

import store from './src/store';

import reset from './src/styles/reset';
import theme from './src/styles/theme';

interface WrapWithProviderProps {
  element: HTMLElement;
}

const WrapWithProvider = ({ element }: WrapWithProviderProps) => (
  <ReduxProvider store={store}>
    <Global styles={reset} />
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </ReduxProvider>
);

export default WrapWithProvider;
