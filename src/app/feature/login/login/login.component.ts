import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginIn } from '../shared/LoginIn';
import { LoginFormsService } from '../shared/services/login/login.form.service';
import { LoginService } from '../shared/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginError: boolean = false;
  loginErrorMessage: string;

  constructor(private readonly router: Router, private loginFormsService: LoginFormsService,
    private loginService: LoginService) { }
  ngOnInit(): void {
    this.loginForm = this.loginFormsService.getLoginForm()
  }

  /**
   * Este método no se puede modificar
   * */
  public redirectUsers(): void {
    this.router.navigateByUrl('/users/list');
  }

  LogIn() {
    this.loginError = false;
    if (this.loginForm.valid) {
      let loginIn = new LoginIn();
      loginIn.email = this.loginForm.get('email').value
      loginIn.password = this.loginForm.get('password').value

      this.loginService.login(loginIn).subscribe(response => {
        localStorage.setItem("token", response.token)
        this.redirectUsers()
      },
        (ResponseError) => {
          this.loginError = true;
          this.loginErrorMessage = ResponseError.error.error
        })

    }
  }

}

