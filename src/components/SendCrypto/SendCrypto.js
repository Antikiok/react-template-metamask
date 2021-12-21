import React from 'react';

const SendCrypto = () => (
  <form className="event-form">
    <input
      type="text"
      // value={title}
      name="title"
      placeholder="Title"
      className="event-form__field"
      //   onChange={}
    />
    <div className="event-form__time">
      <input
        type="date"
        //   value={date}
        name="date"
        className="event-form__field"
        // onChange={}
      />
      <input
        type="time"
        //   value={startTime}
        name="startTime"
        className="event-form__field"
        // onChange={}
      />
      <span>-</span>
      <input
        type="time"
        //   value={endTime}
        name="endTime"
        className="event-form__field"
        // onChange={}
      />
    </div>
    <textarea
      name="description"
      // value={description}
      placeholder="Description"
      className="event-form__field"
      //   onChange={}
    ></textarea>
    <button
      type="submit"
      className="event-form__submit-btn"
      // onClick={toggleModal}
    >
      Submit Create
    </button>
  </form>
);

export default SendCrypto;
