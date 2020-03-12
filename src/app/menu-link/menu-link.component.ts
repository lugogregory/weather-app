import { Component, OnInit } from '@angular/core';
import { User } from 'src/assets/models/models';

@Component({
  selector: 'app-menu-link',
  templateUrl: './menu-link.component.html',
  styleUrls: ['./menu-link.component.css']
})



export class MenuLinkComponent implements OnInit {
  public user: User = new User('','');
  
  constructor() { }

  ngOnInit(): void {
    this.user.username = localStorage.getItem("userName");
    this.user.password = localStorage.getItem("password");
  }

  ngOnChanges(): void {
    this.user.username = localStorage.getItem("userName");
    this.user.password = localStorage.getItem("password");
  }

}
