import { FilterDescription } from './user-list/filter-description.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import {  HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserFilteComponent } from './user-filte/user-filte.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgxPaginationModule



  ],
  declarations: [UserListComponent,
    FilterDescription,
    UserFilteComponent]
})
export class UsersModule { }
