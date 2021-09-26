import {UserReducerActions} from "./user-reducer";
import {IUser} from "../../interfaces/Users";

export const setCurrentUser = (user: IUser) => ({
    type: UserReducerActions.SET_CURRENT_USER,
    payload: user
})