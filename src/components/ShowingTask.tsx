import { Pencil } from '@phosphor-icons/react'

interface ShowingTask {
  setIsEditing: (state: boolean) => void
  isCompleted: boolean
  title: string
}

export default function ShowingTask(props: ShowingTask) {
  return (
    <div className="flex justify-between items-center w-full mx-3">
      <input
        className="mr-5 ml-2 scale-125"
        type="checkbox"
        checked={props.isCompleted}
      />
      <h1 className="w-full text-justify">{props.title}</h1>
      <button
        className="mr-2 ml-3"
        title="edit"
        onClick={() => props.setIsEditing(true)}
      >
        <Pencil />
      </button>
    </div>
  )
}