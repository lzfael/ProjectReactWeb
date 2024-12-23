import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import {v4} from 'uuid'

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
   useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
   }, [tasks]);
  
  useEffect(() => {
    const fechtTasks = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=6')
    const data = await response.json()
    setTasks(data)
  }
   fechtTasks()
  }, [])

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onTaskDelete(taskId) {
    const newTasks = tasks.filter((task) =>  taskId != task.id )
    setTasks(newTasks)
  }

  function onAddTaskSubmit(title, description) {
    const newTasks  = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false
    }
    setTasks([...tasks, newTasks])
  }


  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]  space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onTaskDelete={onTaskDelete} />
      </div>
    </div>
  );
}

export default App;
