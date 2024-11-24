import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      description: "Estudar programação para se tornar um desenvolvedor full stack.",
      isCompleted: true,
    },
    {
      id: 2,
      title: "Estudar Ingles",
      description: "Estudar ingles para se tornar fluente.",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Estudar Matemática",
      description: "Estudar para melhorar minhas notas",
      isCompleted: false,
    },
  ]);

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


  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]  space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onTaskDelete={onTaskDelete} />
      </div>
    </div>
  );
}

export default App;
