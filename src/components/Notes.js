import React, { useEffect, useState } from "react";
import api from "../api";
import NoteForm from "./NoteForm";
import NoteItem from "./NoteItem";

const Notes = ({ token, handleLogout }) => {
  const [notes, setNotes] = useState([]);
  const [noteData, setNoteData] = useState({ title: "", content: "" });
  const [editingNote, setEditingNote] = useState(null);

  const fetchNotes = async () => {
    try {
      const res = await api.get("/notes/");
      setNotes(res.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const handleNoteCreate = async (e) => {
    e.preventDefault();
    try {
      if (editingNote) {
        await api.put(`/notes/${editingNote.note_id}/`, noteData);
        setEditingNote(null);
      } else {
        await api.post("/notes/", noteData);
      }
      fetchNotes();
      setNoteData({ title: "", content: "" });
    } catch (error) {
      console.error("Error creating/updating note:", error);
    }
  };

  const handleNoteDelete = async (id) => {
    try {
      await api.delete(`/notes/${id}/`);
      fetchNotes();
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const handleNoteUpdate = (note) => {
    setNoteData({ title: note.title, content: note.content });
    setEditingNote(note);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="text-center mb-3">📝 Notes App</h2>
          <button className="btn btn-danger w-100 mb-3" onClick={handleLogout}>
            Logout
          </button>
          <NoteForm
            noteData={noteData}
            setNoteData={setNoteData}
            handleSubmit={handleNoteCreate}
            editing={editingNote}
          />
          <hr />
          <h5>Your Notes</h5>
          {notes.length === 0 ? (
            <p>No notes found.</p>
          ) : (
            <ul className="list-group">
              {notes.map((note) => (
                <NoteItem
                  key={note.note_id}
                  note={note}
                  onEdit={() => handleNoteUpdate(note)}
                  onDelete={() => handleNoteDelete(note.note_id)}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notes;
