import React, { createContext, useState } from "react";
import { useSpring, animated } from "react-spring";
import "../css/note.css";
import { TfiNotepad } from "react-icons/tfi";
import ShowNote from "../components/ShowNote";

const Note = () => {
  const [showNote, setShowNote] = useState(false);

  const toggleNote = () => {
    setShowNote(!showNote);
  };

  return (
    <div className="main-note">
      <ShowNote showNote={showNote} setShowNote={setShowNote}></ShowNote>
      <div className="up-container">
        <div className="up-components">
          <TfiNotepad></TfiNotepad>
        </div>
      </div>
      <div className="note-container">
        <div className="note-components">
          <div className="note-components-left">
            <p
              style={{
                color: "bisque",
                fontFamily: "Barlow Condensed",
                display: "flex",
                fontSize:"32px"
              }}
            >
              Daily quote:
            </p>
            <strong>
            <p style={{ color: "beige", fontFamily: "Bebas Neue", fontSize:"36px",}}>
              "Life is a journey with its fair share of ups and downs, twists
              and turns. It's not always about the destination, but the
              experiences along the way. Challenges may arise, but our responses
              to them define the chapters of our story. Embrace the moments,
              learn from the hardships, and cherish the joys, for in the end,
              it's not the years in your life that count, but the life in your
              years."
            </p>
            </strong>
            <button className="create-note" onClick={toggleNote}>
              Create Note
            </button>
          </div>
          <div className="note-components-right"></div>
        </div>
      </div>
    </div>
  );
};

export default Note;
