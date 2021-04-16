import { CadUsers, Page } from './../../core/model';
import { UserService, Userfilter } from './../user.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  users: Array<CadUsers> = [];
  private page: Page;
  filter:string = '';
  @ViewChild('tabela') grid;
  public paginaAtual = 1;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.listUsers();
  }

  // pesquisar(page = 0){
  //    this.filtro.page = page;
  //     this.userService.listUser(this.filtro)};

  //

  listUsers(){
    this.userService.listUser().subscribe((users: CadUsers[]) => {
      this.users = users;})
  }
}

