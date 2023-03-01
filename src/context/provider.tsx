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
    console.log('ADAFD: ')
    dispatch({
      type: EAppContextActions.addTask,
      payload: { title, isCompleted: false }
    })
  }

  return (
    <AppContext.Provider
      value={{
        state,
        addNewTask
      }}
    >
      {children}
    </AppContext.Provider>
  )
}