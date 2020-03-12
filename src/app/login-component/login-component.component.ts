import { Component, OnInit } from '@angular/core';
import { User } from 'src/assets/models/models';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponent implements OnInit {
  public user: User = new User('','');
  constructor() {}
  
  ngOnInit(): void {  }

  sendUser(){
    localStorage.setItem("userName", this.user.username);
    localStorage.setItem("password", this.user.password);
  }

}
