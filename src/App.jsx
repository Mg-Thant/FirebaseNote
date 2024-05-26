import { useEffect, useState } from "react";
import Box from "./components/box";
import List from "./components/list";
import Nav from "./components/Nav";
import Intro from "./components/Intro";

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://notepj-5a8e5-default-rtdb.firebaseio.com/notes.json"
      );
      if (!res.ok) {
        throw new Error("Can't connect to the firebase.");
      }
      const notes = await res.json();

      const modifiedNote = [];

      for (const key in notes) {
        modifiedNote.push({
          id: key,
          note : notes[key]
        });
      }
      setNotes(modifiedNote);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <Nav totalNotes={notes.length}/>
      {loading && !error && <span className="loading"></span>}
      {error && !loading(
        <div className="errorTP">
          <div className="error"></div>
          <div className="error-message">
            "Can't connect to the firebase. Come back later..."
          </div>
        </div>
      )}
      
      {!loading && !error && (
        <>
          <Box getNotes={getNotes} />
          {notes.map((note, index) => (
            <List key={index} note={note} getNotes={getNotes}/>
          ))}
        </>
      )}
      { notes.length < 1 && <Intro />}
    </div>
  );
}

export default App;
