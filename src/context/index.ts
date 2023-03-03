import { createContext } from "react";
import { ITask } from "../interfaces/ITask";

export const INITIAL_STATE = {
  tasks: [] as ITask[]
}

export type initialStateTypes = typeof INITIAL_STATE

export const AppContext = createContext({
  state: INITIAL_STATE,
  addNewTask: (task: string) => { },
  deleteTask: (id: string) => { }
})