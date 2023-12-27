import React from "react";
import DeleteButton from "./DeleteButton";
import { showFormattedDate } from '../utils/index';

function NoteItem({title, body, createdAt, id, onDelete}) {
    return (
        <div className="noteItem">
            <h3 className="noteTitle">{title}</h3>
            <h5 className="noteCreateAt">{showFormattedDate(createdAt)}</h5>
            <p className="noteBody">{body}</p>
            <div className="buttonAction">
                <DeleteButton id={id} onDelete={onDelete} />
            </div>
        </div>
    );
}

export default NoteItem;