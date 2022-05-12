import React from "react";

const NoteNew = (props) => {

    const newNote = () => {
        props.showTable()
        props.displayMyNote({ title: "", content: ""})
    }

    return (
        <button className="noteBtn" onClick={newNote}>Ajouter une note</button>
    )
}

export default NoteNew