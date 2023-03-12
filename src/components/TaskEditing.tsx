import { FloppyDiskBack } from '@phosphor-icons/react'

interface TaskEditingProps {
  setIsEditing: (state: boolean) => void
  title: string
  id: string
}

export default function TaskEditing(props: TaskEditingProps) {
  return (
    <div className="flex justify-between items-center w-full">
      <input type="text" />
      <button
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