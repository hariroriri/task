import React, { useState } from 'react';
import './Todo.css'; // Import the CSS for styling

const Todo = () => {
  const [tasks, setTasks] = useState([]); // Array to store tasks
  const [newTask, setNewTask] = useState(''); // Tracks the new task input

  // Handle input change for new tasks
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  // Add a new task
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, isCompleted: false }]); // Add task with a completion flag
      setNewTask(''); // Clear the input after adding
    }
  };

  // Mark a task as completed
  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted; // Toggle completion status
    setTasks(newTasks);
  };

  // Delete a task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-list-container">
      <h2>To-Do List Application</h2>

      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <ul className="tasks">
        {tasks.length === 0 && <p className="no-tasks">No tasks added yet.</p>}
        {tasks.map((task, index) => (
          <li key={index} className={task.isCompleted ? 'completed-task' : ''}>
            <span onClick={() => completeTask(index)}>{task.text}</span>
            <button className="delete-task" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
