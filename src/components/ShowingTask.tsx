import { Pencil } from '@phosphor-icons/react'

interface ShowingTask {
  setIsEditing: (state: boolean) => void
  isCompleted: boolean
  title: string
}

export default function ShowingTask(props: ShowingTask) {
  return (
    <div className="flex justify-between items-center w-full">
      <input type="checkbox" checked={props.isCompleted} />
      <h1>{props.title}</h1>
      <button
        title="edit"
        onClick={() => props.setIsEditing(true)}
      >
        <Pencil />
      </button>
    </div>
  )
}