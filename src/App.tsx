import { useState } from "react"

export default function App() {
  const [inputValue, setInputValue] = useState("")
  const [listTasks, setListTasks] = useState<Array<string>>([])
  return (
    <div>
      <input
        value={inputValue}
        onChange={({ target }) => setInputValue(target.value)}
      />
      <button
        onClick={() => {
          setListTasks([inputValue, ...listTasks])
          setInputValue("")
        }}
      >
        add task
      </button>
      {
        listTasks.map((task, index) => <p key={index}>{task}</p>)
      }
    </div>
  )
}
