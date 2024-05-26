import React, { useState } from "react";

const Box = ({ getNotes }) => {
  const [note, setNote] = useState("");

  const addNote = async (e) => {
    e.preventDefault();
    try {
      if (note.trim().length === 0) {
        alert("Please enter a note(text).")
        return;
      }
      await fetch("https://notepj-5a8e5-default-rtdb.firebaseio.com/notes.json", {
        method: "POST",
        body: JSON.stringify(note),
        headers: {
          "Content-Type": "application/json",
        },
      });
      getNotes();
      setNote("");
    } catch (error) {
      alert("Something went wrong. Try again later...");
    }
  };

  return (
    <section>
      <form className="form" onSubmit={addNote}>
        <div className="inner">
          <input
            type="text"
            placeholder="Enter your notes..."
            className="form-input"
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
          />
          <button className="form-btn">Add notes</button>
        </div>
      </form>
    </section>
  );
};

export default Box;
