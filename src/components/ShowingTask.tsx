import { Pencil } from '@phosphor-icons/react'
import { useAppContext } from '../context/hook'

interface ShowingTask {
  setIsEditing: (state: boolean) => void
  isCompleted: boolean
  title: string
  id: string
}

export default function ShowingTask(props: ShowingTask) {
  const { changeTask } = useAppContext()
  return (
    <div className="flex justify-between items-center w-full mx-3">
      <input
        className="mr-5 ml-2 scale-125"
        type="checkbox"
        checked={props.isCompleted}
        onChange={() => changeTask(props.id)}
      />
      <h1 className={`w-full text-justify ${props.isCompleted ? "line-through" : ""}`}>{props.title}</h1>
      <button
        className="mr-2 ml-3"
        title="edit"
        onClick={() => props.setIsEditing(true)}
      >
        <Pencil size={20} />
      </button>
    </div>
  )
}