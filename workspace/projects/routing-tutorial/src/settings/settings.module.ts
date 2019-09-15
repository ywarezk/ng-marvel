import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { DashboardSettingsComponent } from './dashboard-settings/dashboard-settings.component';


@NgModule({
  declarations: [UserSettingsComponent, DashboardSettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
