import { useAppContext } from "../context/hook";
import { ITask } from "../interfaces/ITask";

export default function Task({ title, isCompleted, id }: ITask) {
  const { deleteTask } = useAppContext()
  return (
    <div>
      <input type="checkbox" checked={isCompleted} />
      <h1>{title}</h1>
      <button
        onClick={() => deleteTask(id)}
      >Deletar</button>
    </div>
  )
}