import { func, object } from 'prop-types';
import React from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: func.isRequired,
  pageProps: object,
};

export default MyApp;
