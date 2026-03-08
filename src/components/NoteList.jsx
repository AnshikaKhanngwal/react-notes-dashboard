import { useContext, useState, useMemo } from "react";
import { NotesContext } from "../context/NotesContext";
import NoteItem from "./NoteItem";

function NoteList() {

  const { notes } = useContext(NotesContext);
  const [selectedNotes, setSelectedNotes] = useState([]);

  const totalNotes = useMemo(() => {
    return notes.length;
  }, [notes]);

  return (
    <div>

      <h3>Total Notes: {totalNotes}</h3>

      {notes.map((note, index) => (
        <NoteItem
          key={index}
          note={note}
          isSelected={selectedNotes.includes(index)}
          onClick={() => {
            if (selectedNotes.includes(index)) {
              setSelectedNotes(selectedNotes.filter((i) => i !== index));
            } else {
              setSelectedNotes([...selectedNotes, index]);
            }
          }}
        />
      ))}

    </div>
  );
}

export default NoteList;