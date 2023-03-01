import { EAppContextActions } from "../enums/EAppContextActions";

export interface IDispatchAction {
  type: EAppContextActions,
  payload?: any
}