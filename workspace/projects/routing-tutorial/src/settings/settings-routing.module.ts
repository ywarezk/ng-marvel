import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { DashboardSettingsComponent } from './dashboard-settings/dashboard-settings.component';

// /settings/settings/user
const routes: Routes = [
  {
    path: 'user', component: UserSettingsComponent
  },
  {
    path: 'dashboard', component: DashboardSettingsComponent
  },
  // {
  //   path: ':role', loadChildren: () => {

  //   }
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
