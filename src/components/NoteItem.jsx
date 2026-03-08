function NoteItem({ note, isSelected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`note ${isSelected ? "selected" : ""}`}
    >
      {note}
    </div>
  );
}

export default NoteItem;