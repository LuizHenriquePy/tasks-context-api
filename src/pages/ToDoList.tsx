import Task from "../components/Task"
import InputAddTask from '../components/InputAddTask'
import { useAppContext } from "../context/useAppContext"

export default function ToDoList() {
  const { state } = useAppContext()

  return (
    <div className="bg-slate-100 min-h-screen rounded-xl w-full xl:w-2/3 lg:w-9/12">
      <InputAddTask />
      <div className="pb-7">
        {
          state.tasks.map((task) => <Task
            key={task.id}
            title={task.title}
            isCompleted={task.isCompleted}
            id={task.id} />)
        }
      </div>
    </div>
  )
}