import { FloppyDiskBack } from '@phosphor-icons/react'
import { useState } from 'react'
import { useAppContext } from '../context/useAppContext'

interface TaskEditingProps {
  setIsEditing: (state: boolean) => void
  title: string
  id: string
}

export default function TaskEditing(props: TaskEditingProps) {
  const [input, setInput] = useState(props.title)
  const { editTask } = useAppContext()

  return (
    <div className="flex justify-between items-center w-full mx-3">
      <textarea value={input} onChange={(e) => setInput(e.target.value)} className="w-full rounded-xl p-3 h-auto" data-testid="input-edit-task"></textarea>
      <button
        className="p-2"
        title="save"
        onClick={() => {
          editTask(props.id, input)
          props.setIsEditing(false)
        }}
        data-testid="button-edit-save"
      >
        <FloppyDiskBack size={20} />
      </button>
    </div>
  )
}