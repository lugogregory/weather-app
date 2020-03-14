import { Component, OnInit, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { User } from 'src/assets/models/models';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponent implements OnInit {
  public user: User = new User('', '');
  public errorUser = { userName: true, password: true };
  public errorMsg = false;

  @Output() logedSend = new EventEmitter<boolean>();

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void { }

  onChange(event: any) {
    const validated = event.target.value === '' ? true : false;
    if (event.target.name === 'username')
      this.errorUser = { userName: validated, password: this.errorUser.password };
    else
      this.errorUser = { userName: this.errorUser.userName, password: validated };
    this.errorMsg = false;
  }

  sendUser(event) {
    if (this.errorUser.userName || this.errorUser.password) {
      this.errorMsg = true;
    } else {
      localStorage.setItem("userName", this.user.username);
      localStorage.setItem("password", this.user.password);
      this.logedSend.emit(true);
    }
    //this.cdRef.markForCheck();
  }

}
