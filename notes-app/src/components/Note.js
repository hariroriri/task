// src/components/Note.js
import React from 'react';

const Note = ({ note, deleteNote, setEditingNote }) => {
  return (
    <div className="note">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <button onClick={() => setEditingNote(note)}>Edit</button>
      <button onClick={() => deleteNote(note.id)}>Delete</button>
    </div>
  );
};

export default Note;
