import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Sacar la ropa", done: false },
    { id: 2, name: "Hacer la cama", done: true },
    { id: 3, name: "Leer un rato", done: false },
  ]);
  const [newTask, setNewTask] = useState("");

  function submit(event) {
    setTasks([...tasks, { id: tasks.length + 1, name: newTask, done: false }]);
    setNewTask("");
    event.preventDefault();
  }

  function clickList(task) {
    //const arrayModify = tasks;
    //arrayModify[task.id - 1].done = !arrayModify[task.id - 1].done;
    let array = [...tasks];
    array.splice(task.id - 1, 1, {
      id: task.id,
      name: task.name,
      done: !task.done,
    });
    setTasks(array);
  }

  return (
    <div className="wrapper">
      <div className="list">
        <h3>Por hacer:</h3>
        <ul className="todo">
          {tasks.map((task) => (
            <li
              className={task.done ? "done" : ""}
              onClick={() => clickList(task)}
              key={task.id}
            >
              {task.name}
            </li>
          ))}
        </ul>
        <form onSubmit={submit}>
          <input
            className={newTask.length === 0 ? "error" : ""}
            type="text"
            id="new-task"
            placeholder="Ingresa una tarea y oprime Enter"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}

export default App;
