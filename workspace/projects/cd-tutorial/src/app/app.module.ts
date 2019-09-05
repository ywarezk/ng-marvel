import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { GrandChild2Component } from './grand-child2/grand-child2.component';
import { GrandChild1Component } from './grand-child1/grand-child1.component';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    GrandChild2Component,
    GrandChild1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
