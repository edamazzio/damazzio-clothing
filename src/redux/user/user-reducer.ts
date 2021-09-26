export interface RootState {
    currentUser
}

const INITIAL_STATE: RootState = {
    currentUser: null
}

export enum UserReducerActions {
    SET_CURRENT_USER = "SET_CURRENT_USER"
}

const userReducer = (state:RootState = INITIAL_STATE, action: { type: UserReducerActions, payload }) => {
    switch (action.type) {
        case UserReducerActions.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;