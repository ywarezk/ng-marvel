import { Action } from '@ngrx/store';

export enum HelloActionTypes {
  SetHelloMessage = '[Hello] Set Hello Message',
}

export class SetHelloMessage implements Action {
  readonly type = HelloActionTypes.SetHelloMessage;

  constructor(public newMessage : string) {}
}


export type HelloActions = SetHelloMessage;
