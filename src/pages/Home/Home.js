/* eslint-disable react/button-has-type */
import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../../components/Wallet/connectors';
import SendCrypto from '../../components/SendCrypto/SendCrypto';

const Home = () => {
  const { active, account, activate, deactivate } = useWeb3React();
  console.log(active);
  async function connect() {
    try {
      await activate(injected);
    } catch (error) {
      throw new Error(error);
    }
  }

  async function disconnect() {
    try {
      await deactivate(injected);
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <>
      <h1>Home</h1>
      <div className="container">
        <button onClick={connect} className="container__btn">
          Connect to you wallet
        </button>
        {active ? (
          <div>
            <span>
              Connected with <b>{account}</b>
            </span>
            <SendCrypto className="container-sendform" />
          </div>
        ) : (
          <span>Not connected</span>
        )}

        <button onClick={disconnect} className="container__btn">
          Disconnect
        </button>
      </div>
    </>
  );
};
export default Home;
