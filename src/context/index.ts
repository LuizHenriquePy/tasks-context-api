import { createContext } from "react";
import { ITasks } from "../interfaces/ITasks";

export const INITIAL_STATE = {
  tasks: [] as ITasks[]
}

export type initialStateTypes = typeof INITIAL_STATE

export const AppContext = createContext({
  state: INITIAL_STATE,
  addNewTask: (task: string) => { }
})