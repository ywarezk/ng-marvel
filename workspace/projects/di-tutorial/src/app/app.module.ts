import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageService } from './message.service';
import { messageToken} from '../token';
import { ChildComponent } from './child/child.component';
import { TodoModule } from '../todo/todo.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    TodoModule,
    HttpClientModule
  ],
  providers: [
    // MessageService,
    // {provide: MessageService, useExisting: MessageService2},
    {provide: MessageService2, useClass: MessageService2},
    {provide: 'hello', useValue: 'world'},
    {provide: 'foo', deps: [HttpClient], useFactory: (http: HttpClient) => {
      return {
        'foo': 'bar'
      }
    }},
    {
      provide: messageToken, useValue: 42
    },
    {
      provide: 'message', useValue: 'hello gregory'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
