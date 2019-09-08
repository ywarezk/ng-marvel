import { Action } from '@ngrx/store';

export enum TodoActionTypes {
  SetTasks = '[Todo] Set Tasks',
  
  
}

export class SetTasks implements Action {
  readonly type = TodoActionTypes.SetTasks;

  constructor(public tasks: any[]) {}
}


export type TodoActions = SetTasks;
