// src/components/NoteForm.js
import React, { useState, useEffect } from 'react';


const NoteForm = ({ addNote, editNote, editingNote, setEditingNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingNote) {
      editNote({
        id: editingNote.id,
        title,
        content
      });
    } else {
      addNote({
        title,
        content
      });
    }
    setTitle('');
    setContent('');
    setEditingNote(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">{editingNote ? 'Update Note' : 'Add Note'}</button>
    </form>
  );
};

export default NoteForm;
