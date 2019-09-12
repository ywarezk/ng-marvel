import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { HelloControlComponent } from './hello-control/hello-control.component';
import { FelixValidationDirective } from './felix-validation.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    HelloControlComponent,
    FelixValidationDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
