import { Component, OnInit, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { User } from 'src/assets/models/models';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponent implements OnInit {
  public user: User = new User('','');

  @Output() logedSend = new EventEmitter<boolean>();

  constructor(private cdRef: ChangeDetectorRef) {}
  
  ngOnInit(): void {  }

  sendUser(event){
    localStorage.setItem("userName", this.user.username);
    localStorage.setItem("password", this.user.password);
    this.logedSend.emit(true);
    //this.cdRef.markForCheck();
  }

}
