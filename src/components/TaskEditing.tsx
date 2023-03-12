import { FloppyDiskBack } from '@phosphor-icons/react'

interface TaskEditingProps {
  setIsEditing: (state: boolean) => void
  title: string
  id: string
}

export default function TaskEditing(props: TaskEditingProps) {
  return (
    <div className="flex justify-between items-center w-full mx-3">
      <textarea value={props.title} className="w-full rounded-xl p-3 h-auto"></textarea>
      <button
        className="p-2"
        title="save"
        onClick={() => {
          // function to change task name
          props.setIsEditing(false)
        }}
      >
        <FloppyDiskBack />
      </button>
    </div>
  )
}