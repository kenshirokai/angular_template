import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../types/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public emailRegExp: string = "^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
  public title: string = "login";
  public user = new User();

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  public onSubmit() {
    console.log(this.user)
    this.router.navigate(['/collections'])
  }

}
