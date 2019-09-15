import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoginTemplateComponent } from './login-template/login-template.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TodoListComponent,
    LoginReactiveComponent,
    LoginTemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
