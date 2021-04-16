import { ErrorHandlerService } from './error-handler.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbarComponent,
    HomeComponent],

  exports:[NavbarComponent,
    HomeComponent],

    providers:[
      ErrorHandlerService
    ]
})
export class CoreModule { }
