import React from 'react';
import Web3 from 'web3';
import { Web3ReactProvider } from '@web3-react/core';
import RenderRoutes from './components/RenderRoutes';
import Layout from './layouts/Layout';
import routes from './routes';
import './styles/Main.scss';

function getLibrary(provider) {
  return new Web3(provider);
}

const Main = () => (
  <Web3ReactProvider getLibrary={getLibrary}>
    <Layout>
      <RenderRoutes routes={routes} />
    </Layout>
  </Web3ReactProvider>
);

export default Main;
