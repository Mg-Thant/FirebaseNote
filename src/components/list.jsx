import React from "react";

const List = ({note, getNotes}) => {

  const {note: text, id} = note;

  const deleteNote = async () => {
    try {
      const res = await fetch(
        `https://notepj-5a8e5-default-rtdb.firebaseio.com/notes/${id}.json`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) {
        throw new Error("Failed to delete.");
      }
      getNotes();
    } catch (error) {
      alert(error.message);
    }
    
  };
    
  return (
    <div className="form flx-ctr">
      <h3>{text}</h3>
      <button className="material-symbols-outlined" onClick={deleteNote}>delete</button>
    </div>
  );
};

export default List;
