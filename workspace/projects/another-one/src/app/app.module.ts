import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HelloIsraelModule} from '@nz/hello-israel';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HelloIsraelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
