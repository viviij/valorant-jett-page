import React from 'react';
import "swiper/css/bundle";

import { Header } from './components/header';
import { Layout } from './components/layout';
import { Weapons } from './components/weapons';
import { GlobalStyle } from './styles/Global'

function App() {
  return (
    <>
      <Header />
      <Weapons />
      <Layout />
      <GlobalStyle />
    </>
  );
}

export default App;
