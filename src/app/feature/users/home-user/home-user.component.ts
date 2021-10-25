import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.scss']
})
export class HomeUserComponent implements OnInit {

  constructor(private readonly router: Router) { }

  
  ngOnInit(): void {
    let token = localStorage.getItem('token')
    if (token === null || token === undefined || token === "") {
      this.router.navigateByUrl('/login');
    }
    else {
      this.router.navigateByUrl('/list');
    }
  }

}
