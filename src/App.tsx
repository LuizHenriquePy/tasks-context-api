import { useState } from "react"
import Task from "./components/Task"
import { useAppContext } from "./context/hook"

export default function App() {
  const { state, addNewTask } = useAppContext()
  const [inputValue, setInputValue] = useState("")
  console.log(state.tasks)
  return (
    <div>
      <input
        value={inputValue}
        onChange={({ target }) => setInputValue(target.value)}
      />
      <button
        onClick={() => {
          addNewTask(inputValue)
          setInputValue("")
        }}
      >
        add task
      </button>
      {
        state.tasks.map((task, index) => <Task
          key={index}
          title={task.title}
          isCompleted={task.isCompleted} />)
      }
    </div>
  )
}
