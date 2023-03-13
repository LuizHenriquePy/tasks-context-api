import { initialStateTypes, INITIAL_STATE } from '.'
import { EAppContextActions } from '../enums/EAppContextActions';
import { IDispatchAction } from '../interfaces/IDispatchAction';

export const AppContextReducer = (
  state = INITIAL_STATE,
  action: IDispatchAction): initialStateTypes => {
  switch (action.type) {
    case EAppContextActions.addTask:
    case EAppContextActions.deleteTask:
    case EAppContextActions.changeTask:
    case EAppContextActions.editTask:
      return {
        ...state,
        tasks: action.payload
      }
    default:
      return state;
  }
}