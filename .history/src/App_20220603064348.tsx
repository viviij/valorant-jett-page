import React from 'react';


import { Header } from './components/header';
import { Layout } from './components/layout';
import { Weapons } from './components/weapons';
import { GlobalStyle } from './styles/Global'

function App() {
  return (
    <>
      <Header />
      <Layout />
      <Weapons />
      <GlobalStyle />
    </>
  );
}

export default App;
