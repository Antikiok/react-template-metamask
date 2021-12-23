/* eslint-disable global-require */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const SendCrypto = ({ account, ethereum }) => {
  const [eventFormData, setEventFormData] = useState({
    wallet: '',
    amount: 0.1,
  });
  const { wallet, amount } = eventFormData;

  const Web3 = require('web3');
  const web3 = new Web3('http://localhost:3000/');
  const toWeiAmount = web3.utils.toHex(web3.utils.toWei(`${amount}`));

  const handleEventForm = (e) => {
    const { name, value } = e.target;
    setEventFormData({
      ...eventFormData,
      [name]: value,
    });
  };

  async function sendEth(e) {
    e.preventDefault();

    try {
      await ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: account,
            to: wallet,
            value: toWeiAmount,
          },
        ],
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className="event-form">
      <input
        type="text"
        value={wallet}
        name="wallet"
        placeholder="Input wallet which you need to send"
        className="event-form__field"
        onChange={handleEventForm}
      />
      <input
        type="number"
        value={amount}
        name="amount"
        placeholder="Input wallet which you need to send"
        className="event-form__amount"
        onChange={handleEventForm}
      />
      <button
        type="submit"
        className="event-form__submit-btn"
        onClick={sendEth}
      >
        Send
      </button>
    </form>
  );
};

export default SendCrypto;
