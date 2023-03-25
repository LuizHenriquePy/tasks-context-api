import { useAppContext } from "../context/useAppContext"
import { ITask } from "../interfaces/ITask"
import { Trash } from '@phosphor-icons/react'
import { useState } from "react"
import TaskEditing from "./TaskEditing"
import ShowingTask from './ShowingTask'

export default function Task({ title, isCompleted, id }: ITask) {
  const { deleteTask, } = useAppContext()
  const [isEditing, setIsEditing] = useState<boolean>(false)

  return (
    <div className="flex justify-between items-center w-full min-h-10 bg-slate-300 rounded-xl py-4 my-2" data-testid="tasks">
      {
        isEditing ? <TaskEditing title={title} id={id as string} setIsEditing={setIsEditing} />
          : <ShowingTask isCompleted={isCompleted} id={id as string} title={title} setIsEditing={setIsEditing} />
      }
      <button
        className="mr-7"
        onClick={() => deleteTask(id as string)}
        title="delete"
        data-testid="button-delete-task"
      ><Trash color="red" size={20} /></button>
    </div>
  )
}