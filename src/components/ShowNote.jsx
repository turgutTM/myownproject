import React from "react";
import "../css/shownote.css";
import { IoCloseSharp } from "react-icons/io5";

const ShowNote = ({showNote,toggleNote}) => {
  return (
    <>
      <div
        className={
          showNote ? "shownote-container show-note" : "shownote-container"
        }
      >aaa</div>
      <div className="content">
        <button type="button" className="close-btn" onClick={toggleNote}>
        <IoCloseSharp />
        </button>
      </div>
    </>
  );
};

export default ShowNote;
