import React, { useState, useEffect } from 'react';
import './AddAnswer.css';
import AddAnswerModal from '../modals/AddAnswerModal.jsx';

function AddAnswer({ question, currentProductId }) {
  const [openAddAnswerModal, setOpenAddAnswerModal] = useState(false);

  const helpfulClicked = () => {
    console.log(question, 'add answer clicked');
  };

  return (
    <div onClick={helpfulClicked}>
      <button
        className="openAddAnswerModalBtn"
        onClick={() => {
          setOpenAddAnswerModal(true);
        }}
      >
        Add Answer
      </button>
      {openAddAnswerModal && <AddAnswerModal closeModal={setOpenAddAnswerModal} currentProductId={currentProductId} question={question} />}
      {/* <AddAnswerModal /> */}
    </div>
  );
}

export default AddAnswer;
