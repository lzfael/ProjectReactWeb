import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      description:
        "Estudar programação para se tornar um desenvolvedor full stack.",
      isComplated: true,
    },
    {
      id: 2,
      title: "Estudar ingles",
      description: "Estudar ingles para se tornar fluente.",
      isComplated: true,
    },
    {
      id: 3,
      title: "Estudar matemática",
      description: "Estudar para melhorar minhas notas",
      isComplated: false,
    },
  ]);

  function onTaskClick(tasksId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isComplated: !task.isComplated };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
      </div>
      <AddTask />
      <Tasks tasks={tasks} onTaskClick={onTaskClick} />
    </div>
  );
}

export default App;
