import { useState } from "react"
import { useAppContext } from "./context/hook"

export default function App() {
  const { state, addNewTask } = useAppContext()
  const [inputValue, setInputValue] = useState("")
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
        state.tasks.map((task, index) => <p key={index}>{`${task.title} - ${task.isCompleted}`}</p>)
      }
    </div>
  )
}
