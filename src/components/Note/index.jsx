import React from "react";
import NoteVisual from "./NoteVisual";
import NoteTable from "./NoteTable";

const Note = (props) => {
    return (
        <div className="note">
            <NoteVisual currentNote={props.currentNote} />
            <NoteTable currentNote={props.currentNote} displayMyNote={props.displayMyNote} noteTable={props.noteTable} />
        </div>
    )
}

export default Note