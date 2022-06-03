import React from 'react';
import "swiper/css/bundle";


import { Header } from './components/header';
import { Layout } from './components/layout';
import { GlobalStyle } from './styles/Global'

function App() {
  return (
    <>
      <Header />
      <Layout />
      <GlobalStyle />
    </>
  );
}

export default App;
