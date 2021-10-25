import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../Entities/Users';
import { CreateUsersFormsService } from './shared/services/users/createUsers.form.service';
import { UsersService } from './shared/services/users/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {

  createForm: FormGroup;

  constructor(
    private readonly router: Router, private createUsersFormsService : CreateUsersFormsService,
    private usersService : UsersService ) { }

  ngOnInit(): void {
    this.createForm = this.createUsersFormsService.createUsersForm()
  }

  /**
   * Este método no se puede modificar
   * */
  public redirectToListUsers(): void {
    this.router.navigateByUrl('/users/list');
  }

  onCreate(){
    let inputName = this.createForm.get('name').value
    let inputJob = this.createForm.get('job').value
    const input = {name : inputName, job : inputJob}
    this.usersService.createUser(input).subscribe(response =>{
      if(response.name !== null){
        alert("Created user: " + response.name +"\r\n User id: " + response.id +"\r\n Created At: " + response.createdAt)
        this.redirectToListUsers();
      }
      else{
        alert("An error ocurred during the user creation, please try again")
      }
    })

  }
}
