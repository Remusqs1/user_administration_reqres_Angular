import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UsersService } from '../create-user/shared/services/users/users.service';
import { Users } from '../Entities/Users';
import { ListUsersFormsService } from './list-users.form.service';

@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {

  constructor(private usersService: UsersService, private listUsersFormsService : ListUsersFormsService) { }

  userList: Array<Users> = []
  user_list_filter = ""
  pagerForm : FormGroup
  totalPagesArray = [];
  totalPages = 0;
  perPage : number = 3;

  ngOnInit() {
    this.getUsers();
    this.pagerForm = this.listUsersFormsService.itemPerPageForm()
  }

  getUsers(page : number = 1, perPage: number = this.perPage) {
    this.usersService.getUsers(page, perPage).subscribe(response => {
      this.userList = response.data;
      this.totalPages = response.total_pages
      this.totalPagesArray = new Array(this.totalPages)
    })
  }

  onDelete(name: string, last_name: string, i: number) {
    this.usersService.deleteUserForIndex(i).subscribe(() => {
      alert("Deleted user: " + name + " " + last_name)
    })
  }

  GoPage(page:number){
    this.getUsers(page, this.perPage)
  }

  setItemsPerPage() {
    this.perPage = this.pagerForm.get('perPage').value
    this.getUsers(1, this.perPage)
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return true;
    }
    return false;
  }

}
