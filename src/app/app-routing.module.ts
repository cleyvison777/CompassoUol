import { UserListComponent } from './users/user-list/user-list.component';
import { HomeComponent } from './core/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

 const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'users/list', component: UserListComponent}

 ];

 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })

 export class AppRoutingModule { }
