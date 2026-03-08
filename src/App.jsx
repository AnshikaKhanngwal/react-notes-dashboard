import "./App.css";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";

function App() {
  return (
    <div className="container">
      <div className="card">
        <h1 className="title">📝 Notes Dashboard</h1>

        <NoteInput />
        <NoteList />
      </div>
    </div>
  );
}

export default App;