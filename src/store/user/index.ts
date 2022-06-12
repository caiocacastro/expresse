import {
  createActionCreators,
  createReducerFunction,
  ImmerReducer,
} from "immer-reducer";
import { User } from "../../model/user";

type State = {
  loggedUser?: User;
};

const initialState: State = {
  loggedUser: {
    name: "Usuario Padrao",
    email: "usuario.padrao@gmail.com",
    id: 1,
  },
};

class userReducer extends ImmerReducer<State> {
  setUser(user: User) {
    this.draftState.loggedUser = user;
  }
}

export const UserActions = createActionCreators(userReducer);
export const UserReducer = createReducerFunction(userReducer, initialState);

export { default as UserThunks } from "./thunks";
