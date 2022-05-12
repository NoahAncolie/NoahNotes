import React from "react";

const NoteTable = (props) => {

    let currentNote = props.currentNote
    let noteTable = props.noteTable

    const saveNote = () => {
        let local = JSON.parse(localStorage.myNotes)
        currentNote.lastModified = Date.now

        if (local[currentNote.key]) {
            local[currentNote.key] = currentNote
        } else {
            currentNote.key = `note${Object.keys(local).length}`
            local[currentNote.key] = currentNote
        }
        localStorage.myNotes = JSON.stringify(local)
    }

    const editNoteText = (text) => {
        currentNote.content = text
        props.displayMyNote({title: currentNote.title, content: currentNote.content, key: currentNote.key})
    }

    const editNoteTitle = (text) => {
        currentNote.title = "# " + text.split('#').join('')
        props.displayMyNote({title: currentNote.title, content: currentNote.content, key: currentNote.key})
    }

    return (
        <div className={`noteTable ${noteTable}`}>
            <form onSubmit={saveNote}>
                <input type="text" className="noteTitleInput" placeholder="Ajouter une note pour commencer à taper" onChange={event => editNoteTitle(event.target.value)} value={currentNote.title? currentNote.title.split('# ').join('') : ""}></input>
                <textarea className="noteTextArea" placeholder="Type in..." value={currentNote.content? currentNote.content : ""} onChange={event => editNoteText(event.target.value)}>{currentNote.content}</textarea>
                <input type="submit" className="noteBtn saveBtn" value="Enregistrer"></input>
            </form>
        </div>
    )
}

export default NoteTable