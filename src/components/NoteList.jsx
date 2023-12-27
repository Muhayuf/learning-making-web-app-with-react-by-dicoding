import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete }) {
    return (
      <div className="noteList">
        {notes.length !== 0 ? (
          notes.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              {...note}
            />
          ))
        ) : (
          <p className="noteList__empty-message">Tidak ada catatan.</p>
        )}
      </div>
    );
}
   
export default NoteList;