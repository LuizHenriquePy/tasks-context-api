import { useAppContext } from "../context/hook"
import { ITask } from "../interfaces/ITask"
import { Trash } from '@phosphor-icons/react'
import { useState } from "react"
import TaskEditing from "./TaskEditing"
import ShowingTask from './ShowingTask'

export default function Task({ title, isCompleted, id }: ITask) {
  const { deleteTask, } = useAppContext()
  const [isEditing, setIsEditing] = useState<boolean>(false)

  return (
    <div className="flex justify-between items-center w-full h-10 border border-black">
      {
        isEditing ? <TaskEditing title={title} id={id as string} setIsEditing={setIsEditing} />
          : <ShowingTask isCompleted={isCompleted} title={title} setIsEditing={setIsEditing} />
      }
      <button
        onClick={() => deleteTask(id as string)}
        title="delete"
      ><Trash color="red" /></button>
    </div>
  )
}