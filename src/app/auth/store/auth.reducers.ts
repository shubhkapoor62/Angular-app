import { Ingredient } from 'src/app/shared/shared/ingredient.model';


export interface State {
    token: string;
    authenticated: boolean;
}

export const initialState: State = {
    token: null,
    authenticated: false
};

export function authReducer(state = initialState, action) {
    return state;
}