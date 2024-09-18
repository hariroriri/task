// src/App.js
import React, { useState } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  const addNote = (note) => {
    setNotes([...notes, { id: Date.now(), ...note }]);
  };

  const editNote = (note) => {
    setNotes(notes.map(n => n.id === note.id ? note : n));
    setEditingNote(null);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="App">
      <h1>Notes Application</h1>
      <NoteForm 
        addNote={addNote}
        editNote={editNote}
        editingNote={editingNote}
        setEditingNote={setEditingNote}
      />
      <NoteList 
        notes={notes}
        deleteNote={deleteNote}
        setEditingNote={setEditingNote}
      />
    </div>
  );
}

export default App;
