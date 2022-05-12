import React from "react";
import ReactMarkdown from "react-markdown";

const ListItem = (props) => {

    const display = () => {
        props.showTable()
        props.displayMyNote(props.item)
    }

    return (
        <div onClick={display} key={props.item.key} className="notePreview">
            <ReactMarkdown>{(props.item.title.length > 18)? props.item.title.split('').splice(0, 15).join('') + "...": props.item.title}</ReactMarkdown>
            <ReactMarkdown>{props.item.content.split('#').join('').split('').splice(0, 100).join('') + "..."}</ReactMarkdown>
        </div>
    )
}

export default ListItem