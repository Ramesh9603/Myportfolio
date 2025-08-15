import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = () => {
    if (!task.trim()) return;
    const updatedTasks = editIndex !== null
      ? tasks.map((t, i) => i === editIndex ? { ...t, text: task } : t)
      : [...tasks, { text: task, completed: false }];
    setTasks(updatedTasks);
    setTask("");
    setEditIndex(null);
  };

  const handleToggle = i =>
    setTasks(tasks.map((t, idx) => idx === i ? { ...t, completed: !t.completed } : t));

  const handleDelete = i => setTasks(tasks.filter((_, idx) => idx !== i));

  const handleEdit = i => {
    setTask(tasks[i].text);
    setEditIndex(i);
  };

  return (
    <div className="container">
      <h1>📝 To-Do List</h1>
      <div className="input-area">
        <input value={task} onChange={e => setTask(e.target.value)} placeholder="Enter Tasks Here...." />
        <button onClick={handleAdd}>{editIndex !== null ? "Update" : "Add"}</button>
      </div>
      <ul>
        {tasks.map((t, i) => (
          <li key={i} className={t.completed ? "done" : ""}>
            <span onClick={() => handleToggle(i)}>{t.text}</span>
            <div>
              <button onClick={() => handleEdit(i)} >Edit</button>
              <button onClick={() => handleDelete(i)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      {tasks.length === 0 && <p>No tasks yet</p>}
    </div>
  );
}
