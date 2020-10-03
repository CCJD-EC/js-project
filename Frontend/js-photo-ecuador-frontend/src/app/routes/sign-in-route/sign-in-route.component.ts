import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/http/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in-route',
  templateUrl: './sign-in-route.component.html',
  styleUrls: ['./sign-in-route.component.css']
})
export class SignInRouteComponent implements OnInit {

  constructor(
    private readonly _userService: UserService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
  }

  signUp(user){
    const obsCreateUser = this._userService.newUser(user);
    obsCreateUser
      .subscribe(
        (datos)=>{
          const url = ['/main'];
          this._router.navigate(url);
        },
        (error)=>{
          console.error('Error', error);
        }
      );
  }
}
