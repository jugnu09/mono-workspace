import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
const mfeAppUrl = "http://localhost:4300/remoteEntry.js";
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {
    path: 'todo', 
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: mfeAppUrl,
        remoteName: 'mfeApp',
        exposedModule: './TodoModule'
      }).then((m) => {
        return m.TodoModule
      })
    }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeComponentArray =[HomeComponent];
