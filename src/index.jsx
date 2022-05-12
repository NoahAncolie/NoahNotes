import React, { useState } from 'react'
import ReactDom from 'react-dom'
import Notes from './components/Notes'
import Note from './components/Note'
import './styles/style.scss'

const App = () => {

    let [currentNote, setNote] = useState("")
    let [noteTable, setTable] = useState("hide")

    if (!localStorage.myNotes) {
        localStorage.myNotes = JSON.stringify({})
    }

    const displayMyNote = (note) => {
        setNote(note)
    }

    const showTable = (className = "slide-in") => {
        setTable(className)
    }

    return (
        <div className='noteApp'>
            <Notes displayMyNote={displayMyNote} showTable={showTable} />
            <Note currentNote={currentNote} displayMyNote={displayMyNote} noteTable={noteTable} />
        </div>
    )
}

ReactDom.render(<App />, document.getElementById('root'))