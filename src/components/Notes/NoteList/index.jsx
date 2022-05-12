import React from "react";
import ListItem from "./ListItem";

const NoteList = (props) => {

    const myList = JSON.parse(localStorage.myNotes)
    console.log(myList)

    return (
        <div className="bottomList">
            {Object.keys(myList).map(key => <ListItem item={myList[key]} displayMyNote={props.displayMyNote} showTable={props.showTable} />)}
        </div>
    )
}

export default NoteList