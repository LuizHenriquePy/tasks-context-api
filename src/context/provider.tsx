import { ReactNode, useCallback, useReducer } from "react"
import { AppContext, INITIAL_STATE } from "."
import { EAppContextActions } from "../enums/EAppContextActions"
import { AppContextReducer } from "./reducer"

type AppContextProviderProps = {
  children: ReactNode
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [state, dispatch] = useReducer(AppContextReducer, INITIAL_STATE)

  const addNewTask = (title: string) => {
    dispatch({
      type: EAppContextActions.addTask,
      payload: { title, isCompleted: false }
    })
  }

  const deleteTask = (id: string) => {
    dispatch({
      type: EAppContextActions.deleteTask,
      payload: state.tasks.filter((task) => task.id !== id)
    })
  }

  return (
    <AppContext.Provider
      value={{
        state,
        addNewTask,
        deleteTask
      }}
    >
      {children}
    </AppContext.Provider>
  )
}