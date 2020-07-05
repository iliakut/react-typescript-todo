import {ThunkAction} from "redux-thunk";
import {Action} from "redux";
import {StoreType} from "../store";

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  StoreType,
  unknown,
  Action<string>
  >