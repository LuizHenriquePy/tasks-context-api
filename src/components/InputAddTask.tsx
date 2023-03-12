import { useAppContext } from "../context/hook"
import { useState } from "react"

export default function InputAddTask() {
  const { addNewTask } = useAppContext()
  const [inputValue, setInputValue] = useState("")

  return (
    <div className="w-full flex justify-center py-8">
      <input
        value={inputValue}
        className="border border-black rounded-l-xl px-2 h-8 w-4/5 xl:w-1/2 lg:w-9/12"
        onChange={({ target }) => setInputValue(target.value)}
      />
      <button
        className="border border-black rounded-r-xl w-20 h-8"
        onClick={() => {
          addNewTask(inputValue)
          setInputValue("")
        }}
      >
        Add Task
      </button>
    </div>
  )
}