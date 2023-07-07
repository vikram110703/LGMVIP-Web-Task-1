import React, { useRef, useState } from 'react'

const TodoItem = ({ index, description, onDelete, onUpdate }) => {
  const [editedTask, setEditedTask] = useState(description);
  const [editMode, setEditMode] = useState(false);
  const inputRef = useRef(null);

  const deleteHandler = () => {
    onDelete(index);
  };

  const editHandler = () => {
    if (editMode) {
      // console.log(editedTask);
      // console.log(index);
      onUpdate(index, editedTask);
      setEditMode(false);
    } else {
      setEditMode(true);
      setEditedTask(description);
    }
  };

  const handleChange = () => {
    setEditedTask(inputRef.current.value);
  }

  return (
    <div className='task-container'>
      <div className='list'>
        {
          editMode ? (<input type='text' value={editedTask} onChange={handleChange} ref={inputRef} />) : (description)
        }
        <div className='button'>
          <button className='edit' onClick={editHandler}>
            {
              editMode ? 'Save' : 'Edit'
            }
          </button>
          <button className='delete' onClick={deleteHandler}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem;