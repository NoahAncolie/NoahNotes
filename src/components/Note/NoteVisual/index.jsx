import React from "react";
import ReactMarkdown from "react-markdown";

const NoteVisual = (props) => {

    const currentNote = props.currentNote

    return (
        <div className="noteVisual">
            <ReactMarkdown>
                {currentNote.title}
            </ReactMarkdown>
            <ReactMarkdown>
                {currentNote.content}
            </ReactMarkdown>
        </div>
    )
}

export default NoteVisual