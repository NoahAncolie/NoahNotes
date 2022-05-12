import React from "react";
import NoteNew from "./NoteNew";
import NoteList from "./NoteList";

const Notes = (props) => {

    return (
        <div className="notes">
            <NoteNew displayMyNote={props.displayMyNote} showTable={props.showTable} />
            <NoteList displayMyNote={props.displayMyNote} showTable={props.showTable} />
        </div>
    )
}

export default Notes