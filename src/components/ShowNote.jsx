import React from "react";
import "../css/shownote.css";
import { IoCloseSharp } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { LuPencil } from "react-icons/lu";

const ShowNote = ({ showNote, setShowNote }) => {
  return (
    <AnimatePresence>
      {showNote && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`shownote-container`}
        >
          <div className="shownote-content">
            <div className="close-btn-container">
              <button
                type="button"
                className="close-btn"
                onClick={() => setShowNote(false)}
              >
                <IoCloseSharp
                  style={{ color: "bisque" }}
                  className="close-icon"
                  size={25}
                />
              </button>
            </div>
            <i style={{ color: "white" }} className="icon-pen">
              <LuPencil />
            </i>
            <div className="middle-container">
              <div className="middle-components">
                <div className="first-input">
                  <input className="first-input-1"></input>
                </div>
                <div className="second-input">
                  <textarea className="second-input-2"></textarea>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ShowNote;
