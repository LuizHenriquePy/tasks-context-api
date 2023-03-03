import { useAppContext } from "../context/hook";
import { ITask } from "../interfaces/ITask";

export default function Task({ title, isCompleted }: ITask) {
  // const {  } = useAppContext()
  return (
    <div>
      <input type="checkbox" checked={isCompleted} />
      <h1>{title}</h1>
      <button>Deletar</button>
    </div>
  )
}