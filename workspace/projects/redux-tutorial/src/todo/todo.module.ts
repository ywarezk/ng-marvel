import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
// import * as fromTodo from '../app/reducers/todo.reducer';
// import { EffectsModule } from '@ngrx/effects';
// import { TodoEffects } from '../app/effects/todo.effects';
import * as fromTodo from './reducers/todo.reducer';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
// import { TodoEffects } from './effects/todo.effects';



@NgModule({
  declarations: [ListComponent],
  imports: [

    CommonModule,
    StoreModule.forFeature(fromTodo.todoFeatureKey, fromTodo.reducer),
    // EffectsModule.forFeature([TodoEffects])
    HttpClientModule
  ],
  exports: [ListComponent]
})
export class TodoModule { }
