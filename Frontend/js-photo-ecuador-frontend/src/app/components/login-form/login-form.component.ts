import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import {UserService} from "../../services/http/user.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  credentials={
    email:'',
    password:'',
  }
  @Output()
  validLogin : EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router,
    private readonly _userService: UserService
  ) { }

  ngOnInit(): void {
  }

  checkLogin(LoginForm:NgForm){
    const obsLogin= this._authService.login(
      this.credentials.email, this.credentials.password);
    obsLogin.
    subscribe(
      (user:any[])=>{
        this._authService.user = user;
        if(user.length > 0){
          this._authService.isAuthenticate=true;
          this._router.navigate(['/main']);
        }else{
          this._authService.isAuthenticate=false;
        }
      },
      (error)=>{
        console.error('Error', error);
      }
    );
  }
}
