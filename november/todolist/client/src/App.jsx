import { useEffect, useState } from "react";
import "./todolist.css";
import axios from "axios";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [idToEdit, setIdToEdit] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    getAllTasks();
  }, []);

  async function addTasks() {
    const obj = { id: Date.now(), task: task, status: "pending" };
    await axios.post("http://localhost:3000/addTask", obj);
    setTask("");
    getAllTasks();
  }

  async function updateTask() {
    try {
      const response = await axios.put(
        `http://localhost:3000/updateTask/${idToEdit}`,
        { task: task }
      );

      if (response.status === 200) {
        // Reset edit state
        setIdToEdit(null);
        setTaskToEdit(null);
        setTask("");

        // Refresh tasks
        getAllTasks();
      }
    } catch (err) {
      console.error("Error updating task:", err);
      alert("Failed to update task");
    }
  }

  async function getAllTasks() {
    try {
      const response = await axios.get("http://localhost:3000/allTasks");
      if (response.status === 200) {
        if (response.data.length > 0) {
          setTasks(response.data);
        } else {
          setTasks(null);
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDelete(id) {
    const response = await axios.delete(
      "http://localhost:3000/deleteTask/" + id
    );
    if (response.status === 200) getAllTasks();
    else if (response.status === 404) alert("ERROR");
  }

  async function handleEdit(id) {
    setIdToEdit(id);
    const taskToEdit = tasks.find((task) => task._id === id);
    setTaskToEdit(taskToEdit);
    setTask(taskToEdit.task);
  }

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
        <button onClick={idToEdit ? updateTask : addTasks}>
          {idToEdit ? "Update Task" : "Add Task"}
        </button>
      </div>
      <ul>
        {tasks &&
          tasks.map((obj) => (
            <li key={obj.id}>
              {obj.task}
              <p>
                <span onClick={() => handleDelete(obj._id)}>Delete</span>
                <span onClick={() => handleEdit(obj._id)}>Edit</span>
              </p>
            </li>
          ))}
      </ul>
    </>
  );
}

export default App;
