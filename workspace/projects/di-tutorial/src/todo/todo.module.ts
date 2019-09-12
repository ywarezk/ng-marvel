import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    // HelloService
    {provide: 'message', useValue: 'hello felix'}
  ]
})
export class TodoModule { }
