import { initialStateTypes, INITIAL_STATE } from '.'
import { EAppContextActions } from '../enums/EAppContextActions';
import { IDispatchAction } from '../interfaces/IDispatchAction';

export const AppContextReducer = (
  state = INITIAL_STATE,
  action: IDispatchAction): initialStateTypes => {
  switch (action.type) {
    case EAppContextActions.addTask:
      return {
        ...state,
        tasks: [{ ...action.payload }, ...state.tasks]
      }
    default:
      return state;
  }
}