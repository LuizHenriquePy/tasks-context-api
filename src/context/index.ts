import { createContext } from "react";
import { ITask } from "../interfaces/ITask";
import { v4 as uuid } from 'uuid'


export const INITIAL_STATE = {
  tasks: [
    { title: "Entrar no GitHub do LuizHenriquePy e seguir ele", isCompleted: false, id: uuid() },
    { title: "Fazer carinho em um gato", isCompleted: false, id: uuid() },
    { title: "Comer chocolate todos os dias durante 3 semanas", isCompleted: true, id: uuid() },
  ] as ITask[]
}

export type initialStateTypes = typeof INITIAL_STATE

export const AppContext = createContext({
  state: INITIAL_STATE,
  addNewTask: (task: string) => { },
  deleteTask: (id: string) => { },
  changeTask: (id: string) => { },
  editTask: (id: string, title: string) => { }
})