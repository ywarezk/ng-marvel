import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { SettingsModule } from '../settings/settings.module';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'settings', loadChildren: async () => {
    const settingModule : {[key: string]: any} = await import('../settings/settings.module')
    return settingModule.SettingsModule;
  }}
  // {path: 'gregory', component: GregoryComponent, outlet: 'gregory'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
