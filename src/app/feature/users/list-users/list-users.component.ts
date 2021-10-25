import { Component, OnInit } from '@angular/core';
import { UsersService } from '../create-user/shared/services/users/users.service';
import { Users } from '../Entities/Users';
import { FilterUserByNamePipe } from "../../../shared/pipes/filter-user-by-name/filter-user-by-name.pipe";
@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  userList : Array<Users> = []
  user_list_filter = ""

  ngOnInit(){
    console.log("On users list");
    this.getUsers();
    
  }

  getUsers(){
    this.usersService.getUsers().subscribe(response =>{
      this.userList = response.data;
    })
  }

  onDelete(name: string, last_name : string, i : number){
    this.usersService.deleteUserForIndex(i).subscribe(() =>{
      alert("Deleted user: " + name + " "+ last_name)
    })
  }



}
