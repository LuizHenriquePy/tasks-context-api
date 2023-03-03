import { initialStateTypes, INITIAL_STATE } from '.'
import { EAppContextActions } from '../enums/EAppContextActions';
import { IDispatchAction } from '../interfaces/IDispatchAction';
import { v4 as uuid } from 'uuid'

export const AppContextReducer = (
  state = INITIAL_STATE,
  action: IDispatchAction): initialStateTypes => {
  switch (action.type) {
    case EAppContextActions.addTask:
      return {
        ...state,
        tasks: [{ ...action.payload, id: uuid() }, ...state.tasks]
      }
    case EAppContextActions.deleteTask:
      return {
        ...state,
        tasks: action.payload
      }
    default:
      return state;
  }
}