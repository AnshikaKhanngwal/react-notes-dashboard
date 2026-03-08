import { useState, useContext, useRef, useEffect } from "react";
import { NotesContext } from "../context/NotesContext";

function NoteInput() {

  const [note, setNote] = useState("");
  const { addNote } = useContext(NotesContext);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAdd = () => {
    if (note.trim() === "") return;

    addNote(note);
    setNote("");
  };

  return (
    <div className="input-group">
      <input ref={inputRef} value={note} onChange={(e) => setNote(e.target.value)} placeholder="Write a note..."
      />

      <button onClick={handleAdd}>Add Note</button>
    </div>
  );
}

export default NoteInput;