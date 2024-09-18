// src/components/NoteList.js
import React from 'react';
import Note from './Note';

const NoteList = ({ notes, deleteNote, setEditingNote }) => {
  return (
    <div className="note-list">
      {notes.map(note => (
        <Note 
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          setEditingNote={setEditingNote}
        />
      ))}
    </div>
  );
};

export default NoteList;
