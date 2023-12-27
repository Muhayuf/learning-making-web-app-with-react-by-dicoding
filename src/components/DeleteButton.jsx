import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
 
function DeleteButton({id, onDelete}) {
    return <button className='noteDelete' onClick={() => onDelete(id)}>Delete <FontAwesomeIcon icon={faTrash} style={{color: "#393E46",}} /></button>
}
 
export default DeleteButton;