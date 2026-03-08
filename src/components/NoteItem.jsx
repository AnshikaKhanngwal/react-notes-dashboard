function NoteItem({ note, isSelected, onClick }) {

  return (
    <div
      onClick={onClick}
      style={{
        padding: "10px",
        border: "1px solid gray",
        margin: "5px",
        backgroundColor: isSelected ? "yellow" : "white",
        cursor: "pointer"
      }}
    >
      {note}
    </div>
  );
}

export default NoteItem;