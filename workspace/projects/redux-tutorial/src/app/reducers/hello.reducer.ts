import { Action } from '@ngrx/store';
import {HelloActionTypes, SetHelloMessage} from '../hello.actions';


export const helloFeatureKey = 'hello';

export interface HelloState {
  msg : string
}

export const initialState: HelloState = {
  msg: 'initial hello world'
};

export function helloReducer(state = initialState, action: Action): HelloState {
  switch (action.type) {
    case HelloActionTypes.SetHelloMessage:
      return {...state, msg: (<SetHelloMessage>action).newMessage};
    default:
      return state;
  }
}
