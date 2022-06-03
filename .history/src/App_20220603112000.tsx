import React from 'react';
import "swiper/css/bundle";

import { Header } from './components/header';
import { Layout } from './components/layout';

import { GlobalStyle } from './styles/Global'
import { Container } from './styles/mobile';

function App() {
  return (
    <>
      <Header />
      <Layout />
      <GlobalStyle />
      <Container />
    </>
  );
}

export default App;
