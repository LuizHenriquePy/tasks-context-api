import { ReactNode, useReducer } from "react"
import { AppContext, INITIAL_STATE } from "."
import { EAppContextActions } from "../enums/EAppContextActions"
import { AppContextReducer } from "./reducer"
import { v4 as uuid } from 'uuid'

type AppContextProviderProps = {
  children: ReactNode
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [state, dispatch] = useReducer(AppContextReducer, INITIAL_STATE)

  const addNewTask = (title: string) => {
    dispatch({
      type: EAppContextActions.addTask,
      payload: [{ title, isCompleted: false, id: uuid() }, ...state.tasks]
    })
  }

  const deleteTask = (id: string) => {
    dispatch({
      type: EAppContextActions.deleteTask,
      payload: state.tasks.filter((task) => task.id !== id)
    })
  }

  const changeTask = (id: string) => {
    dispatch({
      type: EAppContextActions.changeTask,
      payload: state.tasks.map((task) => {
        if (task.id === id) {
          task.isCompleted = !task.isCompleted
        }
        return task
      })
    })
  }

  const editTask = (id: string, title: string) => {
    dispatch({
      type: EAppContextActions.editTask,
      payload: state.tasks.map((task) => {
        if (task.id === id) {
          task.title = title
        }
        return task
      })
    })
  }

  return (
    <AppContext.Provider
      value={{
        state,
        addNewTask,
        deleteTask,
        changeTask,
        editTask
      }}
    >
      {children}
    </AppContext.Provider>
  )
}