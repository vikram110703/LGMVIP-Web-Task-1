import './Styles/App.scss'
import TodoItem from "./Components/ToDoItem";
import { useRef, useState } from 'react';

function App() {
  const [task, setTask] = useState([]);
  const inputRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    const val = inputRef.current.value;
    setTask([...task, val]);
    inputRef.current.value = "";
  };

  const deleteTask = (index) => {
    const currArr = [...task];
    currArr.splice(index, 1);
    setTask(currArr);
  };

  const editTask = (index, editedTask) => {
    const currArr = [...task];
    currArr[index] = editedTask;
    setTask(currArr);
  };

  return (
    <>
      <div className="container">
        <div className="toDo-container">
          <form className="header" onSubmit={submitHandler}>
            <h1> To-Do List</h1>
            <input type="text" placeholder="Write Here" required={true} ref={inputRef} />
            <button type="submit">
              Add
            </button>
          </form>
          <div className="task-bar">
            {task.map((toDoTask, index) => (
              <TodoItem
                key={index}
                index={index}
                description={toDoTask}
                onDelete={() => deleteTask(index)} // Pass as a reference
                onUpdate={(editedTask) => editTask(index, editedTask)} // Pass the editedTask as an argument
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
