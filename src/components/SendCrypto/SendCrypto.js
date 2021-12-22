/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const SendCrypto = ({ account, ethereum }) => {
  const [eventFormData, setEventFormData] = useState({
    wallet: '',
    amount: 0,
  });
  const { wallet, amount } = eventFormData;

  // Don't understand how i can convert to heximal value
  // and send this value in function sendEth
  const amountHex16 = amount.toString(16);

  const handleEventForm = (e) => {
    const { name, value } = e.target;
    setEventFormData({
      ...eventFormData,
      [name]: value,
    });
  };

  const sendEth = (e) => {
    e.preventDefault();
    ethereum
      .request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: account,
            to: wallet,
            value: amountHex16,
            gasPrice: '0x09184e72a000',
            gas: '0x2710',
          },
        ],
      })
      .then((txHash) => console.log(txHash))
      .catch((error) => console.log(error));
  };

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
