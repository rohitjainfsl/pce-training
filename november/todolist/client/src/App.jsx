import { useState } from "react";
import "./todolist.css";
function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <h1>Todo list</h1>
      <div id="todo">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Add Task</button>
      </div>
      <ul></ul>
    </>
  );
}

export default App;
