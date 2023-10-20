import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addTask = () => {
    if (task) {
      if (editIndex !== null) {
        tasks[editIndex] = task;
        setEditIndex(null);
      } else {
        setTasks([...tasks, task]);
      }
      setTask('');
    }
  };

  const editTask = (index) => {
    setTask(tasks[index]);
    setEditIndex(index);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index] = newTasks[index] + ' (Complete)';
    setTasks(newTasks);
  };

  const countCompleteTasks = () => {
    return tasks.filter((task) => task.endsWith('(Complete)')).length;
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="Add a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>{editIndex !== null ? 'Edit Task' : 'Add Task'}</button>
      <div>
        {tasks.map((task, index) => (
          <div key={index}>
            {task}
            <button onClick={() => editTask(index)}>Edit</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
            {!task.endsWith('(Complete)') && (
              <button onClick={() => toggleComplete(index)}>Complete</button>
            )}
          </div>
        ))}
      </div>
      <p>Complete tasks: {countCompleteTasks()}</p>
    </div>
  );
}

export default App;
