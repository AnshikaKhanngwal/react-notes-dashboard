import { useContext, useState, useMemo } from "react";
import { NotesContext } from "../context/NotesContext";
import NoteItem from "./NoteItem";

function NoteList() {

  const { notes } = useContext(NotesContext);
  const [selected, setSelected] = useState(null);

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
          isSelected={selected === index}
          onClick={() => setSelected(index)}
        />
      ))}

    </div>
  );
}

export default NoteList;