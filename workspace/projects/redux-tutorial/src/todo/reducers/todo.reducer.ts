
import { TodoActions, TodoActionTypes } from '../actions/todo.actions';
import {EntityState, createEntityAdapter, EntityAdapter} from '@ngrx/entity';

export const todoFeatureKey = 'todo';

interface Task {
  id: number;
  title: string;
  description : string;
  group: string;
  when : Date
}

export interface TodoState extends EntityState<Task> {
  selectedTask: number
}

const adapter : EntityAdapter<Task> = createEntityAdapter<Task>();

export const initialState: TodoState = adapter.getInitialState({
  selectedTask : null
});

export function reducer(state = initialState, action: TodoActions): TodoState {
  switch (action.type) {

    case TodoActionTypes.SetTasks:
      return adapter.addMany(action.tasks, state);

    default:
      return state;
  }
}

export const selectAll = adapter.getSelectors().selectAll;