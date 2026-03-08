import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Notes Dashboard</h1>

      <NoteInput />
      <NoteList />

    </div>
  );
}

export default App;