import { Action, createReducer, on } from '@ngrx/store';


export const usersFeatureKey = 'users';

export interface State {

}

export const initialState: State = {

};

const usersReducer = createReducer(
  initialState,

);

export function reducer(state: State | undefined, action: Action) {
  return usersReducer(state, action);
}
