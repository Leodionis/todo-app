import React, { useState } from 'react';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim() === "") return;
        setTasks([...tasks, { text: newTask, completed: false }]);
        setNewTask("");
    };

    const toggleTaskCompletion = (index) => {
        const updatedTasks = tasks.map((task, i) => i === index ? { ...task, completed: !task.completed } : task);
        setTasks(updatedTasks);
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="App">
            <div className="container">
                <h1>Todo List</h1>
                <div className="inputContainer">
                    <input 
                        type="text" 
                        value={newTask} 
                        onChange={(e) => setNewTask(e.target.value)} 
                        placeholder="Add a new task"
                    />
                    <button onClick={addTask}>Add Task</button>
                </div>
                <ul className="taskList">
                    {tasks.map((task, index) => (
                        <li key={index} className={`task ${task.completed ? 'completed' : ''}`}>
                            <span>{task.text}</span>
                            <div className="taskButtons">
                                <button onClick={() => toggleTaskCompletion(index)}>Complete</button>
                                <button onClick={() => deleteTask(index)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
