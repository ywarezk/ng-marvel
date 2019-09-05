import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { AnotherChildComponent } from './another-child/another-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    AnotherChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
