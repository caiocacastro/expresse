import { StateType } from "typesafe-actions";
import { UserReducer } from "./user";

export const sessionReducers = {
  user: UserReducer,
};

export const localReducers = {};

type SessionState = StateType<typeof sessionReducers>;
type LocalState = StateType<typeof localReducers>;

export type RootState = {
  session: SessionState;
  local: LocalState;
};
